import React, {useState} from 'react'
import Ferreteria from './Ferreteria/Ferreteria';


const Producto = ()=>{

    const [productos] = useState([
        {id:1,nombre:'Martillo',descripcion:'Marca stanley', precio:1500 },
        {id:2,nombre:'Sierra',descripcion:'Sierra para cortar hierro',precio:4500 },
        {id:3,nombre:'Tornillo 1/2"',descripcion:'Tipo estrella', precio:500 },
        {id:4,nombre:'Luz led',descripcion:'Luz para baño', precio:3500 },
        {id:5,nombre:'Lija',descripcion:'Lija de agua especial para pintura', precio:800 },
    
    ])
    
    const [compras,setCompras]= useState([])

    //funciones
    const comprar =(productos)=>{
        setCompras([...compras,productos])
    }

    return(
        <>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#!">Inicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a onClick={()=>comprar} class="nav-link active" aria-current="page" href="#!">Agregar producto</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#!">Eliminar Producto</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#!">Actualizar Producto</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#!" tabindex="-1" aria-disabled="true">Buscar producto</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="/Venta" tabindex="-1" aria-current="page">Registrar Venta</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>

         <div className="p-4">
            <table className="table table-secondary">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Comprar</th>
            </tr>
        </thead>
        <tbody>
        {
             productos.map((productos)=>{
                 return(
                    <Ferreteria
                     
                        articulos={productos}
                        comprar={comprar}
                    />
                 )
             })
         }
         {
             compras.map((elemento)=>{
                 return(
                    <h2>{elemento.nombre}</h2>
                 )
                 
             })
         }  
            
        </tbody>
       </table>
</div>
   
        

       


        


        </>
    );
}

export default Producto


