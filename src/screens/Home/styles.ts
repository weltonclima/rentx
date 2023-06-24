import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";


export const Container = styled.View`
  
  //justify-content: center;
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

export const CarList = styled(FlatList).attrs({
  // contentContainerStyle: {
  //   padding: 24,
  // },
  showsVerticalScrollIndicator: false,
}) <FlatListProps<any>>`
  padding: 0 36px 0 24px;
`;