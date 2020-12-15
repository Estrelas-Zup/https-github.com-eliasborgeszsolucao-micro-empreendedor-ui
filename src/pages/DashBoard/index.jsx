import React from 'react';
import './style.css';
import Footer from '../../components/Footer/index';
import imgProduto from '../../assets/images/produto.jpeg';
import imgIlustracaoGrafica from '../../assets/images/ilustracaoGrafica.svg';
import imgDinheiro from '../../assets/images/dinheiro.svg';

function DashBoard() {
    return (
        <div>
            <div className="gestao">
                <div className="position-Dashboard">
                    <div className="message-welcome">
                        <div className="title-dashboard">
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                </div>
                <div className="position-container-banner">
                    <div className="container-banner">
                        <div className="container-title-frase">
                            <div className="container-title">
                                <h1>Informações:</h1>
                            </div>
                            <div className="container-frase">
                                <p>Dados relacionados ao seu negócio!</p>
                            </div>
                        </div>
                        <div className="position-image-ilustracao">
                            <div className="image-ilustracao">
                                <img src={imgIlustracaoGrafica} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-grafico-info">
                    <div className="container-infoTotal-produtos">
                        <div className="position-container-mensagem">
                            <div className="container-mensagem">
                                <div className="user-pessoa">
                                    <h1>Total Mensal:</h1>
                                </div>
                                <div className="container-descricao-mensal">
                                    <p>Preço total do mês</p>
                                </div>
                                <div className="container-preco-icone">
                                    <div className="mensagem-conteudo">
                                        <p> <strong>R$0.000.00</strong> </p>
                                    </div>
                                    <div className="icone-dinheiro">
                                        <img src={imgDinheiro} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-info">
                            <div className="container-info-prices">
                                <div className="preco-total">
                                    <h1>Total das Despesas:</h1>
                                </div>
                                <div className="container-previaMensal">
                                    <p>Preço total das despesas</p>
                                </div>
                                <div className="container-preco-icone">
                                    <div className="container-precoTotal">
                                        <p><strong>R$0.000.00</strong></p>
                                    </div>
                                    <div className="icone-dinheiro">
                                        <img src={imgDinheiro} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-info-produto">
                            <div className="container-info-total-produto">
                                <div className="title-total-dia">
                                    <h1>Total do dia:</h1>
                                </div>
                                <div className="container-descricao">
                                    <p>Preço total do dia</p>
                                </div>
                                <div className="container-preco-icone">
                                    <div className="container-produto-total">
                                        <p><strong>R$0.000.00</strong></p>
                                    </div>
                                    <div className="icone-dinheiro">
                                        <img src={imgDinheiro} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-produto">
                            <div className="lista-produto-vendidos">
                                <div className="title-lista-produtos">
                                    <h1>Produtos Vendidos</h1>
                                </div>
                                <div className="info-listagem-produtos">
                                    <h1>Dados dos produtos</h1>
                                </div>
                                <div className="container-produtos-vendidos">
                                    <div className="image-produto">
                                        <img src={imgProduto} alt="" />
                                    </div>
                                    <div className="nome-produto">
                                        <p>Pão de sal</p>
                                    </div>
                                    <div className="preco-produto">
                                        <p> <strong>R$ 3,50</strong></p>
                                    </div>
                                </div>
                                <div className="container-produtos-vendidos">
                                    <div className="image-produto">
                                        <img src={imgProduto} alt="" />
                                    </div>
                                    <div className="nome-produto">
                                        <p>Bolacha</p>
                                    </div>
                                    <div className="preco-produto">
                                        <p> <strong>R$ 4,80</strong></p>
                                    </div>
                                </div>
                                <div className="container-produtos-vendidos">
                                    <div className="image-produto">
                                        <img src={imgProduto} alt="" />
                                    </div>
                                    <div className="nome-produto">
                                        <p>Maçã</p>
                                    </div>
                                    <div className="preco-produto">
                                        <p> <strong>R$ 5,50</strong></p>
                                    </div>
                                </div>
                                <div className="container-produtos-vendidos">
                                    <div className="image-produto">
                                        <img src={imgProduto} alt="" />
                                    </div>
                                    <div className="nome-produto">
                                        <p>Banana</p>
                                    </div>
                                    <div className="preco-produto">
                                        <p> <strong>R$ 2,65</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-grafico-dados">
                        <div className="container-graficos">
                            <div className="title-grafico">
                                <h1>Gráfico:</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default DashBoard;