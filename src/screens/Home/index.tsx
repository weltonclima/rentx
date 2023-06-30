
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';
import { ICar } from '../../interfaces/ICar';
import { api } from '../../services/api';
import { Container, Content, Header, MyCarButton, TotalCars } from './styles';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<ICar[]>([]);

  const navigation = useNavigation();
  const theme = useTheme();

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
        <TotalCars>
          Total {cars.length} carros
        </TotalCars>
      </Header>
      {loading ?
        <Loading />
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
          <MyCarButton
            onPress={() => navigation.navigate("MyCars")}
          >
            <Ionicons
              name='ios-car-sport'
              size={32}
              color={theme.color.shape}
            />
          </MyCarButton>
        </Content>
      }
    </Container>
  )
}