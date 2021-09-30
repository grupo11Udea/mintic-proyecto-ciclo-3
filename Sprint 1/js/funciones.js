function validarForma(forma){
    var usuario = forma.usuario;
    var password = forma.password;
    if(usuario.value === ""){
        alert("Usuario y/o contraseña no deben estar vacios");
        usuario.focus;
        usuario.select
        return false;
    }

    if(password.value === ""){
        alert("Usuario y/o contraseña no deben estar vacios");
        usuario.focus;
        usuario.select
        return false;
    }

}