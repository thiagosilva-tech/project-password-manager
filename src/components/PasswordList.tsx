import { InputType } from '../types';

type PasswordListType = {
  listPassword: InputType[],
  handleDelete: (nameDelete: string) => void,
};

function PasswordList({ listPassword, handleDelete }: PasswordListType) {
  return (
    <div>
      { listPassword.map(({ name, url, login, password }) => {
        return (
          <div key={ name }>
            <a href={ url }>{name}</a>
            <p>{login}</p>
            <p>{password}</p>
            <button
              data-testid="remove-btn"
              onClick={ () => handleDelete(name) }
            >
              Remover
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PasswordList;
