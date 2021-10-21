import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './usuarioCrear.css'

const UsuarioEditar = ({ usuarios, setShowModalEditar, show, editUserFunction }) => {


    const [editUser, setEditUser] = useState({ login: '', password: '', id_rol: '' })
    const editarUsuario = async () => {
        let body = { ...editUser }
        let keys = Object.keys(body)
        keys.forEach(key => {
            if (body[key] === "") {
                delete body[key]
            }
        });
        await fetch(process.env.REACT_APP_BACKEND_PATH + '/usuarios/' + usuarios.id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        let editUserAux = Object.assign(usuarios, body)
        editUserFunction(editUserAux)
        setShowModalEditar(false)
    }

    function handleInputChange(event) {
        setEditUser({ ...editUser, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className="form">
                        <input name="login" type="text" placeholder="nickname" onChange={handleInputChange} />
                        <input name="password" type="password" placeholder="password" onChange={handleInputChange} />
                        <label htmlFor="rol">Rol del usuario</label>
                        <select name="id_rol" onChange={handleInputChange} placeholder="Rol del usuario" required>
                            <option selected></option>
                            <option value="1">Administrador</option>
                            <option value="2">Vendedor</option>
                        </select>
                    </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setShowModalEditar(false)}>
                        Close
                    </Button>
                    <Button variant="outline-primary" onClick={editarUsuario}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default UsuarioEditar