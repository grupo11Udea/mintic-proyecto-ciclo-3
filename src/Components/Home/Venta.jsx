import React, { useState } from 'react'
import './venta.css'
import Mensaje from './Mensaje'
import Navbar from './NavBar'
//import $ from "jquery";
function Venta() {

    const [ventasRealizadas, setVentasRealizadas] = useState([])

    const [venta, setVenta] = useState({
        id: '',
        valorTotal: '',
        identificador: '',
        cantidad: '',
        fechaVenta: '',
        documento: '',
        nombre: ''
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mensaje, setMensaje] = useState('')

    //error
    const [error, setError] = useState('')

    //
    const [registrar, setRegistrar] = useState(false);

    const [ventasConsultadas, setVentasConsultadasVenta] = useState([]);


    const eliminar = (venta) => {
        console.log(venta);
        let ventaActual = [];
        ventaActual = ventasRealizadas.filter(v => !v.identificador.match(venta.identificador));
        setVentasRealizadas(ventaActual);
        console.log('ventas : ', ventaActual);
        setVentasConsultadasVenta(ventaActual)
        //prueba()
    }

    const prueba = () => {
        setVentasConsultadasVenta([])
    }

    const ventaChange = (e) => {
        setVenta({
            ...venta,
            [e.target.name]: e.target.value
        })
    }

    const sendForm = () => {
        //$('#mensajes').modal('show');
        if (venta.valorTotal === '') {
            setError('Campo valorTotal es obligatorio');
        } else if (venta.identificador === '') {
            setError('Campo identificador es obligatorio');
        } else if (venta.cantidad === '') {
            setError('Campo cantidad es obligatorio');
        } else if (venta.fechaVenta === '') {
            setError('Campo fecha venta es obligatorio');
        } else if (venta.documentoCliente === '') {
            setError('Campo documento cliente es obligatorio');
        } else if (venta.nombreCliente === '') {
            setError('Campo nombre cliente es obligatorio');
        } else {
            registrarVenta(venta);
            setShow(true);
            setMensaje('Se guardo correctamente');
            setError('');
        }
    }

    const registrarVenta = (venta) => {
        setVentasRealizadas([...ventasRealizadas, venta])
    }

    const habilitarRegistro = () => {
        setRegistrar(true);
    }

    const consultar = () => {
        let ventaActual = [];
        ventaActual = ventasRealizadas.filter(v => v.identificador.match(venta.identificador));
        if (ventaActual !== undefined && ventaActual.length > 0) {
            ventaActual[0].cantidad = 5;
            console.log(ventaActual);
            setVentasConsultadasVenta(ventaActual);
        } else {
            console.log('Entró');
            setVentasConsultadasVenta([]);
        }
        console.log(ventaActual);

    }

    return (
        <div className="venta">
            <Navbar />
            <Mensaje show={show} handleClose={handleClose} handleShow={handleShow} mensaje={mensaje}></Mensaje>

            <div className="container anyClass">
                <form>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label >Valor Total</label>
                                <input type="number" value={venta.valorTotal} className="form-control" id="idValorTotal" aria-describedby="emailHelp" placeholder="Ingrese valor total" name="valorTotal" onChange={ventaChange} />
                            </div>
                            <div className="form-group">
                                <label >Identificador</label>
                                <input type="text" value={venta.identificador} className="form-control" id="idIdentificador" placeholder="Ingrese un identificador de venta" name="identificador" onChange={ventaChange} />
                            </div>
                            <div className="form-group">
                                <label >cantidad</label>
                                <input type="number" value={venta.cantidad} className="form-control" id="idCantidad" placeholder="Ingrese cantidad" name="cantidad" onChange={ventaChange} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label >Fecha de venta</label>
                                <input type="date" value={venta.fechaVenta} className="form-control" id="idFechaVenta" name="fechaVenta" onChange={ventaChange} />
                            </div>
                            <div className="form-group">
                                <label >Documento cliente</label>
                                <input type="text" value={venta.documento} className="form-control" id="idDocumento" placeholder="Ingrese el documento de cliente" name="documento" onChange={ventaChange} />
                            </div>
                            <div className="form-group">
                                <label >Nombre de cliente</label>
                                <input type="text" value={venta.nombre} className="form-control" id="idNombreCliente" placeholder="Ingrese el nombre de cliente" name="nombre" onChange={ventaChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={consultar}>Consultar</button>
                        </div>
                        <div className="col">
                            <button type="button" onClick={sendForm} className="btn btn-success">Registrar</button>
                        </div>
                    </div>
                </form>
                {
                    error !== '' &&
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>

                }
                {(ventasConsultadas !== undefined && ventasConsultadas.length > 0) &&
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Valor Total</th>
                                    <th>Identificador</th>
                                    <th>Cantidad</th>
                                    <th>Fecha venta</th>
                                    <th>Documento</th>
                                    <th>Nombre</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ventasConsultadas.map((venta) => {
                                        return (
                                            <tr>
                                                <td>{venta.id}</td>
                                                <td>{venta.valorTotal}</td>
                                                <td>{venta.identificador}</td>
                                                <td>{venta.cantidad}</td>
                                                <td>{venta.fechaVenta}</td>
                                                <td>{venta.documento}</td>
                                                <td>{venta.nombre}</td>
                                                <td> <button type="button" className="btn btn-primary ">+</button></td>
                                                <td> <button type="button" className="btn btn-danger" onClick={() => eliminar(venta)}>-</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        </div>
    )
}

export default Venta
