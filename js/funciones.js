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

function iniciarSesion() {
    let usuario = prompt("Ingrese su correo")
    let contrasena = prompt("Ingrese su contraseña")
    //debugger
    const pase1 = usuarios.filter((RegistroUsuario) => RegistroUsuario.correo == usuario)
    const pase2 = pase1.some((pase1) => pase1.pass == contrasena)

    if (pase2) {
        alert("Bienvenido")
    } else {
        alert("No encontramos sus datos, lo invitamos a registrarse")
    }
}



//---------------------- INICIA TIENDA EN LÍNEA ------------------------

function creoID() { return parseInt(Math.random() * 100000) }

function agregarProductos() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del Producto:")
    let precio = parseInt(prompt("Ingresa el importe:"))
        productos.push(new Producto(id, descripcion, precio))
        console.table(productos)
}

function agregarAlCarrito() {
    let productoCarrito = prompt("¿Que producto le interesa?")
    const art = productos.find((productos)=> Producto.nombre == productoCarrito)

    if((art)) {
        productosCarrito.push(new Producto())
        cargadeProductos()
        console.table(productosCarrito)
    }
}

function generadorAutomatico() {
    productos.push(new Producto(1234, "Lapiz negro", 10))
    productos.push(new Producto(2345, "Lapiz azul", 10))
    productos.push(new Producto(3456, "Lapiz rojo", 10))
}

//generadorAutomatico()

function buscarProductos() {
    let prod = prompt("¿Qué artículo esta buscando?")
    const resultado = productos.filter(producto => producto.nombre.includes(prod))
    if (resultado) {
    console.table(resultado)
    let respuesta = prompt("¿Desea agregar algún artículo al carrito?")
     while ((respuesta=="Si") || (respuesta=="si")) {
        const addCarrito2 = prompt("Escriba el nombre del articulo que desea agregar")
        /*let resultado1 = productos.some(producto => producto.id=addCarrito2)
        if (resultado1) {*/
        const resultado2 = productos.find(producto => producto.nombre.includes(addCarrito2))
        carrito.push(resultado2)
            alert("Articulo agregado exitosamente") 
            console.table (carrito)
            respuesta = prompt("¿Desea agregar algún artículo al carrito?")
            calcularCarrito()
            /*} else { alert("Error al ingresar el producto")}*/
        }
     } else {
        alert("Lo sentimos, por el momento no contamos con ese artículo")
     } 
}

function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    console.log("Total a pagar: $", total)
}



// --------------------DOM---------------------------

function crearLista() {
    const listado = document.getElementById("listado")
    productos.forEach(producto => {
        const li = document.createElement("li")
                li.innerText = producto
                listado.append(li)

    })
}
//crearLista()

function cargadeProductos() {
    const cuerpo = document.getElementById("cuerpoCarrito")
    productos.forEach(producto => {
        cuerpo.innerHTML += `<tr>
                                <td>${producto.id}</td>
                                <td>${producto.nombre}</td>
                                <td>${producto.precio}</td>
                            </tr>`
    })
}

function cargadeProductosTienda() {
    const cuerpo = document.getElementById("cuerpo")
    productos.forEach(producto => {
        cuerpo.innerHTML += `<tr>
                                <td>${producto.id}</td>
                                <td>${producto.nombre}</td>
                                <td>${producto.precio}</td>
                            </tr>`
    })
}

//cargadeProductosTienda()