import React from 'react';
import { post } from '../../Core/request';


const ProdutoPost = () => {
 
  const [nome, setNome] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [unidadeMedida, setUnidadeMedida] = React.useState('');
  const [valorVenda, setValorVenda] = React.useState(0);
  const [valorCusto, setValorCusto] = React.useState(0);
  const [margemDesconto, setMargemDesconto] = React.useState(0);

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
    <form onSubmit={handleSubmit}>

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
      <button>Enviar</button>
    </form>
  );
};

export default ProdutoPost;