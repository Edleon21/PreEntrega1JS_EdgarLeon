/* PrimerEntrega Clase JS funcion + if para mi login de mi trabajo final de curso de desarrollo web */



let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let boton = document.getElementById("enviar");
let cerrar_modal = document.getElementById("modal-btn");

boton.onclick = prueba
cerrar_modal.onclick = prueba2

function prueba(){
    let usuario1 = usuario.value
    let password1 = password.value 

    if(usuario1 == "usuario" && password1 == "1234"){
        document.getElementById("modal").style.display="block"
    } else if (usuario1 == "" || password1 == ""){
        alert ("Debes llenar todos los campos")
    } else {
        alert('Usuario o contraseña incorrectos')
    }
}

function prueba2(){
    document.getElementById("modal").style.display= "none"
    location.href = "../index.html"
}
