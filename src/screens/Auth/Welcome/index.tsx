import React from 'react';
import {
  AppNameText,
  ButtonGroup,
  ContainerScroll,
  ContainerView,
  LoginButton,
  TitleText,
  SubTitleText,
  RegisterButton,
  WelcomeSvg,
} from './styles';

const Welcome = ({ navigation }) => {
  const goToPage = (page: string) => {
    navigation.navigate(page, {});
  };

  return (
    <ContainerView>
      <ContainerScroll>
        <AppNameText>ThothBooks</AppNameText>
        <WelcomeSvg />
        <TitleText>Mantenha suas leituras sincronizadas</TitleText>
        <SubTitleText>
          Como Thoth, deus egípicio do conhecimento, ThothBooks mantem seus
          dados sincronizados em todos os seus dispositivos logados, basta
          importar o livro no app
        </SubTitleText>
        <ButtonGroup>
          <LoginButton onPress={() => goToPage('Login')}>Entrar</LoginButton>
          <RegisterButton onPress={() => goToPage('Register')}>
            Registrar-se
          </RegisterButton>
        </ButtonGroup>
      </ContainerScroll>
    </ContainerView>
  );
};

export default Welcome;
