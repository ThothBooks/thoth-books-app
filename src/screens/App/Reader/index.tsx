import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { useWindowDimensions } from 'react-native';
import { Reader, ReaderProvider } from '@epubjs-react-native/core';
import { useFileSystem } from '@epubjs-react-native/file-system';

import { ContainerView } from './styles';

const CustomReader = () => {
  const { width, height } = useWindowDimensions();
  const themeContext = useContext(ThemeContext);
  const searchBook = (e: any) => {
    console.log(e);
  };
  return (
    <ContainerView>
      <Reader
        src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
        width={width}
        height={height * 0.85}
        fileSystem={useFileSystem}
      />
    </ContainerView>
  );
};

export const ThothReader = () => (
  <ReaderProvider>
    <CustomReader />
  </ReaderProvider>
);
