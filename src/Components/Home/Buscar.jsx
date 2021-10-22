import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


const Buscar = ({ keyword, setKeyword, keyword2, setKeyword2, consulProductos,  setConsulProductos}) => {
  let auxKeyword;
  let auxKeyword2;
  const changueInput = (e) => {
    //console.log(e.target.value);
    //setKeyword(e.target.value);
    auxKeyword = e.target.value;
    
  };
  const changueInput2 = (e) => {
    //console.log(e.target.value);
    //setKeyword2(e.target.value);
    auxKeyword2 = e.target.value;
  };
  function sendKeyword(e) {
    e.preventDefault();
    setKeyword(auxKeyword);
    let inputNombre = document.getElementById('input nombre');
    inputNombre.value = ''
    setConsulProductos(true);
  }
  function sendKeyword2(e) {
    e.preventDefault();
    setKeyword2(auxKeyword2);
    let inputProducto = document.getElementById('input producto');
    inputProducto.value = ''
    setConsulProductos(true);
  }

  return (
    <div id="bodyProducto" className="container-fluid row">
      <div className="row justify-content-end p-3 m-1">
        <Form className="col-6">
          <Row>
            <Col>
              <Row >
                <Form.Control
                  id="input nombre"
                  className="col"
                  value={auxKeyword}
                  onChange={changueInput}
                  type="text"
                  placeholder="Buscar por nombre"
                />
                <Button variant="outline-primary" className="col-4 mr-6" onClick={sendKeyword}>Buscar</Button>
                <Form.Text className="text-muted d-flex">
                  Se buscara elproducto por nombre.
                </Form.Text></Row>

            </Col>
            <Col>
              <Row>
                <Form.Control
                  id="input producto"
                  value={auxKeyword2}
                  onChange={changueInput2}
                  className="col"
                  type="text"
                  placeholder="Buscar por id del producto"
                />
                <Button variant="outline-primary" onClick={sendKeyword2} className="col-4" >Buscar</Button>
                <Form.Text className="text-muted d-flex">
                  Se buscara el producto por id.
                </Form.Text>
              </Row>

            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Buscar;
