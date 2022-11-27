import React from 'react';

import { UploadSvg } from './styles';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '@contexts/AuthContext';

const UploadIcon = () => {
  const { deleteUser } = useAuth();
  const chooseBook = () => {
    console.log('hey guys');
  };

  const logout = async () => {
    await deleteUser();
  };

  return (
    <TouchableOpacity onPress={logout}>
      <UploadSvg />
    </TouchableOpacity>
  );
};

export default UploadIcon;
