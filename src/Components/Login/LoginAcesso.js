import React from 'react';
import Home from '../Home/Home';
import '../Login/LoginStyle.css';
import { useHistory } from "react-router-dom";


const TokenPost = () => {
    const history = useHistory();
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        

        fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha,

            }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                localStorage.setItem("authToken",json.token);
                return json;
            })
            .then(() => {
                history.push("/");
            });
    }

    return (
        <form  class="box-form" onSubmit={handleSubmit} >
            <h1>Olá, Bem Vindo!</h1>
            <h3>Email.</h3>

            <input type="text" name="" placeholder="Username:" id=""
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            <h3>Senha.</h3>
            <input type="password" placeholder="Password:"
                value={senha}
                onChange={({ target }) => setSenha(target.value)}
            />

            <input type="submit" name="" value="Acessar" />
        </form>
    );
};

export default TokenPost;