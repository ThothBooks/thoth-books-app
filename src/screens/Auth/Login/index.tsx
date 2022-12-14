import React, { useContext, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ParamsExampleMethodName } from '@typings/requests';

import { exampleMethodName } from '@services/api';

import { useAuth } from '@contexts/AuthContext';

import { FormInputs, useValidationSchema } from './useValidationSchema';

import {
  ContainerBottomViewLink,
  ContainerScroll,
  Input,
  ContainerInput,
  ContainerView,
  BoxInputView,
  ContainerBottomView,
  LoginButton,
  LoadingIndicator,
  TitleText,
  BackSvg,
  SubTitleText,
  NoAccountText,
  LoginText,
} from './styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components/native';

const Login = () => {
  const themeContext = useContext(ThemeContext);
  const { navigate, goBack } = useNavigation();
  const { saveUser } = useAuth();
  const [isLoading, setLoading] = useState<boolean>(false);

  const [form] = useState<FormInputs>({
    username: '',
    password: '',
  });

  const { validationSchema } = useValidationSchema();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<FormInputs> = async (payload) => {
    const params: ParamsExampleMethodName = {
      username: payload.username,
      password: payload.password,
    };

    setLoading(true);
    await exampleMethodName(params)
      .then(() => {
        // TODO: implement login method and call saveUser(...);
      })
      .catch((error) => {
        error.alert('Não foi possível realizar o login');
      })
      .finally(() => {
        setLoading(false);
      });

    // Example use saveUser():
    saveUser({
      accessToken: '4c0393ae35e1.4fb787d.564f2d02eba0e.3c3237aba0944c0',
      idToken: '924af6cd-3e53-40dc-a89d-054cd90307a3',
    });
  };

  return (
    <ContainerView>
      <ContainerScroll>
        <TouchableOpacity onPress={() => goBack()}>
          <BackSvg />
        </TouchableOpacity>
        <TitleText>Vamos logar no app.</TitleText>
        <SubTitleText>Boas vidas novamente. Sentimos sua falta!</SubTitleText>
        <ContainerInput>
          <BoxInputView>
            <Input
              testID="textInput:username"
              name="username"
              control={control}
              param={form.username}
              label="E-email ou usuário ou celular"
              placeholder="john@exemplo.com"
              placeholderTextColor={themeContext.colors.terciary}
              hasError={errors?.username?.message ? true : false}
              errorMessage={errors?.username?.message}
            />
          </BoxInputView>
          <BoxInputView>
            <Input
              testID="textInput:password"
              name="password"
              control={control}
              isPasswordInput={true}
              param={form.password}
              label="Senha"
              placeholder="*********"
              placeholderTextColor={themeContext.colors.terciary}
              hasError={errors?.password?.message ? true : false}
              errorMessage={errors?.password?.message}
            />
          </BoxInputView>
        </ContainerInput>
        <ContainerBottomView>
          <ContainerBottomViewLink>
            <NoAccountText>Não tem conta?</NoAccountText>
            <TouchableOpacity onPress={() => navigate('Register')}>
              <LoginText>Cadastre-se</LoginText>
            </TouchableOpacity>
          </ContainerBottomViewLink>
          {isLoading && <LoadingIndicator />}
          {!isLoading && (
            <LoginButton onPress={handleSubmit(onSubmit)}>Entrar</LoginButton>
          )}
        </ContainerBottomView>
      </ContainerScroll>
    </ContainerView>
  );
};

export default Login;
