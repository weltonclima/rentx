import LottieView from "lottie-react-native";
import { Container } from "./styles";

export function LoadAnimation() {

  return (
    <Container>
      <LottieView
        source={require("../../assets/animatedCar.json")}
        resizeMode="contain"
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
      />
    </Container>
  )
}