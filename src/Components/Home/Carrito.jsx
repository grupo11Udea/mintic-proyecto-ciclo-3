import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Mensaje from './Mensaje'
import './carrito.css'

function Carrito({ articulos }) {

    const [valorTotal, setValorTotal] = useState(0)
    const [identificadorVenta, setIdentificadorVenta] = useState(0)
    const [persona, setPersona] = useState({
    })
    const [persona2, setPersona2] = useState({
    })
    const [venta, setVenta] = useState({
    })


    //Props modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mensaje, setMensaje] = useState('')

    const changeField = (e) => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
        setPersona2({
            ...persona,
            [e.target.name]: e.target.value
        })
        console.log(persona)
    }

    const changeFieldIdentificadorVenta = (e) => {
        setIdentificadorVenta(e.target.value);
        console.log(identificadorVenta);
    }

    useEffect(() => {
        console.log('Cargó', articulos)
    }, [])

    const pagar = async () => {
        let suma = 0
        let fechaVenta = new Date();
        articulos.forEach(element => {
            suma += parseInt(element.producto.valor_unitario * element.cantidad);
        });
        let detalleVenta = [];
        articulos.forEach(articulo => {
            detalleVenta.push({
                cantidad: articulo.cantidad,
                precio_unitario: articulo.producto.valor_unitario,
                id_producto: articulo.producto.id
            });

        })
        let venta = {
            valor_total: suma,
            identificador: persona.identificadorVenta, fecha: fechaVenta, estado: 1, numero_documento: persona.numero_documento, detalleVenta
        };
        let persona2 = {
            numero_documento: persona.numero_documento,
            nombres: persona.nombres
        }
        try {
            const response = await registrarCliente(persona2);
            if (response == null && !response.ok) return;
            const responseRegistraVenta = await registrarVenta(venta);
            if (responseRegistraVenta != null && responseRegistraVenta.ok) {
                setShow(true);
                setMensaje("La venta se registro correctamente");
            }
        } catch (e) {
            console.log(e);
        }

    }

    const registrarVenta = async (venta) => {
        let response = null;
        try {
            response = await fetch('http://localhost:5000/api/ventas', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(venta), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('Este es el ok : ', response.ok);
        } catch (e) {
            console.log('Este es el error : ', e);
        }
        return response;
    }


    const registrarCliente = async (persona) => {
        let response = null;
        try {
            response = await fetch('http://localhost:5000/api/cliente', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(persona), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('Este es el ok : ', response.ok);
        } catch (e) {
            console.log('Este es el error : ', e);
        }
        return response;
    }

    return (
        <div class="row">
            <div className="galleryComponent">
                {articulos.map((articulo) => {
                    return (<div className="itemProduct"> <div>{articulo.producto.nombre}</div><div>{articulo.cantidad}</div>
                    </div>
                    );
                })}
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Número documento</Form.Label>
                    <Form.Control name="numero_documento" type="text" defaultValue={persona.numero_documento} onChange={changeField} placeholder="Documento cliente" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombres" defaultValue={persona.nombres} onChange={changeField} placeholder="Nombre cliente" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Identificador de la venta</Form.Label>
                    <Form.Control type="text" name="identificadorVenta" defaultValue={persona.identificadorVenta} onChange={changeField} placeholder="Identificador único de venta" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={pagar}>
                    Pagar
                </Button>
            </Form>
            <Mensaje show={show} handleClose={handleClose} handleShow={handleShow} mensaje={mensaje}></Mensaje>
        </div>
    )
}

export default Carrito
