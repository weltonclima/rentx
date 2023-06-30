import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  background-color:${({ theme }) => theme.color.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  min-height: 273px;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.header};
  padding: ${getStatusBarHeight() + 19}px 25px  34px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.color.background_secondary};
  margin-top: 22px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(34)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.color.background_secondary};
  margin-top: 18px;
`;

export const Content = styled.View`
  flex: 1;
  width:100%;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width:100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 24px 29px;
`;

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.color.text};
`;

export const AppointmentsQuantity = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.color.title};
`;

export const CarWapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width:100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.background_secondary};
  margin-top: 4px;
  padding: 12px 24px;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  letter-spacing: ${RFValue(0.4)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text_detail};
`;

export const CarFooterDate = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.color.title};
`;