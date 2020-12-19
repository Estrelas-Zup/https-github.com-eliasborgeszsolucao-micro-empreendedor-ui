import React from 'react'
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import PrivateRoute from './Core/route/PrivateRoute';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
