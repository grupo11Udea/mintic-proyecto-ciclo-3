import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ActualizarProducto = ({actualizar, setActualizar}) => {
    console.log('info actualizar producto', actualizar.id)
  
 
  
  const changeField = (e)=>{
    setActualizar({
        ...actualizar,
        [e.target.name]: e.target.value
    })
  }

  const update = (e)=>{

    console.log('Actualizar id prueba', actualizar)
  
    fetch(`${process.env.REACT_APP_BACKEND_PATH}/productos/${actualizar.id}`,{
        method: 'PUT',
        body: JSON.stringify(actualizar),

           
        headers:{
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
              .then((data) => {
                console.log("response", data);
              
              })
              .catch((error) => {
                console.log("error");
              });

             window.location.reload(false);  
    }
           


  
   
  return (
    <>

     {/* <div className="row d-flex justify-content-center m-3">
        <button className="col-2 m-5 btn btn-outline-success" type="submit">
          Crear
        </button>
        <button className="col-2  m-5 btn btn-outline-primary" type="submit">
          Actualizar
        </button>
        <button className="col-2 m-5 btn btn-outline-danger" type="submit">
          Borrar
        </button>
  </div>*/}
      <Form className="d-flex row justify-content-end p-3 ">
        <Row>
          <Col>
            <Form.Control className="mb-3" onChange={changeField} value={actualizar.nombre} name="nombre" type="text" placeholder="Nombre Producto " />
          </Col>
          <Col>
          <Form.Control className="mb-3" onChange={changeField} value={actualizar.descripcion} name="descripcion" type="text" placeholder="Descripcion del Producto " />
          </Col>
          <Col>
          <Form.Control className="mb-3" onChange={changeField} value={actualizar.valor_unitario} name="valor_unitario" type="number" placeholder="valor_unitario " />
          </Col>
          <Col>
          <Form.Control className="mb-3" onChange={changeField} value={actualizar.estado} name="estado" type="text" placeholder="Estado " />
          </Col>
          <Col>
          <Form.Control className="mb-3" onChange={changeField} value={actualizar.usuario} name="usuario" type="number" placeholder="Usuario" />
          </Col>
          <Col>
          <Button type="button" onClick={update} variant="outline-primary" >
          Actualizar
          </Button>
          </Col>
        </Row>
</Form>
    </>
  );
};

export default ActualizarProducto;
