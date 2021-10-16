import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CrearProductos = () => {
    
 
  const [formValues, setFormValues] = useState({})

  const changeField = (e)=>{
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
  }

  const submit = (e)=>{
    e.preventDefault();
    console.log('formValues', formValues)
  
      fetch("http://localhost:5000/api/productos",{
        method: 'POST',
        body: JSON.stringify(formValues),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
              .then((data) => {
                console.log("response", data);
                setFormValues(data);
              })
              .catch((error) => {
                console.log("error");
              });
    
              window.location.reload(false); 


  }
   
  return (
    <>
    
      <Form className="d-flex row justify-content-end p-3 ">
        <Row>
          <Col>
            <Form.Control className="mb-3" onChange={changeField} value={formValues.nombre} name="nombre" type="text" placeholder="Nombre Producto " />
          </Col>
          <Col>
          <Form.Control className="mb-3" onChange={changeField} value={formValues.descripcion} name="descripcion" type="text" placeholder="Descripcion del Producto " />
          </Col>
          <Col>
          <Form.Control className="mb-3" onChange={changeField} value={formValues.valor_unitario} name="valor_unitario" type="number" placeholder="valor_unitario " />
          </Col>
          <Col>
          <Form.Control className="mb-3" onChange={changeField} value={formValues.estado} name="estado" type="text" placeholder="Estado " />
          </Col>
          <Col>
          <Form.Control className="mb-3" onChange={changeField} value={formValues.usuario} name="usuario" type="number" placeholder="Usuario" />
          </Col>
          <Col>
          <Button type="submit" onClick={submit} variant="outline-success">
          Crear
          </Button>
          </Col>
        </Row>
</Form>
    </>
  );
};

export default CrearProductos;
