import React from 'react'
import ProdutoGet from '../../api/endpoints/ProdutoGet';
import FuncionarioPost from '../CadastroFuncionario/Funcionario';
import GestaoPost from '../Gestao/GestaoCaixa';
import '../Dashboard/DashboardStyle.css';


function Dashboard() {
    return (
        <div className="main">
            <header>
                <div className="left_area">
                    <h3>Sisger<span>Universe</span></h3>
                </div>
                <div className="right_area">
                    <a href="#" className="logout_btn">Logout</a>
                </div>
            </header>
            <a href="#"><i className="fas fa-desktop"></i><span>Lorem</span></a>
            <a href="#"><i className="fas fa-cogs"></i><span>Lorem</span></a>
            <a href="#"><i className="fas fa-table"></i><span>Lorem</span></a>
            <a href="#"><i className="fas fa-th"></i><span>Lorem</span></a>
            <a href="#"><i className="fas fa-info-circle"></i><span>Lorem</span></a>
        </div>
    )
}

export default Dashboard;
