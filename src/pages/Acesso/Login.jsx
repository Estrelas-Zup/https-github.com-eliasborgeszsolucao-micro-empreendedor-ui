import React from 'react';

const Login = (props) =>{

const {
    email, 
    setEmail,
    senha, 
    setSenha,
    onLogin
    } = props;

    return(
        <section className="login">
            
            <div className="loginContainer">
                <label>Login</label>
                    <input
                        type="text"
                        required 
                        value={email} 
                        placeholder='Insira o nome de usuário'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                <label>Senha</label>
                    <input
                        type="password"
                        required
                        value={senha}
                        placeholder='Insira a senha'
                        onChange={(s) => setSenha(s.target.value)}
                    />

                   <div className="btnContainer">
                      
                           <button 
                            onClick={onLogin}>Acessar</button>
                           <p></p>
                    
                   </div>
            </div>
        </section>
    )
}

export default Login;