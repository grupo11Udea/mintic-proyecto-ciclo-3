import React from 'react'

const UsuarioCard = ({ usuarios }) => {

    return (
        <>
            
            <tr>
                <th scope="row">{usuarios.idUsuario}</th>
                <td>{usuarios.usuario}</td>
                <td>{usuarios.descripcion}</td>
                <td>{usuarios.rol}</td>
                <td>{usuarios.password}</td>
            </tr>

        </>
    );
}

export default UsuarioCard