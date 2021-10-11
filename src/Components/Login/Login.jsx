import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './login.css'

const ContenedorLoging = () => {

    const history = useHistory();

    //States
    const [usuario, setUsuario] = useState({
        usuario: '',
        password: ''


    });

    //datos login
    const [dbUsuarios] = useState([
        { usuario: 'Admin', password: '123456' },
        { usuario: 'PRVENTADIG', password: '123456' }
    ]
    )

    //error
    const [error, setError] = useState('')
    //funcion

    const usuChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const sendForm = () => {
        dbUsuarios.forEach(function (elem) {

            if (elem.usuario === usuario.usuario && elem.password === usuario.password) {
                console.log('Puede ingresar')

                history.push('/Home')

            }

        })
        setError('Usuario o contraseña incorrecto')
    }

    return (

        <div className="contenedor">
            <div className="row">
                <div className="d-flex justify-content-center aling-item-center">


                    <form name="form1" className="bg-form-container col-md-5 col-sm-11 p-4 " >
                        <div className="row mb-3 justify-content-center">
                            <div className="col-12 text-center">
                                <label htmlFor="inputUsuario" className="col-form-label fs-3 fw-bolder text-success ">Inicio de sesión</label>
                            </div>
                            <div className="col-auto" >
                                <label htmlFor="inputUsuario" className="col-sm-5 col-form-label">Usuario &nbsp;&nbsp;&nbsp;&nbsp;</label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text" className="col-sm form-control"
                                    id="Usuario"
                                    name="usuario"
                                    value={usuario.usuario}
                                    onChange={usuChange} />
                            </div>
                            <div className="row mb-2 justify-content-center">
                                <div className="col-auto">
                                    <label htmlFor="inputPassword" className="col-sm-8 col-form-label">Contraseña</label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="password"
                                        className="d-flex form-control small"
                                        id="Password"
                                        name="password"
                                        value={usuario.password}
                                        onChange={usuChange} />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#!" className="p-2">Recordar contraseña</a>
                                </div>

                                <div className="boton d-flex justify-content-center">
                                    <button onClick={sendForm} type="button" className="btn btn-secondary col-md-4 justify-content-center ">Ingresar</button>
                                </div>
                                {
                                    error !== '' &&
                                    <div className="alert alert-danger " role="alert" >
                                        {error}
                                    </div>
                                }

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default ContenedorLoging
