import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar'
import ProductsContextProvider from './Components/ProductsContext'
import CartContextProvider from './Components/CartContext'
import Products from './Components/Products'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Cart from './Components/Cart'
import Page from './Components/Page'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Buynow from './Components/Buynow'
import Navbar from './Components/Navbar';
import Protected from './Protected'

function App() {
  return (
    <div >
    <ProductsContextProvider>
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route path="/shopping-webapp-reactjs/" exact component={Products}/>
    <Protected path="shopping-webapp-reactjs/cart" exact component={Cart}/>
    <Route path="/shopping-webapp-reactjs/login" exact component={Login}/>
    <Route path="/shopping-webapp-reactjs/logout" exact component={Logout}/>
    <Protected path="/shopping-webapp-reactjs/buynow" exact component={Buynow}/>
    <Route component={Page}/>
    </Switch>
    </BrowserRouter>
    </CartContextProvider>
    </ProductsContextProvider>
    </div>
  );
}

export default App;
                                    