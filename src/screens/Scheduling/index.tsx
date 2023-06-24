import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title } from "./styles";

interface SchedulingProps {

}
export function Scheduling({ }: SchedulingProps) {
  const theme = useTheme();
  const navigation = useNavigation();

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
            <DateValue selected>18/06/2021</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button
          title="Confirmar"
          onPress={() => navigation.navigate("SchedulingDetails")}
        />
      </Footer>
    </Container>
  )
}