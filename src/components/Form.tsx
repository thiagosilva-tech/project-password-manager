import React, { useState } from 'react';

type FormType = { handleClick: () => void };

const INITIAL_DATA = {
  name: '',
  login: '',
  password: '',
  url: '',
};

const INVALID_PASSWORD = 'invalid-password-check';
const VALID_PASSWORD = 'valid-password-check';

function Form({ handleClick }: FormType) {
  const [inputsData, setInputsData] = useState(INITIAL_DATA);
  const [passwordValid, setPasswordValid] = useState(false);
  const [hasLogin, setHasLogin] = useState(false);
  const [hasName, setHasName] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [passwordMin8, setPasswordMin8] = useState(false);
  const [passwordMax16, setPasswordMax16] = useState(false);
  const [passwordHasNumAndLet, setPasswordHasNumAndLet] = useState(false);
  const [passwordHasCarac, setPasswordHasCarac] = useState(false);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'password') {
      setPasswordMin8(value.length >= 8);
      setPasswordMax16(value.length <= 16);
      setPasswordHasNumAndLet(/[a-zA-Z]/.test(value) && /\d/.test(value));
      setPasswordHasCarac(/\W/.test(value));
      setPasswordValid(passwordMin8 && passwordMax16
        && passwordHasNumAndLet && passwordHasCarac);
    }
    if (name === 'name') {
      setHasName(value.length > 0);
    }

    if (name === 'login') {
      setHasLogin(value.length > 0);
    }
    const formIsOk = hasLogin && hasName && passwordValid;
    setDisabledBtn(!formIsOk);
    setInputsData({
      ...inputsData,
      [name]: value,
    });
  };

  return (
    <form>
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
          type="password"
          id="password"
          name="password"
          value={ inputsData.password }
          onChange={ handleChange }
        />
        <p
          className={ passwordMin8 ? VALID_PASSWORD : INVALID_PASSWORD }
        >
          Possuir 8 ou mais caracteres

        </p>
        <p
          className={ passwordMax16 ? VALID_PASSWORD : INVALID_PASSWORD }
        >
          Possuir até 16 caracteres

        </p>
        <p
          className={ passwordHasNumAndLet ? VALID_PASSWORD : INVALID_PASSWORD }
        >
          Possuir letras e números

        </p>
        <p
          className={ passwordHasCarac ? VALID_PASSWORD : INVALID_PASSWORD }
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
      <button disabled={ disabledBtn } type="button">Cadastrar</button>
      <button type="button" onClick={ handleClick }>Cancelar</button>
    </form>
  );
}

export default Form;
