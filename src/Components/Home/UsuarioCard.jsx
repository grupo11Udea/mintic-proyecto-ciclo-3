import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import UsuarioEditar from './UsuarioEditar'

const UsuarioCard = ({ usuarios, deleteFunction, editUser }) => {
    const [showModalEditar, setShowModalEditar] = useState(false)
    const deleteUser = async (userId) => {
        await fetch(process.env.REACT_APP_BACKEND_PATH + '/usuarios/' + userId, {
            method: 'DELETE',
        });
        deleteFunction(usuarios.id)
    }

    function mostrarRolUsuario(id){
        if (id == 1) {
            return 'Administrador'
        } else if (id == 2 ) {
            return 'Vendedor'
        } else {
            return 'Desconocido'
        }
    }

    return (
        <>
        <UsuarioEditar usuarios={usuarios} setShowModalEditar={setShowModalEditar} show={showModalEditar} editUserFunction={user => editUser(user)}/>
            <tr>
                <th scope="row">{usuarios.id}</th>
                <td>{usuarios.login}</td>
                <td>{mostrarRolUsuario(usuarios.id_rol)}</td>
                <td>
                    <Button variant="outline-primary" onClick={() => setShowModalEditar(true)}>Editar</Button>
                    <span>    </span>
                    <Button variant="outline-danger" onClick={() => deleteUser(usuarios.id)}>Borrar</Button>
                </td>
            </tr>

        </>
    );
}

export default UsuarioCard