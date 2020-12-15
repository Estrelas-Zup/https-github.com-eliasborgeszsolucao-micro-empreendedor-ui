import React from 'react';
import './style.css';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="container-footer">
                        <div className="position-text-center">
                            <div className="text-sobreNos" id="text-footer">
                                <h1>Sobre Nós</h1>
                            </div>
                            <div className="text-trabalheConosco" id="text-footer">
                                <h1>Trabalhe Conosco</h1>
                            </div>
                            <div className="text-servicos" id="text-footer">
                                <h1>Serviços</h1>
                            </div>
                            <div className="text-atendimento" id="text-footer">
                                <h1>Atendimento</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mensagem-direitosReservados">
                        <h5>Sisger Universe © 2020 - Todos os direitos reservados</h5>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;