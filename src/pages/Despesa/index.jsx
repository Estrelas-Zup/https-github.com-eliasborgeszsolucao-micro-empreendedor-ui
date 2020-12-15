import React from 'react';
import Footer from '../../components/Footer';
import './style.css';
import imgLixeira from '../../assets/images/caneta.svg';
import imgCaneta from '../../assets/images/lixeira.svg';
import Input from '../../components/Input';

function Despesa() {
    return (
        <div>
            <div className="despesa">
                <div className="classe-despesa">
                    <h1>Despesa:</h1>
                </div>

                <Input/>

                <div className="registro-despesas">
                    <div className="position-registro-despesa">
                        <div className="title-atributos-despesa">
                            <div className="despesa-idDespesa" id="despesa">
                                <h4>IdDespesa</h4>
                            </div>
                            <div className="despesa-idCaixa" id="despesa">
                                <h4>IdCaixa</h4>
                            </div>
                            <div className="despesa-valor" id="despesa">
                                <h4>Valor</h4>
                            </div>
                            <div className="despesa-descricao" id="despesa">
                                <h4>Descrição</h4>
                            </div>
                        </div>

                    </div>

                    <div className="position-dados-despesa-one">
                        <div className="dados-despesa-one">
                            <div className="atributo-idDespesa">
                                <p>1</p>
                            </div>
                            <div className="atributo-idCaixaDespesa">
                                <p>1</p>
                            </div>
                            <div className="atributo-descricaoProduto">
                                <p>R$ 250,00</p>
                            </div>
                            <div className="atributo-unidadeMedidaProduto">
                                <p>Pagou a conta de energia elétrica</p>
                            </div>
                        </div>


                        <div className="despesa-icons">

                            <div className="icon-lixeira">
                                <img src={imgLixeira} alt="" />
                            </div>
                            <div className="icon-edicao">
                                <img src={imgCaneta} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="position-dados-despesa-second">
                        <div className="dados-despesa-one">
                            <div className="atributo-idProduto">
                                <p>1</p>
                            </div>
                            <div className="atributo-nomeProduto">
                                <p>1</p>
                            </div>
                            <div className="atributo-descricaoProduto">
                                <p>R$ 250,00</p>
                            </div>
                            <div className="atributo-unidadeMedidaProduto">
                                <p>Pagou a conta de energia elétrica</p>
                            </div>
                        </div>


                        <div className="despesa-icons">

                            <div className="icon-lixeira">
                                <img src={imgLixeira} alt="" />
                            </div>
                            <div className="icon-edicao">
                                <img src={imgCaneta} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Despesa;