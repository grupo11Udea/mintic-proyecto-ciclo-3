import React, { useState, useEffect } from "react";
import ProductosFerreteria from "./ProductosFerreteria";
import Button from 'react-bootstrap/Button';



const ProductoDetalle = ({ keyword, keyword2, checkValues, setCheckValues }) => {
  let advertenciaFiltros = document.getElementById('Advertencia de filtros');
  let botonBorrarFiltros = document.getElementById('Borrar filtros')
  function actualizarProductos(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/productos`)
      .then((response) => response.json())
      .then((data) => {
        console.log("response fetch", data);
        setProductos(data);
      })
      .catch((error) => {
        console.log("error");
      });
    advertenciaFiltros.innerHTML = ``;
    botonBorrarFiltros.style = "display: none"
  }


  function obtenerProductos(keyword, keyword2) {
    if (keyword || keyword2) {
      console.log("keyword ¿fetch?", keyword);
      fetch(`${process.env.REACT_APP_BACKEND_PATH}/productos/getByName/?nombre=${keyword}&id=${keyword2}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("response", data);
          setProductos(data);
        })
        .catch((error) => {
          console.log("error");
        });

      advertenciaFiltros.innerHTML = `<h4>Se muestran los resultados de "${keyword || keyword2}"</h4>`;
      botonBorrarFiltros.style = "display: block"

    } else {
      console.log("keyword ¿fetch?2");
      fetch(`${process.env.REACT_APP_BACKEND_PATH}/productos`)
        .then((response) => response.json())
        .then((data) => {
          console.log("response fetch", data);
          setProductos(data);
        })
        .catch((error) => {
          console.log("error");
        });
      console.log(productos);
    }
  }


  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos(keyword, keyword2)
  }, [keyword, keyword2]);

  return (
    <>

      <div className="p-3">
        <div id="Advertencia de filtros"></div>
        <Button variant="outline-primary" id="Borrar filtros" onClick={actualizarProductos}>Quitar Filtro</Button>
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
              return <ProductosFerreteria articulos={producto} checkValues={checkValues} setCheckValues={setCheckValues} key={producto.id} />;
            })}
          </tbody>
        </table>


      </div>
    </>
  );
};

export default ProductoDetalle;