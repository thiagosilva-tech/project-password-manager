import { InputType } from '../types';
import InputCheckbox from './InputCheckbox';
import PasswordList from './PasswordList';

type ContainerType = {
  setShowPasswords: (showPassword: boolean) => void,
  listPassword: InputType[],
  handleDelete: (nameDelete: string) => void,
  showPasswords: boolean,
};

function Main({
  setShowPasswords, listPassword, handleDelete, showPasswords }: ContainerType) {
  return (
    <div>
      <InputCheckbox setShowPasswords={ setShowPasswords } />
      <PasswordList
        listPassword={ listPassword }
        handleDelete={ handleDelete }
        showPasswords={ showPasswords }
      />
    </div>
  );
}

export default Main;
