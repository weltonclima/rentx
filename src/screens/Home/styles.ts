import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  background-color:${({ theme }) => theme.color.background_primary};
`;

export const Header = styled.View`
  width:100%;
  height:113px;
  background-color:${({ theme }) => theme.color.header};
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: 32px 24px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-style: normal;
  line-height: 18px;
  text-align: right;
`;

export const Content = styled.View`
  flex: 1;
  width:100%;
  padding: 0 24px;
`;

export const MyCarButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: 13px;
  right: 22px;
  background-color: ${({ theme }) => theme.color.main};
`;