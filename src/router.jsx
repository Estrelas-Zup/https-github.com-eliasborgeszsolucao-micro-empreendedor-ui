import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gestao from './pages/Gestao/index';
import Estoque from './pages/Estoque/index';
import Produto from './pages/Produto/index';
import Despesa from './pages/Despesa/index';
import DashBoard from './pages/DashBoard';
import Caixa from './pages/Caixa/index';
import HeaderGestao from './components/HeaderGestao';
import RelatorioVenda from './pages/RelatorioVenda/index';
import Vendas from './pages/Vendas/index';

function Router() {
    return (
        <BrowserRouter>
            <HeaderGestao />
            <Switch>
                <Route path='/' exact component={DashBoard}>
                    <DashBoard />
                </Route>
                <Route path='/relatorioVenda' component={RelatorioVenda}>
                    <RelatorioVenda />
                </Route>
                <Route path='/despesa' component={Despesa}>
                    <Despesa />
                </Route>
                <Route path='/estoque' component={Estoque}>
                    <Estoque />
                </Route>
                <Route path='/produto' component={Produto}>
                    <Produto />
                </Route>
                <Route path='/vendas' component={Vendas}>
                    <Vendas />
                </Route>
                <Route path='/caixa' component={Caixa}>
                    <Caixa />
                </Route>
                <Route path='/gestao' component={Gestao}>
                    <Gestao />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;