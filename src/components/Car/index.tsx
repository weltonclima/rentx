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

import { RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { ICar } from "../../interfaces/ICar";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

interface CarProps extends RectButtonProps {
  data: ICar
}

export function Car({ data, ...rest }: CarProps) {
  const Icon = getAcessoryIcon(data.fuel_type);

  return (
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
            <Icon
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
  )
}