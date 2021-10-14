import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Buscar = ({keyword, setKeyword, keyword2, setKeyword2}) => {
    

  const changueInput = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };
  const changueInput2 = (e) => {
    console.log(e.target.value);
    setKeyword2(e.target.value);
  };
  return (
    <div id="bodyProducto" className="container-fluid">
      <div className="row justify-content-end p-3 m-1">
        <Form className="col-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control value={keyword}
              onChange={changueInput}
              type="text"
              placeholder="Buscar"
            />
            <Form.Text className="text-muted d-flex">
              Se buscara elproducto por nombre.
            </Form.Text>
            <Form.Control value={keyword2}
              onChange={changueInput2}
              type="text"
              placeholder="Buscar"
            />
            <Form.Text className="text-muted d-flex">
              Se buscara el producto por id.
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Buscar;
