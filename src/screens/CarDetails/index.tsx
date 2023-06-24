import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import {
  About,
  Accessories,
  Brand, CarImages, Container, Content, Description, Details,
  Footer,
  Header, Name, Period, Price, Rent
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AccelerationSvg from "../../assets/acceleration.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import PeopleSvg from "../../assets/people.svg";
import SpeedSvg from "../../assets/speed.svg";
import { Button } from "../../components/Button";

interface CarDetailsProps {

}
export function CarDetails({ }: CarDetailsProps) {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={["https://e7.pngegg.com/pngimages/262/890/png-clipart-audi-a5-2013-audi-rs-5-2014-audi-rs-5-sports-car-audi-sedan-car.png"]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory
            icon={SpeedSvg}
            name="380km/h"
          />
          <Accessory
            icon={AccelerationSvg}
            name="3.2s"
          />
          <Accessory
            icon={ForceSvg}
            name="800 HP"
          />
          <Accessory
            icon={GasolineSvg}
            name="Gasolina"
          />
          <Accessory
            icon={ExchangeSvg}
            name="Auto"
          />
          <Accessory
            icon={PeopleSvg}
            name="2 pessoas"
          />
        </Accessories>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado
          na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling')}
        />
      </Footer>
    </Container>
  )
}