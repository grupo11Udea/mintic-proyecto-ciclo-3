import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Buscar = ({ keyword, setKeyword, keyword2, setKeyword2 }) => {
  const changueInput = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };
  const changueInput2 = (e) => {
    console.log(e.target.value);
    setKeyword2(e.target.value);
  };

  return (
    <div id="bodyProducto" className="container-fluid row">
      <div className="row justify-content-end p-3 m-1">
        <Form className="col-6">
          <Row>
            <Col>
              <Form.Control
                value={keyword}
                onChange={changueInput}
                type="text"
                placeholder="Buscar por nombre"
              />
              <Form.Text className="text-muted d-flex">
                Se buscara elproducto por nombre.
              </Form.Text>
            </Col>
            <Col>
              <Form.Control
                value={keyword2}
                onChange={changueInput2}
                type="text"
                placeholder="Buscar por id del producto"
              />
              <Form.Text className="text-muted d-flex">
                Se buscara el producto por id.
              </Form.Text>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Buscar;
