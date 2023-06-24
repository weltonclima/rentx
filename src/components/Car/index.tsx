import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type
} from "./styles";

import { GestureHandlerRootView, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import GasolinaSvg from '../../assets/gasoline.svg';

interface CarProps extends RectButtonProps {
  data: {
    brand: string;
    name: string;
    rent: {
      period: string;
      price: number;
    },
    thumbnail: string;
  }
}

export function Car({ data, ...rest }: CarProps) {

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <Details>
          <Brand>{data.brand}</Brand>
          <Name>{data.name}</Name>
          <About>
            <Rent>
              <Period>{data.rent.period}</Period>
              <Price>{`R$ ${data.rent.price}`}</Price>
            </Rent>
            <Type>
              <GasolinaSvg
                width={RFValue(15)}
                height={RFValue(18)}
              />
            </Type>
          </About>
        </Details>
        <CarImage
          source={{ uri: data.thumbnail }}
          resizeMode="contain"
        />
      </Container>
    </GestureHandlerRootView>
  )
}