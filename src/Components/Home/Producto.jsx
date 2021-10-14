import React, { useState } from "react";
import Navbar from "./NavBar";
import Buscar from "./Buscar";
import ProductoDetalle from "./Productodetalle";


const Producto = () => {

  const [keyword, setKeyword] = useState('');
  const [keyword2, setKeyword2] = useState('');
  
  return (
    <>
      <Navbar />
      <Buscar keyword ={keyword} setKeyword ={setKeyword} keyword2 ={keyword2} setKeyword2 ={setKeyword2}/>
      <ProductoDetalle keyword ={keyword} keyword2 ={keyword2}/>
    </>
  );
};

export default Producto;
