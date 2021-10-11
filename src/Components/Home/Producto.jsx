import React, { useState } from 'react'
import ProductosFerreteria from './ProductosFerreteria';
import Navbar from './NavBar';

const Producto = () => {

    const [productos] = useState([
        { id: 1, nombre: 'Martillo', descripcion: 'Marca stanley', precio: 1500 },
        { id: 2, nombre: 'Sierra', descripcion: 'Sierra para cortar hierro', precio: 4500 },
        { id: 3, nombre: 'Tornillo 1/2"', descripcion: 'Tipo estrella', precio: 500 },
        { id: 4, nombre: 'Luz led', descripcion: 'Luz para baño', precio: 3500 },
        { id: 5, nombre: 'Lija', descripcion: 'Lija de agua especial para pintura', precio: 800 },

    ])

    const [compras, setCompras] = useState([])

    const comprar = (productos) => {
        setCompras([...compras, productos])
    }

    return (
        <>
            <Navbar />
            <div className="producto p-4">
                <table className="table table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((productos) => {
                                return (
                                    <ProductosFerreteria

                                        articulos={productos}
                                        comprar={comprar}
                                    />
                                )
                            })
                        }
                        {
                            compras.map((elemento) => {
                                return (
                                    <h2>{elemento.nombre}</h2>
                                )

                            })
                        }

                    </tbody>
                </table>
                <div className="row d-flex justify-content-center">
                    <button className="col-2 m-5 btn btn-outline-success" type="submit">Crear</button>
                    <button className="col-2  m-5 btn btn-outline-primary" type="submit">Actualizar</button>
                    <button className="col-2 m-5 btn btn-outline-danger" type="submit">Borrar</button>
                </div>
            </div>

        </>
    );
}

export default Producto


