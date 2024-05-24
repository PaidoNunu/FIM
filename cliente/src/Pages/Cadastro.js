import React, { useState } from 'react';
import axios from 'axios';

function Cadastro() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);  // Esta linha irá imprimir os dados do formulário no console
    if (form.password !== form.confirmPassword) {
      alert('As senhas não conferem!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/Cadastro', form);
      console.log(response.data);
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error(`Erro ao enviar dados: ${error}`);
      alert('Houve um erro ao cadastrar o usuário.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" onChange={handleChange} placeholder="Nome" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Senha" required />
      <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirme a senha" required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Cadastro;
