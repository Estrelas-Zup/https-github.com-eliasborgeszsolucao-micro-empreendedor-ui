import React from 'react';
import Footer from '../../components/Footer';
import './style.css';
import imgLixeira from '../../assets/images/caneta.svg';
import imgCaneta from '../../assets/images/lixeira.svg';
import Input from '../../components/Input';

function Vendas() {
    return (
        <div>
            <div className="venda">
                <div className="classe-venda">
                    <h1>Vendas:</h1>
                </div>

                <Input/>

                <div className="registro-vendas">
                    <div className="position-registro-venda">
                        <div className="title-atributos-venda">
                            <div className="venda-idVenda" id="venda">
                                <h4>IdCaixa</h4>
                            </div>
                            <div className="venda-idCaixa" id="venda">
                                <h4>Data</h4>
                            </div>
                            <div className="venda-dataVenda" id="venda">
                                <h4>Saldo Inicial</h4>
                            </div>
                            <div className="venda-valorDesconto" id="venda">
                                <h4>Valor Total Despesa</h4>
                            </div>
                            <div className="venda-valorTotal" id="venda">
                                <h4>Valor Total</h4>
                            </div>
                            <div className="venda-observacao" id="venda">
                                <h4>Caixa Aberto</h4>
                            </div>
                        </div>

                    </div>

                    <div className="position-dados-venda-one">
                        <div className="dados-venda-one">
                            <div className="atributo-idVenda">
                                <p>1</p>
                            </div>
                            <div className="atributo-idCaixa">
                                <p>1</p>
                            </div>
                            <div className="atributo-dataVenda">
                                <p>12-10-2020</p>
                            </div>
                            <div className="atributo-valorDesconto">
                                <p>R$ 14,00</p>
                            </div>
                            <div className="atributo-valorTotal">
                                <p>R$ 100,00</p>
                            </div>
                            <div className="atributo-observacao">
                                <p>Produto com desconto</p>
                            </div>
                        </div>

                        <div className="venda-icons">
                            <div className="icon-lixeira">
                                <img src={imgLixeira} alt="" />
                            </div>
                            <div className="icon-edicao">
                                <img src={imgCaneta} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Vendas;