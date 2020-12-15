import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import imgLogo from '../../assets/images/logo.png';

function HeaderGestao() {
  return (
    <div className="banner">
      <div className="menu">
        <header className="container-header">
          <nav className="header">
            <div className="logo-header">
              <Link to="/" className="link-logo"><img src={imgLogo}  className="img-header-logo" alt=""/></Link>
            </div>
            <ul className="ul-usuario">
              <li><Link to="/relatorioVenda" className="link">Relatório Venda</Link> </li>
              <li> <Link to="/despesa" className="link">Despesas</Link> </li>
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