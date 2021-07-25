import { useState } from 'react';
import './App.css';

function App() {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ address, setAddress ] = useState('')

  const handleRegisterClient = (event) => {
    event.preventDefault();

    const client = {
      name,email,cpf,phone,address
    }

    localStorage.setItem("client", JSON.stringify(client));
  }

  return (
    <main>
      <form onSubmit={handleRegisterClient}>
        <h1>Cadastro de cliente</h1>
        <fieldset>
          <label>Nome*</label>
          <input required type="text" placeholder="Insira seu nome" name="nome" autoComplete="name" value={name} onChange={e => {setName(e.target.value)}} />
        </fieldset>
        <fieldset>
          <label>Email*</label>
          <input required type="email" placeholder="Insira seu email" name="email" autoComplete="email" value={email} onChange={e => {setEmail(e.target.value)}} />
        </fieldset>
        <fieldset>
          <label>CPF*</label>
          <input required type="text" placeholder="Insira seu cpf" name="cpf" value={cpf} onChange={e => {setCpf(e.target.value)}} />
        </fieldset>
        <fieldset>
          <label>Telefone</label>
          <input type="phone" placeholder="Insira seu telefone" name="phone" autoComplete="phone" value={phone} onChange={e => {setPhone(e.target.value)}} />
        </fieldset>
        <fieldset>
          <label>Endereço</label>
          <input type="text" placeholder="Insira seu endereço completo" name="address" autoComplete="address" value={address} onChange={e => {setAddress(e.target.value)}} />
        </fieldset>
        
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
