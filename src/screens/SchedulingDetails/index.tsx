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
import { useNavigation, useRoute } from "@react-navigation/native";
import { addDays, format, } from "date-fns";
import { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { ICar } from "../../interfaces/ICar";
import { ISchedulesBycars } from "../../interfaces/ISchedulesBycars";
import { ISchedulesByuser } from "../../interfaces/ISchedulesByuser";
import { api } from "../../services/api";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

interface SchedulingDetailsProps {

}
export function SchedulingDetails({ }: SchedulingDetailsProps) {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();
  const { car, dates } = useRoute().params as {
    car: ICar,
    dates: string[]
  }

  const startDate = dates[0];
  const endDate = dates[dates.length - 1]

  async function handleConfirmRental() {
    setLoading(true);
    let unavailableDates: string[] = [];

    try {
      const { data } = await api.get<ISchedulesBycars>(`schedules_bycars/${car.id}`);

      unavailableDates = data?.unavailable_dates;
    } catch (error) { console.log({ error }) }

    try {

      const { data } = await api.post<ISchedulesByuser>("schedules_byuser", {
        user_id: 1,
        car: car,
        startDate,
        endDate
      });

      try {

        if (unavailableDates.length) {
          await api.put(`schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates: [...unavailableDates, ...dates]
          });

        } else {
          await api.post(`schedules_bycars`, {
            id: car.id,
            unavailable_dates: dates
          });
        }
        await navigation.navigate("SchedulingComplete");

      } catch (error) {
        await api.delete(`schedules_byuser/${data.id}`);
        return Alert.alert("Não foi possível confirmar o agendamento.");
      }

    } catch (error) {
      return Alert.alert("Não foi possível salvar o agendamento no cadastro do usuário.");
    } finally {
      setLoading(false);
    }
  }

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
            <Price>R$ {car.rent.price}</Price>
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
            <DateValue>{format(addDays(new Date(startDate), 1), 'dd/MM/yyyy')}</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(15)}
            color={theme.color.text_detail}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{format(addDays(new Date(endDate), 1), 'dd/MM/yyyy')}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPricelabel>TOTAL</RentalPricelabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x{dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
              }).format(car.rent.price * dates.length)}
            </RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          onPress={handleConfirmRental}
          color={theme.color.success}
          loading={loading}
        />
      </Footer>
    </Container>
  )
}