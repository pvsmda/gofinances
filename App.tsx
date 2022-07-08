import React from "react";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme"; //arquivo onde estão as variações das cores

import {
  useFonts, //useFonts pra poder utilizar as fontes
  Poppins_400Regular, //Fonte 400, tamanho normal
  Poppins_500Medium, //Fonte 500 , tamanho medium
  Poppins_700Bold, //Fonte 700, tamanho bold
} from "@expo-google-fonts/poppins";
// import { AppRoutes } from "./src/routes/app.routes";
// import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "./src/screens/SignIn";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  }); // Garantir que as fontes vão carregar no dispositivo de qualquer usuário

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />; //Enquanto não carregar as fontes retorna o AppLoading
  } //Se o fontsLoaded não carregar, permanecerá a tela de splash até as fontes carregarem
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor="#5633d3" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
