import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color:${({ theme }) => theme.color.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.View`
 
`;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text_detail};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  line-height: ${RFValue(27)}px;
  color: ${({ theme }) => theme.color.title};
`;

export const Rent = styled.View`
  
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text_detail};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  line-height: ${RFValue(27)}px;
  color: ${({ theme }) => theme.color.main};
`;

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;  
  margin-top: 16px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.line};
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.main};
  margin-right: 29px;
`;

export const DateInfo = styled.View`

`;

export const DateTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.color.text_detail};
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.color.title};
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPricelabel = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.color.text_detail};
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPriceQuota = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.color.title};
`;

export const RentalPriceTotal = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.color.success};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
  background-color:${({ theme }) => theme.color.background_primary};
`;