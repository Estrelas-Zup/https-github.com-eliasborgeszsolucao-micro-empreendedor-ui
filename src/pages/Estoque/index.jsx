import React from 'react';
import Footer from '../../components/Footer';
import './style.css';
import imgLixeira from '../../assets/images/caneta.svg';
import imgCaneta from '../../assets/images/lixeira.svg';
import Input from '../../components/Input';

function Estoque() {
    return (
        <div>
            <div className="estoque">
                <div className="classe-estoque">
                    <h1>Estoque:</h1>
                </div>

                <Input />

                <div className="registro-estoques">
                    <div className="position-registro-estoque">
                        <div className="title-atributos-estoque">
                            <div className="estoque-idEstoque" id="estoque">
                                <h4>IdEstoque</h4>
                            </div>
                            <div className="estoque-idProduto" id="estoque">
                                <h4>IdProduto</h4>
                            </div>
                            <div className="estoque-quantidade" id="estoque">
                                <h4>Quantidade</h4>
                            </div>
                            <div className="estoque-dataValidade" id="estoque">
                                <h4>Data de Validade</h4>
                            </div>
                            <div className="venda-perda" id="venda">
                                <h4>Perda</h4>
                            </div>
                            <div className="venda-motivoPerda" id="venda">
                                <h4>Motivo Perda</h4>
                            </div>
                            <div className="venda-disponibilidade" id="venda">
                                <h4>Disponibilidade</h4>
                            </div>
                        </div>

                    </div>

                    <div className="position-dados-venda-one">
                        <div className="dados-venda-one">
                            <div className="atributo-idEstoque">
                                <p>1</p>
                            </div>
                            <div className="atributo-idProduto">
                                <p>1</p>
                            </div>
                            <div className="atributo-quantidade">
                                <p>12</p>
                            </div>
                            <div className="atributo-dataValidade">
                                <p>12/02/2020</p>
                            </div>
                            <div className="atributo-perda">
                                <div className="circunferencia-perda">

                                </div>
                            </div>
                            <div className="atributo-motivoPerda">
                                <p>Produto vencido</p>
                            </div>
                            <div className="atributo-disponibilidade">
                                <div className="circunferencia-disponibilidade">

                                </div>
                            </div>
                        </div>

                        <div className="estoque-icons">
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

export default Estoque;