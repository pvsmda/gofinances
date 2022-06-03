import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme"; //arquivo onde estão as variações das cores
import { Register } from "./src/screens/Register";

import {
  useFonts, //useFonts pra poder utilizar as fontes
  Poppins_400Regular, //Fonte 400, tamanho normal
  Poppins_500Medium, //Fonte 500 , tamanho medium
  Poppins_700Bold, //Fonte 700, tamanho bold
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  }); // Garantir que as fontes vão carregar no dispositivo de qualquer usuário

  if (!fontsLoaded) {
    return <AppLoading />; //Enquanto não carregar as fontes retorna o AppLoading
  } //Se o fontsLoaded não carregar, permanecerá a tela de splash até as fontes carregarem
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
