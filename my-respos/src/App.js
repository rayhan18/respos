import React,{Fragment}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import ProductItem from "./Component/product/ProductItem";


function App() {
  return (
    <Fragment>
          <Home/>
          <ProductItem/>
          <Footer/>
    </Fragment>
  );
}

export default App;
