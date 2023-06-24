import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  min-height: 325px;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.header};
  padding: ${getStatusBarHeight() + 30}px 25px  32px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  color: ${({ theme }) => theme.color.background_secondary};
  margin-top: 41px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.text};
`;

interface DateValueProps {
  selected: boolean;
}

export const DateValue = styled.Text<DateValueProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
  margin-top: 9px;
  color: ${({ theme }) => theme.color.background_secondary};

  ${({ theme, selected }) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.color.text};
    padding-bottom: 5px;
  `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;