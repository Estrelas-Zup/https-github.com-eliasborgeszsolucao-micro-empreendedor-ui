import React from 'react';
import Footer from '../../components/Footer';
import './style.css';
import imgLixeira from '../../assets/images/caneta.svg';
import imgCaneta from '../../assets/images/lixeira.svg';
import Input from '../../components/Input';

function RelatorioVenda() {
    return (
        <div>
            <div className="relatorioVenda">
                <div className="classe-relatorioVenda">
                    <h1>Relatório Venda:</h1>
                </div>

                <Input />

                <div className="registro-relatorioVendas">
                    <div className="position-registro-relatorioVendas">

                        <div className="relatorioVendas">
                            <div className="title-atributos-relatorioVendas">
                                <div className="relatorioVenda-idRelatorioVenda" id="relatorioVenda">
                                    <h4>IdRelatorioVenda</h4>
                                </div>
                                <div className="relatorioVenda-idProdutoEstoque" id="relatorioVenda">
                                    <h4>IdProdutoEstoque</h4>
                                </div>
                                <div className="relatorioVenda-estoque" id="relatorioVenda">
                                    <h4>Estoque</h4>
                                </div>
                                <div className="relatorioVenda-venda" id="relatorioVenda">
                                    <h4>Venda</h4>
                                </div>
                                <div className="relatorioVenda-quantidade" id="relatorioVenda">
                                    <h4>Quantidade</h4>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="position-dados-relatorioVenda-one">
                        <div className="dados-relatorioVenda-one">
                            <div className="atributo-idRelatorioVenda">
                                <p>1</p>
                            </div>
                            <div className="atributo-idProduto">
                                <p>1</p>
                            </div>
                            <div className="atributo-quantidade">
                                <p>12</p>
                            </div>
                            <div className="atributo-estoque">
                                <p>.</p>
                            </div>
                            <div className="atributo-venda">
                                <p>.</p>
                            </div>
                            <div className="atributo-quatidade">
                                <p>10</p>
                            </div>
                        
                        </div>

                        <div className="relatorioVenda-icons">
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

export default RelatorioVenda;