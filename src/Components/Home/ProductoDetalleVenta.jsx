import React,{ useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function ProductoDetalleVenta({keyword, keyword2,items,setItems}) {
    const [productos, setProductos] = useState([]);

    const[cantidad,setCantidad] = useState([]);

    const changeField = (e) => {
        setCantidad(e.target.value);
        console.log(cantidad);
    }
    

    const agregarCarrito=(articulo)=>{
        console.log(articulo.cantidad);
        console.log('objeto',articulo);
        console.log('items',items);
        console.log('articulo id',articulo.id);
        items.forEach((i)=>{
          console.log(i.producto.id);
        })
        let item = items.filter(v => v.producto.id==articulo.producto.id);
        if (item === undefined || item.length == 0) {
            setItems([...items,articulo]);
        }
        /*console.log(items);*/
    }


     /*const ventaChange = (e) => {
        setVenta({
            ...venta,
            [e.target.name]: e.target.value
        })
    }*/

    useEffect(() => {
        if (keyword !== undefined && keyword !== "" && keyword2 !== undefined && keyword2 !== "") {
          console.log("keyword", keyword);
          fetch(`http://localhost:5000/api/productos/getByName/?nombre=${keyword}&id=${keyword2}`)
            .then((response) => response.json())
            .then((data) => {
              console.log("response", data);
              setProductos(data);
            })
            .catch((error) => {
              console.log("error");
            });
        } else {
          fetch("http://localhost:5000/api/productos")
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
              return  <tr>
              <th scope="row">{producto.id}</th>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.valor_unitario}</td>
              <td>{producto.estado}</td>
              <td>{producto.usuario}</td>
              <td>{producto.cantidad}</td>
              <td>
              <form>
              <Form.Control name="cantidad" type="text" defaultValue={cantidad} onChange={changeField} placeholder="cantidad" />
              </form>
              </td>
              <td onClick={()=>agregarCarrito({cantidad:cantidad,producto})} className="btn btn-outline-dark w-100  btn-sm align-top">Agregar al Carrito</td>
          </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductoDetalleVenta
