import { useState } from 'react';
import './App.css';

function App() {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ address, setAddress ] = useState('')
  
  const [ productName, setProductName ] = useState('')
  const [ productCode, setProductCode ] = useState('')
  const [ productCount, setProductCount ] = useState(0)
  const [ productPrice, setProductPrice ] = useState(0)

  const handleRegisterClient = (event) => {
    event.preventDefault();

    const client = {
      name,email,cpf,phone,address
    }

    const clients = localStorage.getItem("clients") ? JSON.parse(localStorage.getItem("clients")) : [];

    clients.push(client)

    localStorage.setItem("clients", JSON.stringify(clients));
  }

  const handleRegisterProduct = (event) => {
    event.preventDefault();

    const product = {
      productName, productCount, productCode, productPrice
    }

    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

    products.push(product)

    localStorage.setItem("products", JSON.stringify(products));
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

      
      <form onSubmit={handleRegisterProduct}>
        <h1>Cadastro de produto</h1>
        
        <fieldset>
          <label>Nome do produto*</label>
          <input required type="text" placeholder="Insira o nome do produto" name="nome" autoComplete="name" value={productName} onChange={e => {setProductName(e.target.value)}} />
        </fieldset>
        <fieldset>
          <label>Código do produto*</label>
          <input required type="text" placeholder="Insira o código do produto" name="code" value={productCode} onChange={e => {setProductCode(e.target.value)}} />
        </fieldset>
        <fieldset>
          <label>Quantidade do produto*</label>
          <input required type="number" placeholder="Insira a quantidade do produto" name="count" value={productCount} onChange={e => {setProductCount(e.target.value)}} />
        </fieldset>
        <fieldset>
          <label>Preço do produto*</label>
          <input required type="number" placeholder="Insira o preço do produto" name="price" value={productPrice} onChange={e => {setProductPrice(e.target.value)}} />
        </fieldset>
        
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}

export default App;
