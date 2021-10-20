import React,{useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Mensaje from './Mensaje'

function DetalleVenta({filtro,setFiltro,ventas,setVentas,consultarTodasVentas}) {
    const[ventaSeleccionada,setVentaSeleccionada] = useState(null);
    const[estadosVenta,setEstadosVenta] = useState([]);

    //Props modal
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);/*window.location.reload(false);*/}
    const handleShow = () => setShow(true);

    const [mensaje, setMensaje] = useState('')

    useEffect(()=>{
        fetch(`http://localhost:5000/api/estado/estadoVenta/`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
          setEstadosVenta(data);
        })
        .catch((error) => {
          console.log("error");
        });
    },[])

    const modificarVenta = (venta) =>{
        setVentaSeleccionada(venta)
        console.log(venta);
    }

    const changeField = (e) => {
        setVentaSeleccionada({
            ...ventaSeleccionada,
            [e.target.name]: e.target.value
        })
        console.log('prueba',ventaSeleccionada);
    }

    const actualizarVenta = async () =>{
        console.log(ventaSeleccionada);
        let response = null;
        try{
        response = await fetch(`http://localhost:5000/api/ventas/${ventaSeleccionada.id}`, {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(ventaSeleccionada), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         if(response.ok){
            setVentaSeleccionada(null);
            setShow(true);
                setMensaje('Se actualizo correctamente');
                response = await consultarTodasVentas();
                response = await response.json();
                setVentas(response);

         }   
            /*.then(res =>{
                console.log(res);
                setVentaSeleccionada(null);
                setShow(true);
                setMensaje('Se actualizo correctamente');
                consultarTodasVentas();
            });*/
        }catch(e){
            console.log(e);
        }    

    }

    return (
        <div>
            <Mensaje show={show} handleClose={handleClose} handleShow={handleShow} mensaje={mensaje}></Mensaje>
            <table className="table table-secondary">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Identificador</th>
                        <th scope="col">Fecha de Venta</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Nombre cliente</th>
                        <th scope="col">Documento cliente</th>
                    </tr>
                </thead>
                <tbody>
                {ventas && ventas.length>0 && ventas.map((venta) => {
              return  <tr>
              <th scope="row">{venta.id}</th>
              <td>{venta.valor_total}</td>
              <td>{venta.identificador}</td>
              <td>{venta.fecha}</td>
              <td>{venta.estado}</td>
              <td>{venta.cliente.nombres}</td>
              <td>{venta.cliente.numero_documento}</td>
              <td onClick={()=>modificarVenta(venta)} className="btn btn-outline-dark w-100  btn-sm align-top">+</td>
          </tr>;
            })}
                </tbody>
            </table>
            {
                ventaSeleccionada && <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Id Venta</Form.Label>
                    <Form.Control name="identificador" type="text" defaultValue={ventaSeleccionada.identificador} onChange={changeField} placeholder="Identificador de la venta" />
                    <Form.Text className="text-muted">
                        Identificador
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre cliente</Form.Label>
                    <Form.Control name="cliente.nombres" type="text" defaultValue={ventaSeleccionada.cliente.nombres} onChange={changeField} placeholder="Nombres del cliente" />
                    <Form.Text className="text-muted">
                        Nombre del cliente
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Valor Total</Form.Label>
                    <Form.Control name="valor_total" type="text" defaultValue={ventaSeleccionada.valor_total} onChange={changeField} placeholder="Nombres del cliente" />
                    <Form.Text className="text-muted">
                        Valor Total
                    </Form.Text>
                </Form.Group>
                <      Form.Label>Estado</Form.Label>
                        <Form.Select name="estado" value={ventaSeleccionada.estado} aria-label="Default select example" onChange={changeField}>
                            {estadosVenta.map((estado) => {
                                return (<option value={estado.id}>{estado.descripcion}</option>)
                            })
                            }
                        </Form.Select>
                <Button variant="primary" type="button" onClick={actualizarVenta}>
                    Actualizar
                </Button>
            </Form>
                </div>
            }
        </div>
    )
}

export default DetalleVenta
