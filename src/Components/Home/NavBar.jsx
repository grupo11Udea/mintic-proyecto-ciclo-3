import React from 'react';
import { Link } from "react-router-dom";
/* import Dropdown from 'react-bootstrap/Dropdown'; */

const Navbar = ({ show }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Home">Inicio</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Producto">Producto</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Venta">Ventas</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Usuarios">Usuarios</Link>
                    </li>
                    {/* <Dropdown>
                        <Dropdown.Toggle as="a" id="dropdown-basic" className="nav-link header-dropdown">
                            Usuarios
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Usuarios">Usuarios</Dropdown.Item>
                            <Dropdown.Item href="#/">Clientes</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
