import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import PasswordList from './components/PasswordList';
import { InputType } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState<InputType[]>([]);

  const handleData = (newData: InputType) => {
    setData([
      ...data,
      newData,
    ]);
    handleClick();
  };

  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {!showForm && <button onClick={ handleClick }>Cadastrar nova senha</button>}
      {showForm && <Form handleClick={ handleClick } setData={ handleData } />}
      {data.length > 0
        ? <PasswordList listPassword={ data } /> : <p>Nenhuma senha cadastrada</p>}
    </div>
  );
}

export default App;
