import React from 'react'



const Ferreteria = ({ articulos}) => {

    
    return (
        <>
            {
                
            }
            <tr>
                <th scope="row">{articulos.id}</th>
                <td>{articulos.nombre}</td>
                <td>{articulos.descripcion}</td>
                <td>{articulos.valor_unitario}</td>
                <td>{articulos.estado}</td>
                <td>{articulos.usuario}</td>
                {/*<td onClick={()=>comprar(articulos)} className="btn btn-outline-dark w-100  btn-sm align-top">Comprar</td>*/}
            </tr>



        </>
    );
}

export default Ferreteria

