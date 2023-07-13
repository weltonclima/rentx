
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, FlatList, StatusBar, StyleSheet } from 'react-native';
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';
import { ICar } from '../../interfaces/ICar';
import { api } from '../../services/api';
import { Container, Content, Header, TotalCars } from './styles';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function Home() {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<ICar[]>([]);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);
  const MyCarButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  })

  const navigation = useNavigation();
  const theme = useTheme();

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: { startX: number; startY: number }) {
      context.startX = positionX.value;
      context.startY = positionY.value;
    },
    onActive(event, context) {
      positionX.value = context.startX + event.translationX;
      positionY.value = context.startY + event.translationY;

    }, onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  })

  useEffect(() => {
    async function fetchCars() {
      try {
        setLoading(true)
        const { data } = await api.get<ICar[]>('cars');
        setCars(data);

      } catch (error) {
        Alert.alert("Erro ao consultar carros")
      } finally {
        setLoading(false)
      }
    }
    fetchCars();

    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    })
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <Logo
          width={RFValue(108)}
          height={RFValue(12)}
        />
        {!loading &&
          <TotalCars>
            Total {cars.length} carros
          </TotalCars>
        }
      </Header>
      {loading ?
        <LoadAnimation />
        :
        <Content>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cars}
            keyExtractor={key => `${key.id}`}
            renderItem={({ item }) =>
              <Car
                data={item}
                onPress={() => navigation.navigate('CarDetails', item)}
              />
            }
          />
          <PanGestureHandler onGestureEvent={onGestureEvent} >
            <Animated.View style={[
              MyCarButtonStyle, {
                position: 'absolute',
                bottom: 13,
                right: 22,
              }
            ]}>

              <ButtonAnimated
                onPress={() => navigation.navigate("MyCars")}
                style={[styles.button, { backgroundColor: `${theme.color.main}`, }]}
              >
                <Ionicons
                  name='ios-car-sport'
                  size={32}
                  color={theme.color.shape}
                />
              </ButtonAnimated>

            </Animated.View>
          </PanGestureHandler>
        </Content>
      }
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  }
})