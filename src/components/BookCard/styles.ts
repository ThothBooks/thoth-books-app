import { Text } from 'react-native-paper';
import styled from 'styled-components/native';
import Upload from '@assets/svg/upload.svg';
import { Image, TouchableOpacity } from 'react-native';

export const UploadSvg = styled(Upload).attrs({
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: 10px;
`;

export const BookTitle = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: ${(props) => props.theme.colors.primary};
`;

export const AuthorName = styled(Text)`
  margin-top: 4px;
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  color: ${(props) => props.theme.colors.terciary};
`;

export const BookCover = styled(Image)`
  margin-bottom: 8px;
  border-radius: 5px;
  background: #dedede;
  height: 192px;
  width: 144px;
`;

export const ContainerBookCard = styled(TouchableOpacity)`
  margin-right: 16px;
`;
