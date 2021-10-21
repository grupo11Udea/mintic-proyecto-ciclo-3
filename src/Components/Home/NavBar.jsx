import React from 'react';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navbar = ({ show }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow: '2px 0px 12px 1px rgba(0,0,0, 0.07)'}}>
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
                    <NavDropdown title="Ventas" id="nav-dropdown">
                        <Link className="nav-link" to="/Venta">VentaBD</Link>
                        <Link className="nav-link" to="/ActualizarVenta">Actualizar Venta</Link>
                    </NavDropdown>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Usuarios">Usuarios</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
