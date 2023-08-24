import React, { useState } from 'react';

type InputCheckboxType = {
  setShowPasswords: (showPassword: boolean) => void;
};

function InputCheckbox({ setShowPasswords }: InputCheckboxType) {
  const [textInput, setTextInput] = useState('Esconder senhas');

  const handleChecked = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      setTextInput('Mostrar senhas');
      setShowPasswords(true);
    } else {
      setTextInput('Esconder senhas');
      setShowPasswords(false);
    }
  };

  return (
    <div>
      <label>{ textInput }</label>
      <input
        type="checkbox"
        name="showPassword"
        id="showPassword"
        onClick={ handleChecked }
      />
    </div>
  );
}

export default InputCheckbox;
