import * as Yup from 'yup';

export interface FormInputs {
  username: string;
  password: string;
}

export const useValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Usuário é obrigatório')
      .min(8, 'Usuário inválido'),
    password: Yup.string()
      .required('Senha é obrigatório')
      .min(8, 'Senha inválida'),
  });

  return { validationSchema };
};
