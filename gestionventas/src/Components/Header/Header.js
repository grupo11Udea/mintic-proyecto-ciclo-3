import React from 'react'
import './Encabezado.css'
import Logo1 from './Logo1.jpg'
import Logo2 from './logo2.jpg'


const Header = () => {
    return (
        
            <header>
            <div className="Contenedor" name="Header">
                <div className="row">
                   
                   <img className="col-2" src={Logo1} alt="imagen de logo"/>
                    <h1 className="col text-center align-self-center text-white">Developer FESD: Gestion de ventas</h1>
                    <img className="col-2" src={Logo2} alt="imagen de logo"/>
                    
                </div>
            </div>
            </header>
        
        
    )
}
export default Header
