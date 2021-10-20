import React,{useEffect,useState} from 'react'
import DetalleVenta from './DetalleVenta';
import FiltroVenta from './FiltroVenta';
import Navbar from "./NavBar";

function ActualizacionVenta() {

    const[filtro,setFiltro] = useState({});
    const[ventas,setVentas] = useState({});
    
    
    const consultarTodasVentas = async () =>{
        let respuesta = null;
        try{
            respuesta = await fetch(`http://localhost:5000/api/ventas`);
        }catch(e){
            console.log(e);
        }
        return respuesta;
    }

    return (
        <div>
            <Navbar />
            <FiltroVenta filtro={filtro} setFiltro={setFiltro} setVentas={setVentas} consultarTodasVentas={consultarTodasVentas}/>
            <DetalleVenta filtro={filtro} setFiltro={setFiltro} ventas={ventas} setVentas={setVentas} consultarTodasVentas={consultarTodasVentas}/>
        </div>
    )
}

export default ActualizacionVenta
