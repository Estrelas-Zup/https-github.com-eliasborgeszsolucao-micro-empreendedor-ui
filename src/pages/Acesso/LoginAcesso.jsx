import React, { useState, useEffect } from "react";
import Login from "./Login"
import "./LoginStyle.css"
import { headers } from '../core/request';
import { useHistory } from 'react-router-dom'
import { useAuth } from "../../core/hooks/useAuth";
import { getUserFromLocalStorage } from "../../core/utils/token";


const LoginAcesso = () => {
  let auth = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    const data = {
      email: email,
      senha: senha,
    }

    fetch('http://localhost:8080/authenticate', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
      .then(
        (response) => {
          if (!response.ok) {
            throw Error(response.status);
          }
          return response.json();
        }
      )
      .then(
        (result) => {
          localStorage.setItem('token', result.token);
          const user = getUserFromLocalStorage()
          auth.signin(user)
          history.replace('/');

        }
      ).catch(() => alert("Erro ao Logar")

      )
  }
  return (
    <div className="App">
      <Login
        email={email}
        setEmail={setEmail}
        senha={senha}
        setSenha={setSenha}
        onLogin={handleLogin}
      />

    </div>
  );
};

export default LoginAcesso;