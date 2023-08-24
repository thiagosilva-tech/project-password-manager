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

function Form({ handleClick, setData }: FormType) {
  const [inputsData, setInputsData] = useState(INITIAL_DATA);
  const [passwordValid, setPasswordValid] = useState(false);
  const [hasLogin, setHasLogin] = useState(false);
  const [hasName, setHasName] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [passwordMin8, setPasswordMin8] = useState(false);
  const [passwordMax16, setPasswordMax16] = useState(false);
  const [passwordHasNumAndLet, setPasswordHasNumAndLet] = useState(false);
  const [passwordHasCarac, setPasswordHasCarac] = useState(false);
  const [showPassword, setShowPassword] = useState('password');
  const [textShowPass, setTextShowPass] = useState('Mostrar senha');

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputsData({
      ...inputsData,
      [name]: value,
    });

    setPasswordMin8(inputsData.password.length >= 8);
    setPasswordMax16(inputsData.password.length <= 16);
    const passwordMin8AndMax16 = (passwordMin8 && passwordMax16);
    setPasswordHasNumAndLet((/[a-zA-Z].*\d|\d.*[a-zA-Z]/).test(inputsData.password));
    setPasswordHasCarac((/(?=.*[!@#$%^&*(),.?":{}|<>]).+$/).test(inputsData.password));
    setPasswordValid(passwordMin8AndMax16 && passwordHasNumAndLet && passwordHasCarac);
    setHasName(inputsData.name.length > 0);
    setHasLogin(inputsData.login.length > 0);

    const formIsOk = hasLogin && hasName && passwordValid;
    setDisabledBtn(!formIsOk);
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
            onChange={ handleChange }
          />
          <label htmlFor="showPassword">{ textShowPass }</label>
          <input
            data-testid="show-hide-form-password"
            type="checkbox"
            name="showPassword"
            id="showPassword"
            onClick={ handleShowPassword }
          />
          <p className={ passwordMin8 ? VALID_PASSWORD : INVALID_PASSWORD }>
            Possuir 8 ou mais caracteres
          </p>
          <p className={ passwordMax16 ? VALID_PASSWORD : INVALID_PASSWORD }>
            Possuir até 16 caracteres
          </p>
          <p className={ passwordHasNumAndLet ? VALID_PASSWORD : INVALID_PASSWORD }>
            Possuir letras e números
          </p>
          <p className={ passwordHasCarac ? VALID_PASSWORD : INVALID_PASSWORD }>
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
