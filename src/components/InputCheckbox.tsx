type InputCheckboxType = {
  setShowPasswords: () => void;
};

function InputCheckbox({ setShowPasswords }: InputCheckboxType) {
  return (
    <div>
      <label htmlFor="showPassword">Esconder senhas</label>
      <input
        type="checkbox"
        name="showPassword"
        id="showPassword"
        onClick={ setShowPasswords }
      />
    </div>
  );
}

export default InputCheckbox;
