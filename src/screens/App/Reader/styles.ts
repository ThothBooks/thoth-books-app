import styled from 'styled-components/native';

import { Text } from 'react-native-paper';

import InputComponent from '@components/Input';

import Logo from '@assets/svg/logo.svg';

import {
  ContainerView as ContainerViewComponent,
  ContainerScroll as ContainerScrollComponent,
} from '@theme/common';

import dimensions from '@theme/dimensions';
import { ScrollView } from 'react-native';

export const ContainerScroll = styled(ContainerScrollComponent)``;

export const ContainerView = styled(ContainerViewComponent)`
  align-items: center;
  padding-top: 100px;
  padding-left: ${dimensions.marginHorizontal}px;
  padding-right: ${dimensions.marginHorizontal}px;
`;

export const ContainerBooksList = styled(ScrollView).attrs({
  horizontal: true,
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
})`
  margin-top: 32px;
  width: 100%;
  flex-direction: row;
  overflow-x: visible;
`;

export const TitleText = styled(Text)`
  margin-top: 10px;
  width: 100%;
  font-size: 32px;
  font-weight: normal;
`;

export const SearchInput = styled(InputComponent)`
  margin-top: 16px;
  align-self: center;
  width: 90%;
`;

export const LogoSvg = styled(Logo).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: 10px;
`;
