import React, { useState } from "react";
import Navbar from "./NavBar";
import Buscar from "./Buscar";
import ProductoDetalle from "./Productodetalle";
import CrearProducto from "./CrearProducto";
import BorrarProducto from "./BorrarProducto";
import ActualizarProducto from "./ActualizarProducto";

const Producto = () => {

  const [keyword, setKeyword] = useState('');
  const [keyword2, setKeyword2] = useState('');
  const [checkValues, setCheckValues] = useState({});
  
  return (
    <>
      <Navbar />
      <CrearProducto />
      <ActualizarProducto actualizar = {checkValues} setActualizar ={setCheckValues} />
      
      <Buscar keyword ={keyword} setKeyword ={setKeyword} keyword2 ={keyword2} setKeyword2 ={setKeyword2}/>
      <ProductoDetalle keyword ={keyword} keyword2 ={keyword2} checkValues ={checkValues} setCheckValues ={setCheckValues}/>
      <BorrarProducto borraId={checkValues}/>
      
      
    </>
  );
};

export default Producto;
