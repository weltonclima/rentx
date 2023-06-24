import { Feather } from '@expo/vector-icons';
import {
  Calendar as CustomCalendar,
  LocaleConfig
} from 'react-native-calendars';

import { useTheme } from 'styled-components';
import { Container } from "./styles";

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br';

interface CalendarProps {

}
export function Calendar({ }: CalendarProps) {
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
      />
    </Container>
  )
}