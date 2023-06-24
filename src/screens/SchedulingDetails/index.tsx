import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import {
  Accessories,
  Brand, CalendarIcon, CarImages, Container, Content, DateInfo, DateTitle, DateValue, Description, Details,
  Footer,
  Header, Name, Period, Price, Rent, RentalPeriod, RentalPrice, RentalPriceDetails, RentalPriceQuota, RentalPriceTotal, RentalPricelabel
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import AccelerationSvg from "../../assets/acceleration.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import PeopleSvg from "../../assets/people.svg";
import SpeedSvg from "../../assets/speed.svg";
import { Button } from "../../components/Button";

interface SchedulingDetailsProps {

}
export function SchedulingDetails({ }: SchedulingDetailsProps) {
  const theme = useTheme();
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
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.color.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>22/06/2023</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(15)}
            color={theme.color.text_detail}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>23/06/2023</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPricelabel>TOTAL</RentalPricelabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          onPress={() => navigation.navigate("SchedulingComplete")}
          color={theme.color.success}
        />
      </Footer>
    </Container>
  )
}