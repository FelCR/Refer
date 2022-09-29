//-------------------------------- VARIABLES ------------------------------------//
let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"))
const productoPortadaIndex = document.querySelector("#productoIndex");
const publicacionIndex = document.getElementById("publicacionIndex");
const detalle = document.querySelector("section#detalle");
const volver = document.querySelector("div.emoji-volver");
const navPerfil = document.querySelector(".navPerfil");
const infoPerfil = document.querySelector(".infoPerfil");


let prodIndex = []
let contenidoHTML = ""

//-------------------------------- CONTENIDO INDEX ------------------------------------//

function displayProductos() {
    //debugger
    const productoPortada = document.querySelector("#productoPortada");
    
    let lengthListaTienda = listaTienda.length
    console.log(lengthListaTienda)
    console.log(productoPortada)
    
    if(lengthListaTienda>4){
    let iniLista = listaTienda.length-4
    let finLista = listaTienda.length+1
    let listaEnTienda = listaTienda.slice(iniLista, finLista)
    //console.table(listaEnTienda)
    
    productoPortada.innerHTML=""
    listaEnTienda.forEach(Producto => {
        productoPortada.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="..." onclick="guardarContenidoEnLS('${Producto.id}')">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
                                    </div>
                                    </div>
                                </div>`
})} else{
    //debugger
    console.log(productoPortada)
    productoPortada.innerHTML=""
    listaTienda.forEach(Producto => {
        productoPortada.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="..." onclick="guardarContenidoEnLS('${Producto.id}')">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
                                    </div>
                                    </div>
                                </div>`
})}
funcionalidad()
}

//--------------------------- INFO DE PERFIL ----------------------------//

function retornoInfoPerfil(logUsr) {
    //debugger
    const {usrid, usrName, usrApellido, usrEdad, usrTelefono, usrCorreo, usrPass} = logUsr 
    return `<div class="offcanvas offcanvas-end data-bs-scroll=true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"">${usrName} ${usrApellido}</h5> <img src="Pictures/perfil.png" height="45px" width="45px">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                <div class="botonMenuPerfil">Tiendas</div>
                <div class="botonMenuPerfil">Contactos</div>
                <div class="botonMenuPerfil">Compras</div>
                <div class="botonMenuPerfil" onclick="cerrarSesion()" role="button">Cerrar sesión</div>
                </div>
            </div>`
}

function cargarUsr() {
    
    if (infoLogUsr) {
        //debugger
                navPerfil.innerHTML = `<div class="menuPerfil infoPerfil" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                        <div ><img src="Pictures/Perfil.png" height="35px" width="35px" role="button"></div>
                                        </div>`
                infoPerfil.innerHTML = retornoInfoPerfil(infoLogUsr)
                //console.table(infoLogUsr)
    }else{
        navPerfil.innerHTML = `<div class="menuPerfil infoPerfil" role="button" onclick="cerrarSesion()">
        <p>Iniciar Sesión</p>
        </div>`
    }
}
cargarUsr()

function cerrarSesion() {
    sessionStorage.removeItem("logUsr");
    let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"));
    console.log(infoLogUsr)
    location.href = "Portada.html";
}

// FUNCION ASINCRÓNICA CARGA DE CONTENIDO DESDE BACK END

const cargarCont = async () => {
   await fetch(`js/Producto.json`)
            .then ((response) => response.json())
            .then ((data) => {
                //debugger
                listaTiendaBE = data
                pushDatosTienda() 
                if (listaTienda.length>8){
                    let iniLista = listaTienda.length-8
                    let finLista = listaTienda.length+1
                    let listaEnIndex = listaTienda.slice(iniLista, finLista)
                
                listaEnIndex.forEach(Producto => {
                    contenidoHTML += 
                    /*cardsProductosIndex(Producto)*/
                    `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" data-id="${Producto.id}" onclick="guardarContenidoEnLS('${Producto.id}')">Ver Producto</button>
                                    </div>
                                    </div>
                                </div>`
                    //console.log(Producto)
                })}else{
                    //debugger
                    //console.log(productoPortada)
                    listaTienda.forEach(Producto => {
                        contenidoHTML += 
                        `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" data-id="${Producto.id}" onclick="guardarContenidoEnLS('${Producto.id}')">Ver Producto</button>
                                    </div>
                                    </div>
                                </div>`
                        //console.log(Producto)
                })}
                productoPortadaIndex.innerHTML = contenidoHTML
            })
            .finally(() => {
                
                console.log("impresion realizada")
            })   
            console.log("cargar Contenido")   
            
}
cargarCont()
console.log("prueba")

//------------------------------ CARGAR INFO DETALLE EN LS Y RUTA A DETALLE DEL PRODUCTO ----------------------------------//

const guardarContenidoEnLS = (id) => {
    //debugger
    let resultado = listaTienda.find((Producto) => Producto.id == id)
        if(resultado) {
            localStorage.setItem("detalle", JSON.stringify(resultado))
            location.href = "detalle.html"
        }
        console.log("guardar contenido en LS")  
}

//------------------------------------ AGREGAMOS LA INFO DEL BACK END A LISTATIENDA -----------------------------------//

function pushDatosTienda() {
    listaTiendaBE.forEach((Producto) => {
        listaTienda.push(Producto)
    })
    console.log(listaTienda)
}

//------------------------------------ AGREGAR AL CARRITO -----------------------------------//

function funcionalidad(e) {
    let btnAgregarAlCarrito = querySelector(".btn.btn-primary")
    btnAgregarAlCarrito.addEventListener("click",funcionalidad)
    e.preventDefault()
    const idProducto =  e.target.getAttribute("data-id")
    console.log(idProducto)
    /*listaTienda.forEach((Producto)=>{
        document.querySelector(`#btn-agregar${Producto.id}`).addEventListener("click", () =>{
            console.log(Producto)
            agregarCarrito(Producto)
            Swal.fire('Agregado al carrito')
        })
    })*/
}

function agregarCarrito (Producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let existe = carrito.some((productoSome) => productoSome.id === Producto.id);
    if (existe === false) {
        Producto.cantidad = 1;
        carrito.push(Producto)
    } else {
        let prodFind = carrito.find((productoFind) => productoFind.id === Producto.id);
        prodFind.cantidad++;
    }
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
