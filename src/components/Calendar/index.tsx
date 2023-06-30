import { Feather } from '@expo/vector-icons';
import {
  Calendar as CustomCalendar
} from 'react-native-calendars';

import { DateData, MarkedDates } from 'react-native-calendars/src/types';
import { useTheme } from 'styled-components';
import "./localeConfig";
import { Container } from "./styles";

interface CalendarProps {
  markedDates: MarkedDates;
  onDayPress: (date: DateData) => void;
}
export function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();
  return (
    <Container>
      <CustomCalendar
        renderArrow={direction =>
          <Feather
            name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
            size={24}
            color={theme.color.text}
          />
        }
        headerStyle={{
          backgroundColor: theme.color.background_secondary,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.color.text_detail,
          paddingBottom: 10,
          marginBottom: 10
        }}
        theme={{
          textDayFontFamily: theme.fonts.primary_400,
          textDayHeaderFontFamily: theme.fonts.primary_500,
          textDayHeaderFontSize: 10,
          textMonthFontFamily: theme.fonts.secondary_500,
          textMonthFontSize: 20,
          monthTextColor: theme.color.title,
          arrowStyle: {
            marginHorizontal: -15
          }
        }}
        firstDay={1}
        minDate={new Date().toString()}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
      />
    </Container>
  )
}