import React, { useState, useEffect } from "react";
import ProductosFerreteria from "./ProductosFerreteria";



const ProductoDetalle = ({keyword, keyword2, checkValues, setCheckValues}) => {
    
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        if (keyword !== "" || keyword2 !== "") {
          console.log("keyword", keyword);
          fetch(`${process.env.REACT_APP_BACKEND_PATH}/productos/getByName/?nombre=${keyword}&id=${keyword2}`)
            .then((response) => response.json())
            .then((data) => {
              console.log("response", data);
              setProductos(data);
            })
            .catch((error) => {
              console.log("error");
            });
        } else {
          fetch(`${process.env.REACT_APP_BACKEND_PATH}/productos`)
            .then((response) => response.json())
            .then((data) => {
              console.log("response", data);
              setProductos(data);
            })
            .catch((error) => {
              console.log("error");
            });
          console.log(productos);
        }
      }, [keyword, keyword2, productos]);
  
  return (
    <>  
        <div className="p-3">
        <table className="table table-secondary table-hover" >
          <thead>
            <tr>
             
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Valor unitario</th>
              <th scope="col">Estado</th>
              <th scope="col">Usuario</th>
              <th scope="col">Select</th>
              
              
            </tr>
          </thead>
          <tbody >
            {productos.map((producto) => {
              return <ProductosFerreteria articulos={producto} checkValues={checkValues} setCheckValues={setCheckValues} />;
            })}
          </tbody>
        </table> 

        
      </div>
    </>
  );
};

export default ProductoDetalle;