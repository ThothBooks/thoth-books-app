import { useNavigation } from '@react-navigation/native';
import { BookCardProps } from '@typings/common';
import React from 'react';

import { BookTitle, ContainerBookCard, AuthorName, BookCover } from './styles';

const BookCard = ({ id }: BookCardProps) => {
  const { navigate } = useNavigation();

  const goToBook = () => {
    navigate('Reader', {
      params: {
        id,
      },
    });
  };

  return (
    <ContainerBookCard onPress={goToBook}>
      <BookCover source={require('@/assets/images/cover.png')} />
      <BookTitle>Titulo</BookTitle>
      <AuthorName>Titulo</AuthorName>
    </ContainerBookCard>
  );
};

export default BookCard;
