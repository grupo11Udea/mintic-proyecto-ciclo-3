import React, {useState} from 'react'
import AdminUsuarios from './AdminUsuarios/AdminUsuarios';

const Usuarios = ()=>{

    const [usuarios] = useState([
        {idUsuario:'123456', usuario: 'Admin', descripcion:'Usuario administrador',rol:'AMD',password:'123456'},
        {idUsuario:'123454', usuario: 'PRVENTADIG', descripcion:'Usuario solo ventas', rol:'VENT', password:'123456'}
        ]
    )
    
    

    //funciones
    

    return(
        <>

         <div className="p-4">
            <table className="table table-secondary">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Usuario</th>
            <th scope="col">Descripción</th>
            <th scope="col">Rol</th>
            <th scope="col">password</th>
            </tr>
        </thead>
        <tbody>
        {
             usuarios.map((usuarios)=>{
                 return(
                    <AdminUsuarios
                     
                        usuarios={usuarios}
                        
                    />
                 )
             })
         }
         
            
        </tbody>
       </table>
       <div className="row d-flex justify-content-center">
       <button className="col-2 m-5 btn btn-outline-success" type="submit">Crear</button>
       <button className="col-2  m-5 btn btn-outline-primary" type="submit">Actualizar</button>
       <button className="col-2 m-5 btn btn-outline-danger" type="submit">Borrar</button>

       </div>
</div>
   
        

       


        


        </>
    );
}

export default Usuarios