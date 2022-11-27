import styled from 'styled-components/native';

import { Text, Button } from 'react-native-paper';

import InputComponent from '@components/Input';

import Back from '@assets/svg/back.svg';

import {
  ContainerView as ContainerViewComponent,
  ContainerScroll as ContainerScrollComponent,
  LoadingIndicator as LoadingIndicatorComponent,
} from '@theme/common';

import dimensions from '@theme/dimensions';

export const ContainerScroll = styled(ContainerScrollComponent)``;

export const ContainerView = styled(ContainerViewComponent)`
  padding-left: ${dimensions.marginHorizontal}px;
  padding-right: ${dimensions.marginHorizontal}px;
  padding-top: 60px;
`;

export const LoadingIndicator = styled(LoadingIndicatorComponent)``;

export const BoxInputView = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const ContainerBottomView = styled.View`
  width: 100%;
  margin-top: 72px;
`;

export const ContainerBottomViewLink = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const DefaultButton = styled(Button).attrs({
  mode: 'contained',
  contentStyle: { justifyContent: 'center', height: 45 },
})`
  margin-top: 15px;
  width: 100%;
`;

export const RegisterButton = styled(DefaultButton).attrs((props) => ({
  color: props.theme.colors.primary,
}))`
  border-radius: 15px;
`;

export const TitleText = styled(Text)`
  margin-top: 24px;
  font-size: 32px;
  font-weight: bold;
`;

export const SubTitleText = styled(Text)`
  margin-top: 16px;
  font-size: 24px;
  font-weight: normal;
`;

export const NoAccountText = styled(Text)`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`;

export const RegisterText = styled(Text)`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  margin-left: 2px;
  color: ${(props) => props.theme.colors.primary};
`;

export const ContainerInput = styled.View`
  margin-top: 48px;
`;

export const Input = styled(InputComponent)``;

export const BackSvg = styled(Back).attrs({
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: 10px;
`;
