import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

export function Loading() {
  const theme = useTheme();
  return (
    <ActivityIndicator
      color={theme.color.main}
      size="large"
      style={{ flex: 1 }}
    />
  )
}