import React from 'react'




const Ferreteria = ({ articulos, checkValues, setCheckValues}) => {
    

    
    const removeSelect = (e)=>{
        setCheckValues(e)
        console.log('checkValues', e)
    }
    
    return (
        <>
            <tr>
                <th >{articulos.id}</th>
                <td>{articulos.nombre}</td>
                <td>{articulos.descripcion}</td>
                <td>{articulos.valor_unitario}</td>
                <td>{articulos.estado}</td>
                <td>{articulos.usuario}</td>
                
                <td><input onClick={()=>{removeSelect(articulos)}} name="id" className="form-check-input-secondary" type="radio"/>
                </td>
            </tr>
        </>
    );
}

export default Ferreteria

