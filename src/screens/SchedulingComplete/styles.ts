//import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color:${({ theme }) => theme.color.header};
  padding-top:${getStatusBarHeight() + 66}px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 21px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.color.background_secondary}; 
  margin: 40px 0 16px;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.color.text_detail}; 
  line-height: ${RFValue(25)}px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  margin: 80px 0 46px;
`;