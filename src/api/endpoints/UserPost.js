import React from 'react';


const UserPost = () => {
   
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [role, setRole] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:8080/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha,
                role,
            }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                return json;
            });
    }

    return (
        <form onSubmit={handleSubmit}>
        
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            <input
                type="text"
                placeholder="senha"
                value={senha}
                onChange={({ target }) => setSenha(target.value)}
            />
            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={({ target }) => setRole(target.value)}
            />
            <button>Enviar</button>
        </form>
    );
};

export default UserPost;