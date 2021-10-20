import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './usuarioCrear.css'

const UsuarioCrear = ({ show, setShowModal, addUser }) => {


    const [newUser, setNewUser] = useState({ login: '', password: '', id_rol: '' })
    const crearUsuario = async () => {
        let body = { ...newUser }
        console.log(body);
        body.id_estado = 1
        //body.vendedor = "80859699"

        const response = await fetch(process.env.REACT_APP_BACKEND_PATH + '/usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const createdUser = await response.json().then(data => data)
        console.log(createdUser);
        addUser(createdUser)
        setShowModal(false)
    }

    function handleInputChange(event) {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>Crear usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form">
                        <label htmlFor="login">Nombre de usuario</label>
                        <input name="login" type="text" placeholder="Nombre de usuario" onChange={handleInputChange} required />
                        <label htmlFor="password">Contraseña</label>
                        <input name="password" type="password" placeholder="Contraseña" onChange={handleInputChange} required/>
                        <label htmlFor="rol">Rol del usuario</label>
                        <select name="id_rol" onChange={handleInputChange} placeholder="Rol del usuario" required>
                            <option selected></option>
                            <option value="1">Administrador</option>
                            <option value="2">Vendedor</option>
                        </select>
                    </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={crearUsuario}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default UsuarioCrear