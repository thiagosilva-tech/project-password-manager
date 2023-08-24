import { InputType } from '../types';

function PasswordList({ listPassword }: { listPassword: InputType[] }) {
  return (
    <div>
      { listPassword.map((password) => {
        return (
          <div key={ password.name }>
            <a href={ password.url }>{password.name}</a>
            <p>{password.login}</p>
            <p>{password.password}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PasswordList;
