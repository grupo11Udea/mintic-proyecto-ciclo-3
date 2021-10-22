import React from "react";


const BorrarProducto = (borraId) => {
  
    
  const submit = ()=>{
    
    console.log('Borrar id prueba', borraId.borraId.id)
    
   fetch(`${process.env.REACT_APP_BACKEND_PATH}/productos/${borraId.borraId.id}`,{
        method: 'DELETE',
        
        headers:{
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
              .then((data) => {
                console.log("response", data);
                window.location.reload(false);  
              })
              .catch((error) => {
                console.log("error");
              });

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