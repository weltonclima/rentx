import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Description, Details,
  Footer,
  Header, Name, Period, Price, Rent
} from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar, StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Animated, {
  Extrapolate, interpolate, useAnimatedScrollHandler,
  useAnimatedStyle, useSharedValue
} from "react-native-reanimated";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { ICar } from "../../interfaces/ICar";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";


export function CarDetails() {

  const theme = useTheme();
  const navigation = useNavigation();
  const car = useRoute().params as ICar;

  const scrollY = useSharedValue(0);
  const scrollHandle = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const scrollStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP)
    }
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Animated.View
        style={[
          scrollStyles,
          styles.header,
          { backgroundColor: theme.color.background_secondary }
        ]}
      >
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
        </Header>
        <Animated.View style={[sliderCarsStyleAnimation]}>
          <CarImages>
            <ImageSlider
              imagesUrl={car.photos}
            />
          </CarImages>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        style={{
          padding: 24,
          position: 'relative',

          paddingTop: getStatusBarHeight() + 200
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandle}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price.toLocaleString()}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map(acessory => (
            <Accessory
              key={acessory.type}
              icon={getAcessoryIcon(acessory.type)}
              name={acessory.name}
            />
          ))}
        </Accessories>
        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling', car)}
        />
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  }
})