import React, { useState } from "react";
import Navbar from "./NavBar";
import Buscar from "./Buscar";
import ProductoDetalleVenta from "./ProductoDetalleVenta";
import Carrito from "./Carrito";

function Venta() {

    const [keyword, setKeyword] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [items, setItems] = useState([]);

    return (
        <div>
        <Navbar />
          <div className="container anyClass">
              <Buscar keyword={keyword} setKeyword={setKeyword} keyword2={keyword2} setKeyword2={setKeyword2} />
              <ProductoDetalleVenta keyword ={keyword} keyword2 ={keyword2} items={items} setItems={setItems}/>
              <Carrito articulos={items} />
          </div>
        </div>
    )
}

export default Venta