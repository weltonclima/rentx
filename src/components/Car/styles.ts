import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  margin-top: 16px;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.background_secondary};
`;

export const Details = styled.View`
 

`;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-style: normal;
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  color: ${({ theme }) => theme.color.text_detail};
  text-transform: uppercase;
`;
export const Name = styled.Text`
  margin-top: 4px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-style: normal;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(16)}px;
  color: ${({ theme }) => theme.color.title};
`;
export const About = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Rent = styled.View`
  margin-right: 24px;
`;
export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-style: normal;
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  color: ${({ theme }) => theme.color.text_detail};
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-style: normal;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(16)}px;
  color: ${({ theme }) => theme.color.main};
`;

export const Type = styled.View`
  
`;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;