import React, { useState } from 'react';

type FormType = { handleClick: () => void };

const INITIAL_DATA = {
  name: '',
  login: '',
  password: '',
  url: '',
};

function isPasswordValid(password: string) {
  const passwordMin8andMax16 = password.length >= 8 && password.length <= 16;
  const passwordHasLetAndNum = /[a-zA-Z]/.test(password) && /\d/.test(password);
  const passwordHasCarac = /\W/.test(password);
  const passwordValid = passwordMin8andMax16 && passwordHasLetAndNum && passwordHasCarac;
  return passwordValid;
}

function Form({ handleClick }: FormType) {
  const [inputsData, setInputsData] = useState(INITIAL_DATA);
  const [passwordValid, setPasswordValid] = useState(false);
  const [hasLogin, setHasLogin] = useState(false);
  const [hasName, setHasName] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'password') {
      const newPassword = value;
      setPasswordValid(isPasswordValid(newPassword));
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
