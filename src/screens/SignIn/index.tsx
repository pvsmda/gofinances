import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/gofinancesLogo.svg";

import {
  Container,
  Footer,
  Header,
  TitleWrapper,
  SignInTitle,
  Title,
  FooterWrapper,
} from "./styles";
import { SignInSocialButton } from "../../components/SigninSocialButton";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { user } = useAuth();
  console.log(user.name);
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>Faça seu login com{"\n"}uma das contas abaixo</SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            activeOpacity={0.9}
            title="Entrar com Google"
            svg={GoogleSvg}
          />
          <SignInSocialButton
            activeOpacity={0.9}
            title="Entrar com Apple"
            svg={AppleSvg}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
