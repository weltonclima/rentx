import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps extends RectButtonProps {
  color?: string;
}
export const Container = styled(RectButton) <ContainerProps>`
  width:100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) =>
    color ?? theme.color.main};
  opacity: ${({ enabled }) => enabled ? 1 : 0.5}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
  text-align: center;
  color: ${({ theme }) => theme.color.background_secondary};
`;