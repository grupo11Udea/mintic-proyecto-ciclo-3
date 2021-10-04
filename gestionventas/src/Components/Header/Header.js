import React from 'react'
import './Encabezado.css'
import Logo1 from './Logo1.jpg'
import Logo2 from './logo2.jpg'


const Header = ({show}) => {
        
    return (
        
        
            <header>
            <div className="Contenedor" name="Header">
                <div className="row">
                   
                   <img className="col-2" src={Logo1} alt="imagen de logo"/>
                    <h1 className="col text-center align-self-center text-white">Developer FESD: Gestion de ventas</h1>
                    <img className="col-2" src={Logo2} alt="imagen de logo"/>
                    
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
                            <li className="nav-item dropdown">
                             <a className="nav-link dropdown-toggle" href="/Usuarios" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Usuarios
                            </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                     <li><a className="dropdown-item" href="#!">Usuarios</a></li>
                                    <li><a className="dropdown-item" href="#!">Clientes</a></li>
                                    
                                </ul>
                                </li>

                            
                        </ul>
                    </div>
                </nav>

                

                

                
            </div>
            </header>
        
        
    )
}
export default Header
