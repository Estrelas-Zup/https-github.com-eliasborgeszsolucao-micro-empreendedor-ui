import React from 'react';
import { post } from '../../Core/request';


const ProdutoPost = () => {

    const [nome, setNome] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [unidadeMedida, setUnidadeMedida] = React.useState('');
    const [valorVenda, setValorVenda] = React.useState('');
    const [valorCusto, setValorCusto] = React.useState('');
    const [margemDesconto, setMargemDesconto] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        post('http://localhost:8080/produtos',

            JSON.stringify({
                nome,
                descricao,
                unidadeMedida,
                valorVenda,
                valorCusto,
                margemDesconto,
            }),
        )
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
        <form className="box3" onSubmit={handleSubmit}>
              <h3>Cadastro de Produto</h3>
            <div className="separar1">
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={({ target }) => setDescricao(target.value)}
                />
            </div>

            <div className="separar1">
                <input
                    type="text"
                    placeholder="Unidade de Medida"
                    value={unidadeMedida}
                    onChange={({ target }) => setUnidadeMedida(target.value)}
                />
                <input
                    type="text"
                    placeholder="Valor de Custo"
                    value={valorCusto}
                    onChange={({ target }) => setValorCusto(target.value)}
                />
            </div>
            <div className="separar1">
                <input
                    type="text"
                    placeholder="Valor de Venda"
                    value={valorVenda}
                    onChange={({ target }) => setValorVenda(target.value)}
                />
                <input
                    type="text"
                    placeholder="Margem de Desconto"
                    value={margemDesconto}
                    onChange={({ target }) => setMargemDesconto(target.value)}
                />
            </div>
            <input type="submit" name="" value="Cadastrar" />
        </form>
    );
};

export default ProdutoPost;