import React from 'react';
import { get } from '../../Core/request';
import '../endpoints/ProdGetStaly.css'

const ProdutoGet = () => {
    const [nome, setNome] = React.useState('');
    const [idProduto, setIdProduto] = React.useState('');
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
            <div className="consultaProduto">

                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Valor Venda</th>
                            <th>Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{produto.idProduto}</td>
                            <td>{produto.nome}</td>
                            <td>R$ {produto.valorVenda}</td>
                            <td>dcode</td>
                        </tr>

                    </tbody>
                </table>

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