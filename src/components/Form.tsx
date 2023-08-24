import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { InputType } from '../types';

type FormType = {
  handleClick: () => void,
  setData: (newData: InputType) => void,
};

const INITIAL_DATA = {
  name: '',
  login: '',
  password: '',
  url: '',
};

const INVALID_PASSWORD = 'invalid-password-check';
const VALID_PASSWORD = 'valid-password-check';

function formChecked(inputsData: InputType) {
  const passwordMin8andMax16 = inputsData.password.length >= 8
  && inputsData.password.length <= 16;
  const passwordHasNumAndLet = (/[a-zA-Z].*\d|\d.*[a-zA-Z]/).test(inputsData.password);
  const passwordHasCarac = ((/(?=.*[!@#$%^&*(),.?":{}|<>]).+$/).test(inputsData.password));

  const passValid = passwordMin8andMax16 && passwordHasNumAndLet && passwordHasCarac;
  const hasNameAndLogin = inputsData.name.length > 0 && inputsData.login.length > 0;

  const formIsOk = hasNameAndLogin && passValid;
  return formIsOk;
}

function Form({ handleClick, setData }: FormType) {
  const [inputsData, setInputsData] = useState(INITIAL_DATA);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [showPassword, setShowPassword] = useState('password');
  const [textShowPass, setTextShowPass] = useState('Mostrar senha');

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputsData({
      ...inputsData,
      [name]: value,
    });
    setDisabledBtn(!formChecked(inputsData));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData(inputsData);
    setInputsData(INITIAL_DATA);
  };

  const handleShowPassword = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      setTextShowPass('Esconder senha');
      setShowPassword('text');
    } else {
      setTextShowPass('Mostrar senha');
      setShowPassword('password');
    }
  };

  const handleAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      timer: 1500,
    });
  };

  return (
    <main>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Nome do serviço</label>
          <input
            type="text"
            id="name"
            name="name"
            value={ inputsData.name }
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            name="login"
            value={ inputsData.login }
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type={ showPassword }
            id="password"
            name="password"
            value={ inputsData.password }
            onInput={ handleChange }
          />
          <label htmlFor="showPassword">{ textShowPass }</label>
          <input
            data-testid="show-hide-form-password"
            type="checkbox"
            name="showPassword"
            id="showPassword"
            onClick={ handleShowPassword }
          />
          <p
            className={ inputsData.password.length >= 8
              ? VALID_PASSWORD
              : INVALID_PASSWORD }
          >
            Possuir 8 ou mais caracteres
          </p>
          <p
            className={ inputsData.password.length <= 16
              ? VALID_PASSWORD
              : INVALID_PASSWORD }
          >
            Possuir até 16 caracteres
          </p>
          <p
            className={ (/[a-zA-Z].*\d|\d.*[a-zA-Z]/).test(inputsData.password)
              ? VALID_PASSWORD
              : INVALID_PASSWORD }
          >
            Possuir letras e números
          </p>
          <p
            className={ (/(?=.*[!@#$%^&*(),.?":{}|<>]).+$/).test(inputsData.password)
              ? VALID_PASSWORD
              : INVALID_PASSWORD }
          >
            Possuir algum caractere especial
          </p>
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={ inputsData.url }
            onChange={ handleChange }
          />
        </div>
        <button
          disabled={ disabledBtn }
          onClick={ handleAlert }
          type="submit"
        >
          Cadastrar
        </button>
        <button type="button" onClick={ handleClick }>Cancelar</button>
      </form>
    </main>
  );
}

export default Form;
