import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  enabled?: boolean;
}
export function Button({
  title, color, loading = false, enabled = true, ...rest
}: ButtonProps) {

  const theme = useTheme();

  return (
    <Container {...rest}
      color={color}
      enabled={enabled && !loading}
    >
      {loading ?
        <ActivityIndicator
          color={theme.color.shape}
          size="small"
        />
        :
        <Title>{title}</Title>
      }
    </Container>
  )
}