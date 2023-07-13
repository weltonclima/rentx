import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  useFonts
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold
} from '@expo-google-fonts/inter';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes/index.routes';
import theme from './src/styles/theme';


export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  })

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}