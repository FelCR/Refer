//------------------------------ INICIO DE SESIÓN -----------------------------------------


function registrarse() {
    //debugger
    const nombre = prompt("Ingrese su nombre:")
    let edad = prompt("indique su edad:")
       while(edad < 18 ) {
            alert("Debes ser mayor de 18 años")
            edad = prompt("indique su edad:")
        }
    const telefono = prompt("Ingrese su numero telefónico:")
    const correo = prompt("Ingrese su correo:")
    const pass = prompt("Establezca una contraseña")
    const registro = new RegistroUsuario (nombre, edad, telefono, correo, pass)
    console.log ("Sus datos son:")
    console.table (registro)

    usuarios.push(registro)
}

function listaUsuarios() {
    for (let i = 0; i < usuarios.length; i++) {
        console.table(usuarios[i])
    }
}



/*function iniciarSesion2() {
    let usuario = document.getElementById("logMail")
    let contrasena = document.getElementById("logPass")
    let boton = document.getElementById("btnLogIn")
    boton.onclick = () =>{
    debugger
    const pase1 = usuarios.filter((RegistroUsuario) => RegistroUsuario.correo == usuario)
    const pase2 = pase1.some((pase1) => pase1.pass == contrasena)

    if (pase2) {
        alert("Bienvenido")

    } else {
        alert("No encontramos sus datos, lo invitamos a registrarse")
    }
}
}*/

/*function abrirTienda() {
    
    const nombre = prompt("Nombre de la tienda:")
    const giro = prompt("indique el giro")
    const descripcion = prompt("Agregue una descripción:")
    const telefono = prompt("Ingrese su numero telefónico:")
    const correo = prompt("Ingrese su correo:")
    const registro = new RegistroTienda (nombre, giro, descripcion, telefono, correo)
    console.log ("Sus datos son:")
    console.table (registro)

    tiendas.push(registro)
}*/