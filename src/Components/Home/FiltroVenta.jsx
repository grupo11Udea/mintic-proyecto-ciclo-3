import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function FiltroVenta({ filtro, setFiltro ,setVentas,consultarTodasVentas}) {

    const consultarVentabyIdAndDocument = async(idVenta,numeroDocumento,nombreCliente)=>{
        let response = null; 
        
        if(idVenta === undefined){
            idVenta = '';
        }

        if(numeroDocumento === undefined){
            numeroDocumento = '';
        }

        if(nombreCliente === undefined){
            nombreCliente = '';
        }

        try{
            response = await fetch(`http://localhost:5000/api/ventas?id=${idVenta}&numero_documento=${numeroDocumento}&nombre=${nombreCliente}`);
        }catch(e){
            console.log(e);
        }
        return response;
    }

    const consultarVentas = async () => {
        console.log('Ingreso');
        let response = await consultarVentabyIdAndDocument(filtro.idVenta, filtro.numeroDocumento, filtro.nombreCliente);
        if (response == null || !response.ok || response.length == 0) {
            response = await consultarTodasVentas();
            if (!response.ok) {
                console.log('Se presento un error al consultar las ventas');
            } else {
                response = await response.json();
                setVentas(response);
            }
        } else {
            response = await response.json();
            setVentas(response);
        }
    }

    const changeField = (e) => {
        setFiltro({
            ...filtro,
            [e.target.name]: e.target.value
        })
        console.log(filtro);
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Id Venta</Form.Label>
                    <Form.Control name="idVenta" type="text" defaultValue={filtro.idVenta} onChange={changeField} placeholder="Identificador de la venta" />
                    <Form.Text className="text-muted">
                        Ingrese el identificador de la venta
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Documento cliente</Form.Label>
                    <Form.Control name="numeroDocumento" type="text" defaultValue={filtro.numeroDocumento} onChange={changeField} placeholder="Documento cliente" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre cliente</Form.Label>
                    <Form.Control name="nombreCliente" type="text" defaultValue={filtro.nombreCliente} onChange={changeField} placeholder="Nombre cliente" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={consultarVentas}>
                    consultar Ventas
                </Button>
            </Form>
        </div>
    )
}

export default FiltroVenta
