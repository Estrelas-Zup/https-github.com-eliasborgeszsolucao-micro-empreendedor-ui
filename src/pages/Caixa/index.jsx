import React from 'react';
import Footer from '../../components/Footer';
import './style.css';
import imgLixeira from '../../assets/images/caneta.svg';
import imgCaneta from '../../assets/images/lixeira.svg';
import Input from '../../components/Input';

function Caixa() {
    return (
        <div>
            <div className="caixa">
                <div className="classe-caixa">
                    <h1>Caixa:</h1>
                </div>

               <Input/>

                <div className="registro-caixas">
                    <div className="position-registro-caixa">
                        <div className="title-atributos-caixa">
                            <div className="caixa-idCaixa" id="caixa">
                                <h4>IdCaixa</h4>
                            </div>
                            <div className="caixa-data" id="caixa">
                                <h4>Data</h4>
                            </div>
                            <div className="caixa-saldoInicial" id="caixa">
                                <h4>Saldo Inicial</h4>
                            </div>
                            <div className="gestao-valorTotalDespesa" id="caixa">
                                <h4>Valor Total Despesa</h4>
                            </div>
                            <div className="caixa-valorTotal" id="caixa">
                                <h4>Valor Total</h4>
                            </div>
                            <div className="gestao-caixaAberto" id="caixa">
                                <h4>Caixa Aberto</h4>
                            </div>
                        </div>

                    </div>

                    <div className="position-dados-caixa-one">
                        <div className="dados-caixa-one">
                            <div className="atributo-idCaixa">
                                <p>1</p>
                            </div>
                            <div className="atributo-data">
                                <p>12/10/2020</p>
                            </div>
                            <div className="atributo-saldoInicial">
                                <p>R$ 2.400,00</p>
                            </div>
                            <div className="atributo-valorTotalDespesa">
                                <p>R$ 2.000,00</p>
                            </div>
                            <div className="atributo-valorTotal">
                                <p>R$ 2.000,00</p>
                            </div>
                            <div className="atributo-caixaAberto">
                               <div className="circunferencia-caixa">
                                   
                               </div>
                            </div>
                        </div>

                        <div className="caixa-icons">
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

export default Caixa;