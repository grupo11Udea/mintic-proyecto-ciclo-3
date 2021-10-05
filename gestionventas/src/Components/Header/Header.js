import React from 'react';
import './Encabezado.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo1 from './Logo1.jpg';
import Logo2 from './logo2.jpg';


const Header = ({ show }) => {

    return (
        <header>
            <div className="Contenedor" name="Header">
                <div className="row header-title justify-content-between no-gutters" >

                    <img className="col-2 .no-gutters" src={Logo1} alt="imagen de logo" />
                    <h1 className="col-8 text-center align-self-center text-white">Developer FESD: Gestion de ventas</h1>
                    <img className="col-2 .no-gutters" src={Logo2} alt="imagen de logo" />

                </div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/Home">Inicio</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Producto">Producto</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Venta">Ventas</a>
                            </li>
                            <Dropdown>
                                <Dropdown.Toggle as="a" id="dropdown-basic" className="nav-link header-dropdown">
                                    Usuarios
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/">Usuarios</Dropdown.Item>
                                    <Dropdown.Item href="#/">Clientes</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header
