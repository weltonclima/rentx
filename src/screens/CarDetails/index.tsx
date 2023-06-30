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

import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";

import { Button } from "../../components/Button";
import { ICar } from "../../interfaces/ICar";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

interface CarDetailsProps {

}
export function CarDetails({ }: CarDetailsProps) {
  const navigation = useNavigation();
  const car = useRoute().params as ICar
  
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
          imagesUrl={car.photos}
        />
      </CarImages>
      <Content>
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
        </About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling', car)}
        />
      </Footer>
    </Container>
  )
}