import { SvgProps } from "react-native-svg";
import { Container, Name } from "./styles";

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}
export function Accessory({
  icon: Icon, name
}: AccessoryProps) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  )
}