import React from "react";


const BorrarProducto = (borraId) => {
  
    
  const submit = ()=>{
    
    console.log('Borrar id prueba', borraId.borraId.id)
    
   fetch(`http://localhost:5000/api/productos/${borraId.borraId.id}`,{
        method: 'DELETE',
        
        headers:{
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
              .then((data) => {
                console.log("response", data);
              
              })
              .catch((error) => {
                console.log("error");
              });

              window.location.reload(false);  
    }
     
 
  return (
    <>
     
     <div className="row justify-content-end"> 
        <button onClick={submit} className="col-1 m-5 btn btn-outline-danger" type="button">
          Borrar
        </button>
  </div>

    </>
  );
};

export default BorrarProducto;