import styled from 'styled-components/native';

import { Text, Button } from 'react-native-paper';

import Welcome from '@assets/svg/welcome.svg';

import {
  ContainerView as ContainerViewComponent,
  ContainerScroll as ContainerScrollComponent,
} from '@theme/common';

import dimensions from '@theme/dimensions';

export const ContainerScroll = styled(ContainerScrollComponent)``;

export const ContainerView = styled(ContainerViewComponent)`
  align-items: center;
  padding-left: ${dimensions.marginHorizontal}px;
  padding-right: ${dimensions.marginHorizontal}px;
`;

export const DefaultButton = styled(Button).attrs({
  mode: 'contained',
  contentStyle: { justifyContent: 'center', height: 45 },
})`
  width: 100%;
`;

export const LoginButton = styled(DefaultButton).attrs((props) => ({
  color: props.theme.colors.primary,
}))`
  border-radius: 15px;
  width: 56%;
`;

export const RegisterButton = styled(DefaultButton).attrs((props) => ({
  color: props.theme.colors.primaryText,
}))`
  background-color: ${(props) => props.theme.colors.terciary};
  border-radius: 15px;
  margin-left: -20px;
  width: 50%;
`;

export const TitleText = styled(Text)`
  width: 100%;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  ${(props) => props.theme.colors.primaryText};
`;

export const AppNameText = styled(Text)`
  width: 100%;
  margin-top: 60px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  ${(props) => props.theme.colors.primaryText};
`;

export const SubTitleText = styled(Text)`
  margin-top: 8px;
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  ${(props) => props.theme.colors.primaryText};
`;

export const ButtonGroup = styled.View`
  width: 100%;
  margin-top: 96px;
  display: flex;
  flex-direction: row;
`;

export const WelcomeSvg = styled(Welcome).attrs({
  width: '100%',
  height: '360',
  preserveAspectRatio: 'xMidYMid',
})``;
