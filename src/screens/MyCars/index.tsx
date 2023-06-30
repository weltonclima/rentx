import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { Loading } from "../../components/Loading";
import { ISchedulesByuser } from "../../interfaces/ISchedulesByuser";
import { api } from "../../services/api";
import {
  Appointments, AppointmentsQuantity, AppointmentsTitle, CarFooter,
  CarFooterDate, CarFooterPeriod, CarFooterTitle, CarWapper, Container,
  Content, Header, SubTitle, Title
} from "./styles";

export function MyCars() {
  const [loading, setLoading] = useState(true);
  const [schedulesByuser, setSchedulesByuser] = useState<ISchedulesByuser[]>([]);

  const theme = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    api.get<ISchedulesByuser[]>("schedules_byuser?user_id=1")
      .then(res => setSchedulesByuser(res.data))
      .catch(_ => Alert.alert("Erro ao consultar agendamentos."))
      .finally(() => setLoading(false))
  }, [])

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
          Seus agendamentos,{'\n'}
          estão aqui.
        </Title>
        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>
      </Header>
      {loading ?
        <Loading />
        :
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{schedulesByuser.length}</AppointmentsQuantity>
          </Appointments>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={schedulesByuser}
            keyExtractor={key => `${key.id}`}
            renderItem={({ item }) =>
              <CarWapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.color.text_detail}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWapper>
            }
          />
        </Content>
      }
    </Container >
  )
}