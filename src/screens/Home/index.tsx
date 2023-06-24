
import React from 'react';
import { CarList, Container, Header, TotalCars } from './styles';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home() {
  const navigation = useNavigation();

  const data = {
    brand: "AUDI",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120
    },
    thumbnail: "https://e7.pngegg.com/pngimages/262/890/png-clipart-audi-a5-2013-audi-rs-5-2014-audi-rs-5-sports-car-audi-sedan-car.png"
  }

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
          Total 12 carros
        </TotalCars>
      </Header>
      <CarList
        data={[data, data, data, data, data, data, data]}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) =>
          <Car
            data={data}
            onPress={() => navigation.navigate('CarDetails')}
          />
        }
      />
    </Container>
  )
}