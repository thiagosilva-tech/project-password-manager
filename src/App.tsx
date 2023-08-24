import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { InputType } from './types';
import Main from './components/Container';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState<InputType[]>([]);
  const [showPasswords, setShowPasswords] = useState(true);

  const handleData = (newData: InputType) => {
    setData([
      ...data,
      newData,
    ]);
    handleClick();
  };

  const handleDelete = (nameDelete: string) => {
    const newDataDelete = data.filter(({ name }) => name !== nameDelete);
    setData(newDataDelete);
  };

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const showPasswordToggle = () => {
    setShowPasswords(!showPasswords);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {!showForm && <button onClick={ handleClick }>Cadastrar nova senha</button>}
      {showForm && <Form handleClick={ handleClick } setData={ handleData } />}
      {data.length > 0
        ? <Main
            setShowPasswords={ showPasswordToggle }
            listPassword={ data }
            handleDelete={ handleDelete }
            showPasswords={ showPasswords }
        />
        : <p>Nenhuma senha cadastrada</p>}
    </div>
  );
}

export default App;
