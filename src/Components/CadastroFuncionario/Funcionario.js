import React from 'react';
import { useHistory } from "react-router-dom";
import { post } from '../../Core/request';
import '../CadastroFuncionario/FuncionarioStyle.css'


const FuncionarioPost = () => {
    const history = useHistory();
    const [nome, setNome] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [dataNascimento, setDataNascimento] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [endereco, setEndereco] = React.useState('');
    const [cargo, setCargo] = React.useState('');
    const [numeroCarteiraTrabalho, setNumeroCarteiraTrabalho] = React.useState('');
    const [salario, setSalario] = React.useState('');


    function handleSubmit(event) {
        event.preventDefault();


        post('http://localhost:8080/funcionarios',

            JSON.stringify({
                nome,
                cpf,
                dataNascimento,
                email,
                telefone,
                endereco,
                cargo,
                numeroCarteiraTrabalho,
                salario,
            }),
        )
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                localStorage.setItem("authToken", json.token);
                return json;
            })
            .then(() => {
               
            });
    }

    return (
        <form  className="box3" onSubmit={handleSubmit}>
            <h3>Cadastro de Funcionario</h3>
            <div className="separar1">
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                />
                <input
                    type="text"
                    placeholder="Digite o seu CPF"
                    value={cpf}
                    onChange={({ target }) => setCpf(target.value)}
                />
            </div>

            <div className="separar1">
                <input
                    type="text"
                    placeholder="Data de Nascimento"
                    value={dataNascimento}
                    onChange={({ target }) => setDataNascimento(target.value)}
                />
                <input
                    type="text"
                    placeholder=" Email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
            </div>

            <div className="separar1">
                <input
                    type="text"
                    placeholder=" Telefone"
                    value={telefone}
                    onChange={({ target }) => setTelefone(target.value)}
                />
                <input
                    type="text"
                    placeholder=" Endereço"
                    value={endereco}
                    onChange={({ target }) => setEndereco(target.value)}
                />
            </div>

            <div className="separar1">
                <input
                    type="text"
                    placeholder="Cargo"
                    value={cargo}
                    onChange={({ target }) => setCargo(target.value)}
                />
                <input
                    type="text"
                    placeholder="Numero da Carteira de Trabalho"
                    value={numeroCarteiraTrabalho}
                    onChange={({ target }) => setNumeroCarteiraTrabalho(target.value)}
                />
            </div>

            <div className="separar1">
            <input
                    type="text"
                    placeholder="Salario"
                    value={salario}
                    onChange={({ target }) => setSalario(target.value)}
                />
            </div>

            <input type="submit" name="" value="Acessar" />
        </form>
    );
};

export default FuncionarioPost;