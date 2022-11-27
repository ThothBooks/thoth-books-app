import * as Yup from 'yup';

export interface FormInputs {
  username: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}

export const useValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Nome completo é obrigatório')
      .min(8, 'Nome completo inválido'),
    username: Yup.string()
      .required('Usuário é obrigatório')
      .min(8, 'Usuário inválido'),
    password: Yup.string()
      .required('Senha é obrigatório')
      .min(8, 'Senha inválida'),
    confirmPassword: Yup.string()
      .required('Confirmar senha é obrigatório')
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
      .min(8, 'Senha inválida'),
  });

  return { validationSchema };
};
