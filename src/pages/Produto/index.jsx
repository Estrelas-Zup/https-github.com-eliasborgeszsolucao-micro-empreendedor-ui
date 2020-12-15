import React from 'react';
import Footer from '../../components/Footer';
import './style.css';
import imgLixeira from '../../assets/images/caneta.svg';
import imgCaneta from '../../assets/images/lixeira.svg';
import Input from '../../components/Input';


function Produto() {
    const [produtos, setProdutos] = React.useState([])

    function GetProduto() {
        fetch('http://localhost:8080/produtos')
            .then(response => response.json())
            .then((param) => {
                setProdutos(param)

            }
            )
    }
    React.useEffect(() => { GetProduto() }, [])

    return (
        <div>
            <div className="produto">
                <div className="classe-produto">
                    <h1>Produto:</h1>
                </div>

                <Input />

                <div className="registro-produtos">
                    <div className="position-registro-produtos">
                        <div className="title-atributos-produto">
                            <div className="produto-idProduto" id="produto">
                                <h4>IdProduto</h4>
                            </div>
                            <div className="produto-nome" id="produto">
                                <h4>Nome</h4>
                            </div>
                            <div className="produto-descricao" id="produto">
                                <h4>Descrição</h4>
                            </div>
                            <div className="produto-unidadeMedida" id="produto">
                                <h4>Unidade de Medida</h4>
                            </div>
                            <div className="produto-valorVenda" id="produto">
                                <h4>Valor da Venda</h4>
                            </div>
                            <div className="produto-valorCusto" id="produto">
                                <h4>Valor de Custo</h4>
                            </div>
                            <div className="produto-margemDesconto" id="produto">
                                <h4>Margem de Desconto</h4>
                            </div>
                        </div>
                    </div>

                    {produtos.map(prod => {
                        return (
                            <div className="position-dados-produto-one">
                                <div className="dados-produto-one">
                                    <div className="atributo-idProduto">
                                        {prod.idProduto}
                                    </div>
                                    <div className="atributo-nomeProduto">
                                        {prod.nome}
                                    </div>
                                    <div className="atributo-descricaoProduto">
                                        {prod.descricao}
                                    </div>
                                    <div className="atributo-unidadeMedidaProduto">
                                        {prod.unidadeMedida}
                                    </div>
                                    <div className="atributo-valorVendaProduto">
                                        {prod.valorVenda}
                                    </div>
                                    <div className="atributo-valorCustoProduto">
                                        {prod.valorCusto}
                                    </div>
                                    <div className="atributo-margemDescontoProduto">
                                        {prod.margemDesconto}
                                    </div>
                                </div>

                                <div className="produto-icons">

                                    <div className="icon-lixeira">
                                        <img src={imgLixeira} alt="" />
                                    </div>
                                    <div className="icon-edicao">
                                        <img src={imgCaneta} alt="" />
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
                <Footer />
            </div>
        </div >
    );
}

export default Produto;