

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




function abrirTienda() {
    //debugger
    const nombre = prompt("Nombre de la tienda:")
    const giro = prompt("indique el giro")
    const descripcion = prompt("Agregue una descripción:")
    const telefono = prompt("Ingrese su numero telefónico:")
    const correo = prompt("Ingrese su correo:")
    const registro = new RegistroTienda (nombre, giro, descripcion, telefono, correo)
    console.log ("Sus datos son:")
    console.table (registro)

    tiendas.push(registro)
}



//---------------------- INICIA TIENDA EN LÍNEA ------------------------

function creoID() { return parseInt(Math.random() * 100000) }


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


// CARGA DE PRODUCTOS SEGUN CATEGORÍA

function crearCards() {
    listaTienda.forEach(Producto => {
        listadoProductos.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
                                        <button type="button" class="btn btn-danger btnEliminar" data-id="${Producto.id}">Eliminar</button>
                                    </div>
                                    </div>
                                </div>`
    });
    funcionalidad();
    const btnEliminar = document.querySelectorAll(".btnEliminar")
    btnEliminar.forEach(boton=>{
    boton.addEventListener("click",eliminarProd)
})

}

crearCards()


function addDesdeCampos () {
        console.log(camposAddProducto.value)

        console.log(camposAddProducto1.value)

        console.log(camposAddProducto2.value)

        console.log(camposAddProducto3.value)

        console.log(camposAddProducto4.value)

}
btnprodAdd.addEventListener(("click"), agregarProducto)



function eliminarProd(e) {
    const idProducto =  e.target.getAttribute("data-id")
    console.log(idProducto)
    const indexProducto= listaTienda.findIndex(indexArray => indexArray.id == idProducto)
    console.log(indexProducto)
    listaTienda.splice(indexProducto,1)
    const listadoProductos = document.getElementById("listadoProductos")
    listadoProductos.innerHTML=""

    listaTienda.forEach(Producto => {
        listadoProductos.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
                                        <button type="button" class="btn btn-danger btnEliminar" data-id="${Producto.id}">Eliminar</button>
                                    </div>
                                    </div>
                                </div>`
}) 
    const btnEliminar = document.querySelectorAll(".btnEliminar")
    btnEliminar.forEach(boton=>{
        boton.addEventListener("click",eliminarProd)
    funcionalidad()
    
})
Swal.fire('Producto eliminado')
}



function agregarProducto() {
    let id = creoID()
    let prodName = document.querySelector("input.form-control.nombreProd").value
    let prodDesc = document.querySelector("input.form-control.descProd").value
    let precio = document.querySelector("input.form-control.precioProd").value
    let prodCat = document.querySelector("select.form-select.form-select-sm.selectCat").value
    let prodStock = document.querySelector("input.form-control.stockProd").value
    const listadoProductos = document.getElementById("listadoProductos")
    listadoProductos.innerHTML=""
    //debugger

    
        switch(prodCat) {
            case "Tecnologia":
            tech.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(tech)
            //cargadeProductosTiendaTech()
            
            //eliminarProd()
            
            break
            case "Moda":
            moda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(moda)
            //cargadeProductosTiendaModa()
           
            //eliminarProd()
            
            break
            case "Belleza":
            belleza.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(belleza)
            
            
            break
            case "Servicios":
            servicios.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(servicios)
            
            
            break
            case "Alimentos":
            alimentos.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(alimentos)
            
            
            break
            case "Deportes":
            deportes.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(deportes)

            
            break
            case "Herramientas":
            herramientas.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(herramientas)
            
            
            break
            case "Muebles":
            muebles.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(muebles)
           
            
            break
            case "Juguetes":
            juguetes.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(juguetes)
            
           
            break
            case "Libros":
            libros.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(libros)
            
            
            break
        }
        
        /*localStorage.setItem("listaTienda", JSON.stringify(listaTienda))
        let iniLista = listaTienda.length-4
        let finLista = listaTienda.length+1
        const listaEnTienda = listaTienda.slice(iniLista, finLista)
        listaEnTienda.reverse()
        console.table(listaEnTienda)*/

        //let displayProductos = listaTienda.length-8 

        listaTienda.forEach(Producto => {
            listadoProductos.innerHTML += 
                                 `<div class=tarjetasTienda>
                                 <div class="card" style="width: 18rem;">
                                        <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${Producto.nombre}</h5>
                                            <p class="card-text">${Producto.descripcion}</p>
                                            <p><h7 class="precioTarjeta ">$ ${Producto.precio}</h7></p>
                                            <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
                                            <button type="button" class="btn btn-danger btnEliminar" data-id="${Producto.id}">Eliminar</button>
                                        </div>
                                        </div>
                                    </div>`
}) 
    const btnEliminar = document.querySelectorAll(".btnEliminar")
    btnEliminar.forEach(boton=>{
        boton.addEventListener("click",eliminarProd)
})
    Swal.fire('Producto agregado con éxito')
    funcionalidad();  
}


