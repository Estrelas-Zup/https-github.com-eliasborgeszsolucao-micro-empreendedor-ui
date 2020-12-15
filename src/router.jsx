import React, { createContext, useState, useEffect } from 'react';
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
import LoginAcesso from './pages/Acesso/LoginAcesso';
import PrivateRoute from './core/components/PrivateRoute';
import { getUserFromLocalStorage } from './core/utils/token';

export const authContext = createContext();

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

function useProvideAuth() {
    const [user, setUser] = useState(() => {
        return getUserFromLocalStorage()
    });



    const signin = user => {
        setUser(user);
    };

    const signout = () => {
        setUser(null);
    };

    return {
        user,
        signin,
        signout
    };
}


function Router() {

    return (
        <ProvideAuth>
            <BrowserRouter>
                <HeaderGestao />
                <Switch>
                    <Route path='/login' exact  >
                        <LoginAcesso />
                    </Route>
                    <PrivateRoute path='/relatorioVenda' >
                        <RelatorioVenda />
                    </PrivateRoute>
                    <PrivateRoute path='/despesa' >
                        <Despesa />
                    </PrivateRoute>
                    <PrivateRoute path='/estoque' >
                        <Estoque />
                    </PrivateRoute>
                    <PrivateRoute path='/produto' >
                        <Produto />
                    </PrivateRoute>
                    <PrivateRoute path='/vendas' >
                        <Vendas />
                    </PrivateRoute>
                    <PrivateRoute path='/caixa' >
                        <Caixa />
                    </PrivateRoute>
                    <PrivateRoute path='/gestao' >
                        <Gestao />
                    </PrivateRoute>
                    <PrivateRoute path='/' >
                        <DashBoard />
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </ProvideAuth>
    );
}

export default Router;