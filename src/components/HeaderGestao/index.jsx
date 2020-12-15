import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import imgLogo from '../../assets/images/logo.png';
import { useLocation } from 'react-router-dom'

function HeaderGestao() {

  const location = useLocation();


  if (location.pathname === '/login') {
    return null
  }

  return (
    <div className="banner">
      <div className="menu">
        <header className="container-header">
          <nav className="header">
            <div className="logo-header">

            </div>
            <ul className="ul-usuario">
              <li><Link to="/relatorioVenda" className="link">Relatório Venda</Link> </li>
              <li> <Link to="/LoginAcesso" className="link">Despesas</Link> </li>
              <li> <Link to="/estoque" className="link">Estoques</Link> </li>
              <li> <Link to="/produto" className="link">Produtos</Link> </li>
              <li> <Link to="/vendas" className="link">Vendas</Link> </li>
              <li> <Link to="/caixa" className="link">Caixa</Link> </li>
              <li> <Link to="/gestao" className="link">Gestão</Link> </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default HeaderGestao;