import React from 'react'
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import PrivateRoute from './Core/route/PrivateRoute';
import FuncionarioPost from './Components/CadastroFuncionario/Funcionario';
import ProdutoPost from './Components/CadastroProduto/Produto';
import ProdutoGet from './api/endpoints/ProdutoGet';
import ProdutoPut from './Components/AlterarProduto/ProdutoPut';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/da" component={Dashboard} />
          <PrivateRoute exact path="/funcionarioCadastro" component={FuncionarioPost} />
          <PrivateRoute exact path="/produtoConsulta" component={ProdutoGet} />
          <PrivateRoute exact path="/produtoAltera" component={ProdutoPut} />
          <PrivateRoute exact path="/produtoCadastro" component={ProdutoPost} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
