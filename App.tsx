import React from "react";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme"; //arquivo onde estão as variações das cores

// import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts, //useFonts pra poder utilizar as fontes
  Poppins_400Regular, //Fonte 400, tamanho normal
  Poppins_500Medium, //Fonte 500 , tamanho medium
  Poppins_700Bold, //Fonte 700, tamanho bold
} from "@expo-google-fonts/poppins";
// import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "./src/screens/SignIn";
import { AuthProvider } from "./src/hooks/auth";

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
      <NavigationContainer>
        <StatusBar translucent backgroundColor="#5633d3" />
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
