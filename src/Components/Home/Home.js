import React from 'react'
import ProdutoGet from '../../api/endpoints/ProdutoGet';
import FuncionarioPost from '../CadastroFuncionario/Funcionario';
import GestaoPost from '../Gestao/GestaoCaixa';
import '../Home/Home.style.css';


function Home() {
    return (
        <div className="main">
            <div className="text-main">
                <h1>Sisger <span>Universe</span></h1>
                <h6>Uma ideía inteligente</h6>
            </div>
            <div className="container-3">
                <div className="box-1">
                    <h1 className="text-title">O que oferecemos <br /> a você?</h1>
                    <p className="text-title-p">A eficiência e funcionalidade do sistema está na sua compacticidade, empregando para o empreendedor uma inteligencia ao seu negocio a parti das informações: estoque, vendas, despesas, fornecendo informações estrategicas para uma melhores tomadas de decisões; bem como acesso a um suporte que abrange questões contábeis/jurídicas, além das dúvidas relacionadas à plataforma em si. </p>
                </div>
                <div className="box-1">
                    <h1 className="text-title-second">Conheça a Sisger Universe!</h1>
                    <p className="text-title-p-second">O Sisger é um sistema automatizado que otimiza o controle de estoque, vendas e fluxo de funcionários, evitando desperdícios e mostrando melhores estratégias para seu negócio. 
Nosso principal objetivo é evitar que haja déficits nos orçamentos, prejudicando o funcionamento e progresso do estabelecimento.</p>
                    <div className="img-fluid">
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Home
