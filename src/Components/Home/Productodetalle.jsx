import React, { useState, useEffect } from "react";
import ProductosFerreteria from "./ProductosFerreteria";




const ProductoDetalle = ({keyword, keyword2}) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        if (keyword !== "" || keyword2 !== "") {
          console.log("keyword", keyword);
          fetch(`http://localhost:5000/api/getByName/?nombre=${keyword}&id=${keyword2}`)
            .then((response) => response.json())
            .then((data) => {
              console.log("response", data);
              setProductos(data);
            })
            .catch((error) => {
              console.log("error");
            });
        } else {
          fetch("http://localhost:5000/api/")
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
      }, [keyword, keyword2]);
  
  return (
    <>
        <div className="producto p-3">
        <table className="table table-secondary">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Valor unitario</th>
              <th scope="col">Estado</th>
              <th scope="col">Usuario</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => {
              return <ProductosFerreteria articulos={producto} />;
            })}
          </tbody>
        </table>

        <div className="row d-flex justify-content-center">
          <button className="col-2 m-5 btn btn-outline-success" type="submit">
            Crear
          </button>
          <button className="col-2  m-5 btn btn-outline-primary" type="submit">
            Actualizar
          </button>
          <button className="col-2 m-5 btn btn-outline-danger" type="submit">
            Borrar
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductoDetalle;