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
import AppLoading from 'expo-app-loading';

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

  if (!fontsLoaded)
    return (
      <AppLoading />
    )

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}