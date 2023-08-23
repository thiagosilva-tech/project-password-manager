import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {!showForm && <button onClick={ handleClick }>Cadastrar nova senha</button>}
      {showForm && <Form handleClick={ handleClick } />}
    </div>
  );
}

export default App;
