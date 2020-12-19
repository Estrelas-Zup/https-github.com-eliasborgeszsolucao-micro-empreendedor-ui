import React from 'react';
import { get } from '../../Core/request';

const ProdutoGet = () => {
    const [nome, setNome] = React.useState('');
    const [consulta, setConsulta] = React.useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        get(`http://localhost:8080/produtos/nome?nome=${nome}`)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                setConsulta(json);
                return json;
            });
    }

    const renderProduto = (produto) => {
        return (
            <div>
                <span>{produto.nome}</span>
                <div>{produto.valorVenda}</div>

            </div>
        )


    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o nome do produto"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                />
                <button>Enviar</button>
            </form>
            {consulta.map((produto) => renderProduto(produto))}
        </div>
    );
};

export default ProdutoGet;