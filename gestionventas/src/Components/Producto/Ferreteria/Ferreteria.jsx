import React from 'react'



const Ferreteria = ({articulos,comprar})=>{

    return(
       <>
         {/*   <div class="card" style={{width: '18rem'}}>
            
            <div class="card-body">
                <h5 class="card-title">{articulos.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" class="btn btn-primary">Go somewhere</a>
            </div>
</div>*/}
            <tr>
            <th scope="row">{articulos.id}</th>
            <td>{articulos.nombre}</td>
            <td>{articulos.descripcion}</td>
            <td>{articulos.precio}</td>
            <td onClick={()=>comprar(articulos)} className="btn btn-outline-dark w-100  btn-sm align-top">Comprar</td>
            </tr>

            

        </>
    );
}

export default Ferreteria