function descTienda() {
    let descpripcion = document.querySelector("textarea#exampleFormControlTextarea1.form-control.descContentTienda").value
    const descripTienda = document.getElementById("descTienda")
    descripTienda.innerHTML =
                    `<p class=descripcion>${descpripcion}</p>`
}

btndescTienda.addEventListener(("click"), descTienda)


function publicar() {
    let id = creoID()
    let pubImg = document.querySelector("input#formFileSm.form-control.form-control-sm").value
    let pubText = document.querySelector("textarea#exampleFormControlTextarea1.form-control.contPublicacion").value
    const publiTienda = document.getElementById("publiTienda")
    publicaciones.push(new Publicacion(id, pubImg, pubText))
    publiTienda.innerHTML=""
    publicaciones.forEach(Publicacion => {
        publiTienda.innerHTML += 
                             `<div class="card cardPublicacion">
                             <div class="card-body">
                             <div><img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."></div>
                               <p class="card-text">${Publicacion.descripcion}</p>
                             </div>
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                           </div>`
}) 
}

btnPublicar.addEventListener(("click"), publicar)


//-------------------------------Carrito------------------------------------//

function funcionalidad() {
    listaTienda.forEach((Producto)=>{
        document.querySelector(`#btn-agregar${Producto.id}`).addEventListener("click", () =>{
            console.log(Producto)
            agregarCarrito(Producto)
        })
    })
}

function agregarCarrito(Producto){
    let existe = carrito.some((productoSome) => productoSome.id === Producto.id);
    if (existe === false) {
        Producto.cantidad = 1;
        carrito.push(Producto)
    } else {
        let prodFind = carrito.find((productoFind) => productoFind.id === Producto.id);
        prodFind.cantidad++;
    }
    console.log(carrito);
    renderizarCarrito();
    //borrarProducto();
    const btnBorrar = document.querySelectorAll(".btnBorrar")
    btnBorrar.forEach(boton=>{
        boton.addEventListener("click",borrarProd)
    })
}

function renderizarCarrito(){
    carritoCompra.innerHTML=""
    carrito.forEach((Producto) =>{
        carritoCompra.innerHTML +=
                `<tr>
                    <td><img src="Pictures/producto.webp" height="100px" width="0px" class="card-img-top" alt="..."></td>
                    <td>${Producto.nombre}</td>
                    <td>${Producto.descripcion}</td>
                    <td>${Producto.cantidad}</td>     
                    <td>${Producto.precio}</td>
                    <td><button type="button" class="btn btn-danger btnBorrar" id="btn-borrar${Producto.id}" data-id="${Producto.id}">Eliminar</button></td>
                </tr>`
    });
}

function borrarProd(e) {
    const idProd =  e.target.getAttribute("data-id")
    console.log(idProd)
    const indexProd= carrito.findIndex(indexCarrito => indexCarrito.id == idProd)
    console.log(indexProd)
    carrito.splice(indexProd,1)
    //const carritoCompra = document.getElementById("carritoCompra")
    renderizarCarrito();

    const btnBorrar = document.querySelectorAll(".btnBorrar")
    btnBorrar.forEach(boton=>{
        boton.addEventListener("click",borrarProd)
    })
}