import React from 'react';
import './header.css';


const Header = ({ show }) => {

    return (
        <header className="header">
            <div className="Contenedor" name="Header">
                <div className="row header-title justify-content-between no-gutters" >

                    <h1 className="text-center align-self-center text-white">Developer FESD: Gestion de ventas</h1>

                </div>
            </div>
        </header>
    )
}
export default Header
