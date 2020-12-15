import React from 'react';
import Footer from '../../components/Footer';
import './style.css';
import imgLixeira from '../../assets/images/caneta.svg';
import imgCaneta from '../../assets/images/lixeira.svg';
import Input from '../../components/Input';

function Gestao() {    
    return (
        <div>
            <div className="gestao">
                <div className="classe-gestao">
                    <h1>Gestão:</h1>
                </div>

                <Input/>
                
                <div className="registro-gestaos">
                    <div className="position-registro-gestao">
                        <div className="title-atributos-gestao">
                            <div className="gestao-idGestao" id="gestao">
                                <h4>IdGestão</h4>
                            </div>
                            <div className="gestao-capitalSocial" id="gestao">
                                <h4>Capital Social</h4>
                            </div>
                        </div>
                    </div>

                    <div className="position-dados-gestao-one">
                        <div className="dados-gestao-one">
                            <div className="atributo-idDespesa">
                                <p>1</p>
                            </div>
                            <div className="atributo-capitalSocial">
                                <p>R$ 2.400,00</p>
                            </div>
                        </div>


                        <div className="gestao-icons">

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

export default Gestao;