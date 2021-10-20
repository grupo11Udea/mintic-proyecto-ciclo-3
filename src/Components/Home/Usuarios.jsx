import React, { useState, useEffect } from 'react'
import UsuarioCard from './UsuarioCard';
import Navbar from './NavBar';
import UsuarioCrear from './UsuarioCrear'


/* const defaultUsuarios =
[
    { id: '123456', login: 'Admin', rol: '4', password: '123456' },
    { id: '123454', login: 'PRVENTADIG', rol: '4', password: '123456' }
] */
const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const [showModal, setShowModal] = useState(false)
    const getUsers = () => {
        fetch(process.env.REACT_APP_BACKEND_PATH + '/usuarios').then(data => data.json()).then(response => setUsuarios(response))
    }
    useEffect(() =>
        getUsers(), []
    )

    const addUser = newUser => {
        const usuariosAux = [...usuarios]
        usuariosAux.push(newUser)
        setUsuarios(usuariosAux)
    }

    const editUser = user => {
        const usuariosAux = [...usuarios]
        const userIndex = usuariosAux.findIndex(el => el.id == user.id)
        usuariosAux.splice(userIndex, 1, user)
        setUsuarios(usuariosAux)
    }

    const deleteUser = userId => {
        const usuariosAux = [...usuarios]
        const userIndex = usuariosAux.findIndex(el => el.id == userId)
        usuariosAux.splice(userIndex, 1)
        setUsuarios(usuariosAux)
    }

    return (
        <>
            <Navbar />
            <UsuarioCrear addUser={newUser => addUser(newUser)} show={showModal} setShowModal={value => setShowModal(value)} />
            <div className="p-4">
                <table className="table table-light" style={{boxShadow: '3px 3px 54px 12px rgba(0,0,0, 0.07)'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario) => {
                                return (
                                    <UsuarioCard
                                        editUser={user => editUser(user)}
                                        deleteFunction={userId => deleteUser(userId)}
                                        usuarios={usuario}
                                        key={usuario.id}

                                    />
                                )
                            })
                        }


                    </tbody>
                </table>
                <div className="row d-flex justify-content-center">
                    <button className="col-2 m-5 btn btn-outline-success" type="submit" onClick={() => setShowModal(true)}>Crear</button>
                </div>
            </div>
        </>
    );
}

export default Usuarios