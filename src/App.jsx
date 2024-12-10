import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Cart from './component/Cart';
import ViewProduct from './component/ViewProduct';

const App = () => {
  return (
    <>
<Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/About' Component={About}/>
      <Route path='/Contact' Component={Contact}/>
      <Route path='/Product' Component={Product}/>
      <Route path='/Login' Component={Login}/>
      <Route path='/SignUp' Component={SignUp}/>
      <Route path='/Cart' Component={Cart}/>
      <Route path='/ViewProduct' Component={ViewProduct}/>
    
    </Routes>     
  <Footer/>
    </>
  )
}

export default App
