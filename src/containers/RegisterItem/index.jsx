import React, { useState } from 'react'
import FormGroup from '../../components/FormGroup'
import { headers } from '../../core/request'
import './styled.css'

const RegisterItem = () => {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [unidadeMedida, setUnidadeMedida] = useState('')
  const [valorVenda, setValorVenda] = useState(0)
  const [valorCusto, setValorCusto] = useState(0)
  const [margemDesconto, setMargemDesconto] = useState(0)

  function limparCampos() {
    setNome('')
    setDescricao('')
    setUnidadeMedida('')
    setValorVenda(0)
    setValorCusto(0)
    setMargemDesconto(0)
  }

  const onSubmit = () => {
    const data = {
      nome,
      descricao,
      unidadeMedida,
      valorVenda,
      valorCusto,
      margemDesconto,
    }

    fetch('http://localhost:8080/produtos', { method: 'POST', headers: headers, body: JSON.stringify(data) })
      .then(response => response.json())
      .then((param) => {
        if ('mensagem' in param) {
          alert(param.mensagem)
          limparCampos()
        } else {
          alert(param[0].mensagem)
        }
      }
      )
  }

return (
  <div className='RegisterItemContainer'>
    <form className='RegisterItemForm'>
      <FormGroup
        id='nome'
        name='nome'
        value={nome}
        onChange={setNome}
        label='Nome'
        placeholder='Insira o nome do produto'
      />
      <FormGroup
        id='descricao'
        name='descricao'
        value={descricao}
        onChange={setDescricao}
        label='Descricao'
        placeholder='Insira a descricao do produto'
      />
      <FormGroup
        id='unidadeMedida'
        name='unidadeMedida'
        value={unidadeMedida}
        onChange={setUnidadeMedida}
        label='Unidade de medida'
        placeholder='Insira a unidade de medida'
      />
      <FormGroup
        id='valorCusto'
        name='valorCusto'
        value={valorCusto}
        onChange={setValorCusto}
        label='Preço de Custo'
        type='number'
        placeholder='Insira o preço de custo'
      />
      <FormGroup
        id='valorVenda'
        name='valorVenda'
        value={valorVenda}
        onChange={setValorVenda}
        label='Preço de Venda'
        type='number'
        placeholder='Insira o preço de venda'
      />
      <FormGroup
        id='margemDesconto'
        name='margemDesconto'
        value={margemDesconto}
        onChange={setMargemDesconto}
        label='Margem de desconto'
        type='number'
        placeholder='Insira a margem de desconto'
      />

      <div className='ButtonContainer'>
        <button
          type='button'
          onClick={onSubmit}
        >
          Enviar
          </button>
      </div>
    </form>
  </div>
)
}

export default RegisterItem
