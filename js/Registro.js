function usrID() { return parseInt(Math.random() * 100000) }


function registro() {
    const usrid = usrID()
    const usrName = document.querySelector(".usrNombre").value
    const usrApellido = document.querySelector(".usrApellido").value
    const usrEdad = document.querySelector(".usrEdad").value
    const usrTelefono = document.querySelector(".usrTelefono").value
    const usrCorreo = document.querySelector(".usrCorreo").value
    const usrPass = document.querySelector(".usrPass").value
    debugger
    usuarios.push(new RegistroUsuario(usrid, usrName, usrApellido, usrEdad, usrTelefono, usrCorreo, usrPass))
    console.table(usuarios)
    const usrJson = JSON.stringify(usuarios)
    console.log(usrJson)
    
//------ PUSH A MOCKAPI ------//
    /*fetch(`https://6328ae49d2c97d8c525b7588.mockapi.io/users`, {
        method:`POST`,
        body: usrJson,
        headers:{
            'Content-Type': 'application/json'
          }
    })*/

document.querySelector(".usrNombre").value = ""
document.querySelector(".usrApellido").value = ""
document.querySelector(".usrEdad").value = ""
document.querySelector(".usrTelefono").value = ""
document.querySelector(".usrCorreo").value = ""
document.querySelector(".usrPass").value = ""
}
btnUsrReg.addEventListener("click", registro)

function iniciarSesion() {
    let usuario = document.querySelector(".correoLogIn").value
    let contrasena = document.querySelector(".passLogIn").value
    //debugger
    const pase1 = usuarios.filter((RegistroUsuario) => RegistroUsuario.correo == usuario)
    const pase2 = pase1.some((pase1) => pase1.pass == contrasena)

    if (pase2) {
        location.href = "Index.html"
        //window.location.assign("Index.html")
        alert("Bienvenido")
    }else {
        alert("No encontramos sus datos, lo invitamos a registrarse")
}
}
        

btnLogUsuario.addEventListener("click", iniciarSesion)