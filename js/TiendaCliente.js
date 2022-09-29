let objDetalleTienda = JSON.parse(localStorage.getItem("Tienda"))
const navPerfilTiendaC = document.querySelector(".navPerfilTiendaC");
const infoPerfilTiendaC = document.querySelector(".infoPerfilTiendaC");
let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"));

//---------------------------------- IMAGEN TIENDA ------------------------------------//
function logoTiendaCliente(logoTienda) {
    const {logo} = logoTienda
    //console.log(descripcionTienda)
    return `<img src="${logo}" height="200px" width="250px">`
}
// RECUPERAR CONTENIDO
function recuperoLogo() {
    //debugger
                nombreTienda.innerHTML = logoTiendaCliente(objDetalleTienda)
                console.table(objDetalleTienda)
}
recuperoLogo()

//---------------------------------- PUBLICACIONES TIENDA CLIENTES ------------------------------------//

function publicacionTiendaCliente() {
    let publiTiendaClientes = JSON.parse(localStorage.getItem("Publicacion"))
    console.log(publiTiendaClientes)
    if(publiTiendaClientes){
        publiTiendaCliente.innerHTML=""
        publiTiendaClientes.forEach(Publicacion => {
        publiTiendaCliente.innerHTML += 
                             `<div class="card cardPublicacion">
                             <div class="card-body">
                             <div><img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."></div>
                               <p class="card-text">${Publicacion.descripcion}</p>
                             </div>
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                            </div>`
}) 
    }else{
        //const descripTienda = document.getElementById("descTiendaUsr")
        //descripTienda.innerHTML ="" 
    }
}
publicacionTiendaCliente()

//---------------------------------- PUBLICACIONES PORTADA TIENDA CLIENTES ------------------------------------//

function displayPublicacionesClientes() {
    const publicacionesPortadaCliente = document.getElementById("publicacionesPortadaCliente")
    let lengthPublicaciones = publicaciones.length
    console.log(lengthPublicaciones)
    let iniLista = publicaciones.length-2
    let finLista = publicaciones.length+1
    let publiDisplay = publicaciones.slice(iniLista, finLista)
    publicacionesPortadaCliente.innerHTML=""
    publiDisplay.forEach(Publicacion => {
        publicacionesPortadaCliente.innerHTML += 
                             `<div class="card cardPublicacion">
                             <div class="card-body">
                             <div><img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."></div>
                               <p class="card-text">${Publicacion.descripcion}</p>
                             </div>
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                           </div>`
})
}
displayPublicacionesClientes()

//--------------------------------- DESCRIPCION TIENDA CLIENTES -----------------------------------------//

function DescTiendaClientes(descripcionTienda) {
    const {descripcion} = descripcionTienda
    //console.log(descripcionTienda)
    return `<p class=descripcion>${descripcion}</p>`
}
// RECUPERAR CONTENIDO
function recuperoInfoDescripcion () {
    //debugger
                descTiendaCliente.innerHTML = DescTiendaClientes(objDetalleTienda)
                console.table(objDetalleTienda)
}
recuperoInfoDescripcion ()

//---------------------------------- DISPLAY DE PRODUCTOS EN INICIO DE LA TIENDA ----------------------------------//

function displayProductosClientes() {
    let idTienda = objDetalleTienda.storeId
    console.log(idTienda)
    //let productosTienda = listaTienda.filter(listaTienda.storeId == idTienda)
    const prodsTienda = listaTienda.filter(producto => producto.storeId == idTienda)
    console.table(prodsTienda)
    
    let lengthListaTienda = prodsTienda.length
    console.log(lengthListaTienda)
    //console.log(productoPortada)
    
    if(lengthListaTienda>4){
    let iniLista = prodsTienda.length-4
    let finLista = prodsTienda.length+1
    let listaEnTienda = prodsTienda.slice(iniLista, finLista)
    //console.table(listaEnTienda)
    
    productoPortadaCliente.innerHTML=""
    listaEnTienda.forEach(Producto => {
        productoPortadaCliente.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" onclick="guardarContenidoEnLS('${Producto.id}')">Ver Producto</button>
                                    </div>
                                    </div>
                                </div>`
})} else{
    //debugger
    //console.log(productoPortada)
    productoPortadaCliente.innerHTML=""
    prodsTienda.forEach(Producto => {
        productoPortadaCliente.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" onclick="guardarContenidoEnLS('${Producto.id}')">Ver Producto</button>
                                    </div>
                                    </div>
                                </div>`
})}
}
displayProductosClientes()

//---------------------------------- DISPLAY DE PRODUCTOS EN CATALOGO DE LA TIENDA ----------------------------------//

function productoDeTienda() {
    //debugger
    let idTienda = objDetalleTienda.storeId
    console.log(idTienda)
    //let productosTienda = listaTienda.filter(listaTienda.storeId == idTienda)
    const prodsTienda = listaTienda.filter(producto => producto.storeId == idTienda)
    console.table(prodsTienda)

    const listadoProductosCliente = document.querySelector("#listadoProductosCliente");
    listadoProductosCliente.innerHTML=""
    prodsTienda.forEach(Producto => {
        listadoProductosCliente.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" onclick="guardarContenidoEnLS('${Producto.id}')">Ver Producto</button>
                                    </div>
                                    </div>
                                </div>`
})
}
productoDeTienda()

//-------------------------------DETALLES DEL PRODUCTO----------------------------------//

const guardarContenidoEnLS = (id) => {
    //debugger
    let resultado = listaTienda.find((Producto) => Producto.id == id)
        if(resultado) {
            localStorage.setItem("detalle", JSON.stringify(resultado))
            location.href = "detalle.html"
        }
        console.log("guardar contenido en LS")  
}

//------------------------ INFO DE PERFIL ----------------------------//

function retornoInfoPerfil(logUsrTiendaC) {
    //debugger
    const {usrid, usrName, usrApellido, usrEdad, usrTelefono, usrCorreo, usrPass} = logUsrTiendaC
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
  
  function cargarUsrTiendaC() {
    
    if (infoLogUsr) {
        debugger
                navPerfilTiendaC.innerHTML = `<div class="menuPerfil infoPerfil" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                        <div ><img src="Pictures/Perfil.png" height="35px" width="35px" role="button"></div>
                                        </div>`
                infoPerfilTiendaC.innerHTML = retornoInfoPerfil(infoLogUsr)
                //console.table(infoLogUsr)
    }else{
        navPerfilTiendaC.innerHTML = `<div class="menuPerfil infoPerfil" role="button" onclick="cerrarSesion()">
        <p>Iniciar Sesión</p>
        </div>`
    }
  }
  cargarUsrTiendaC()

  function cerrarSesion() {
    sessionStorage.removeItem("logUsr");
    let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"));
    console.log(infoLogUsr)
    location.href = "Portada.html";
}