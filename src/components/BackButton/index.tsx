import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButtonProps, GestureHandlerRootView } from "react-native-gesture-handler";

import { useTheme } from "styled-components";
import { Container } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}
export function BackButton({ color, ...rest }: BackButtonProps) {

  const theme = useTheme();

  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={color ?? theme.color.text}
        />
      </Container>
    </GestureHandlerRootView>
  )
}