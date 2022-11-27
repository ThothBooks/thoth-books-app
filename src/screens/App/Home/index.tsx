import BookCard from '@components/BookCard';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import {
  ContainerScroll,
  ContainerView,
  TitleText,
  SearchInput,
  ContainerBooksList,
} from './styles';

const Home = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <ContainerView>
      <ContainerScroll>
        <TitleText>Olá, Nome do fulano</TitleText>
        <SearchInput
          placeholderTextColor={themeContext.colors.terciary}
          placeholder="Buscar livros na biblioteca"
          icon="magnify"
        />
        <ContainerBooksList>
          <BookCard id="asddsadsaadsds" />
          <BookCard id="iaiajsjaisjiasj" />
          <BookCard id="asijjsaijis" />
        </ContainerBooksList>
        <TitleText>Tecnologia</TitleText>
        <ContainerBooksList>
          <BookCard id="sasassujsshuashu" />
        </ContainerBooksList>
      </ContainerScroll>
    </ContainerView>
  );
};

export default Home;
