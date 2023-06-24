import { StatusBar, useWindowDimensions } from "react-native";
import { Container, Content, Footer, Message, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";
import DoneSvg from '../../assets/done.svg';
import LogoSvg from '../../assets/logo_background_gray.svg';
import { ConfirmButton } from "../../components/ConfirmButton";

interface SchedulingCompleteProps {

}
export function SchedulingComplete({ }: SchedulingCompleteProps) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton
          title="Ok"
          onPress={() => navigation.navigate("Home")}
        />
      </Footer>
    </Container>
  )
}