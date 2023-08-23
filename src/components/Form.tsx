function Form() {
  return (
    <form>
      <div>
        <label htmlFor="name">Nome do serviço</label>
        <input
          type="text"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
        />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
        />
      </div>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
