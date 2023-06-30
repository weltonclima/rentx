import { useNavigation, useRoute } from "@react-navigation/native";
import { addDays, eachDayOfInterval, format } from "date-fns";
import { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { DateData } from "react-native-calendars";
import { MarkedDates } from "react-native-calendars/src/types";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { ICar } from "../../interfaces/ICar";
import { IRentalPeriod } from "../../interfaces/IRentalPeriod";
import { ISchedulesBycars } from "../../interfaces/ISchedulesBycars";
import { api } from "../../services/api";
import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title } from "./styles";

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState({} as DateData);
  const [markedDate, setMarkedDate] = useState({} as MarkedDates);
  const [rentalPeriod, setRentalPeriod] = useState({} as IRentalPeriod);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();
  const car = useRoute().params as ICar

  function handleChangeDate(date: DateData) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDate(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormated: format(addDays(new Date(firstDate), 1), 'dd/MM/yyyy'),
      endFormated: format(addDays(new Date(endDate), 1), 'dd/MM/yyyy')
    });

  }

  function generateInterval(start: DateData, end: DateData) {
    let interval = {} as MarkedDates;

    eachDayOfInterval({
      start: new Date(start.timestamp),
      end: new Date(end.timestamp)
    }).forEach(item => {

      const date = format(addDays(item, 1), 'yyyy-MM-dd');
      interval = {
        ...interval,
        [date]: {
          color: start.dateString === date || end.dateString === date ?
            theme.color.main : theme.color.main_light,
          textColor: start.dateString === date || end.dateString === date ?
            theme.color.main_light : theme.color.main,
        }
      }

    });
    return interval;
  }

  async function handleScheduling() {

    try {
      setLoading(true);
      const findSchedules = await api.get<ISchedulesBycars>(`schedules_bycars/${car.id}`);
      if (findSchedules.status == 200) {

        const IsSqueduled = findSchedules.data.unavailable_dates.filter(f => Object.keys(markedDate).includes(f))
        if (!!IsSqueduled.length) {
          setLoading(false);
          return Alert.alert("Datas selecionadas já exite agendamento. " +
            IsSqueduled.map(m => (
              format(addDays(new Date(m), 1), "dd/MM/yyyy")
            )).join(" - "))
        }
      }
    } catch (error) { console.log({ error }) }
    finally { setLoading(false); }

    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDate)
    })
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton
          onPress={() => navigation.goBack()}
          color={theme.color.background_primary}
        />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormated}>
              {rentalPeriod.startFormated}
            </DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormated}>
              {rentalPeriod.endFormated}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar
          markedDates={markedDate}
          onDayPress={handleChangeDate}
        />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
          onPress={handleScheduling}
          loading={loading}
          enabled={!!rentalPeriod.startFormated}
        />
      </Footer>
    </Container>
  )
}