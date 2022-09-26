//---------------------------------- PUBLICACIONES TIENDA CLIENTES ------------------------------------//

function publicacionTiendaUsr() {
    let publiTiendaUsr = JSON.parse(localStorage.getItem("Publicacion"))
    console.log(publiTiendaUsr)
    if(publiTiendaUsr){
        publiTiendaCliente.innerHTML=""
        publiTiendaUsr.forEach(Publicacion => {
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
        const descripTienda = document.getElementById("descTiendaUsr")
        descripTienda.innerHTML ="" 
    }
}
publicacionTiendaUsr()

function displayPublicaciones() {
    const publicacionesPortadaUsr = document.getElementById("publicacionesPortadaUsr")
    let lengthPublicaciones = publicaciones.length
    console.log(lengthPublicaciones)
    let iniLista = publicaciones.length-2
    let finLista = publicaciones.length+1
    let publiDisplay = publicaciones.slice(iniLista, finLista)
    publicacionesPortadaUsr.innerHTML=""
    publiDisplay.forEach(Publicacion => {
        publicacionesPortadaUsr.innerHTML += 
                             `<div class="card cardPublicacion">
                             <div class="card-body">
                             <div><img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."></div>
                               <p class="card-text">${Publicacion.descripcion}</p>
                             </div>
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                           </div>`
})
 
}

displayPublicaciones()

//--------------------------------- DESCRIPCION TIENDA CLIENTES -----------------------------------------//

function DescTiendaUsr() {
    let descripcionTienda = JSON.parse(localStorage.getItem("Descripcion"))
    //console.log(descripcionTienda)
    if(descripcionTienda){
        const descripTienda = document.getElementById("descTiendaUsr")
        descripTienda.innerHTML =
                    `<p class=descripcion>${descripcionTienda}</p>`
    }else{
        const descripTienda = document.getElementById("descTiendaUsr")
        descripTienda.innerHTML ="" 
    }
}
DescTiendaUsr()


//---------------------------------- DISPLAY DE PRODUCTOS EN INICIO DE LA TIENDA ----------------------------------//
function displayProductos() {
    let productosTiendaBE = JSON.parse(localStorage.getItem("Producto"))
    //console.table(productosTiendaBE)
    const productoPortadaUsr = document.querySelector("#productoPortadaUsr");
    
    let lengthListaTienda = productosTiendaBE.length
    console.log(lengthListaTienda)
    //console.log(productoPortada)
    
    if(lengthListaTienda>4){
    let iniLista = productosTiendaBE.length-4
    let finLista = productosTiendaBE.length+1
    let listaEnTienda = productosTiendaBE.slice(iniLista, finLista)
    //console.table(listaEnTienda)
    
    productoPortadaUsr.innerHTML=""
    listaEnTienda.forEach(Producto => {
        productoPortadaUsr.innerHTML += 
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
    console.log(productoPortada)
    productoPortadaUsr.innerHTML=""
    productosTiendaBE.forEach(Producto => {
        productoPortadaUsr.innerHTML += 
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
displayProductos()

//---------------------------------- DISPLAY DE PRODUCTOS EN CATALOGO DE LA TIENDA ----------------------------------//
function cardsProductos() {
    let productosTiendaBE = JSON.parse(localStorage.getItem("Producto"))
    //console.table(productosTiendaBE)
    const listadoProductosUsr = document.querySelector("#listadoProductosUsr");
    listadoProductosUsr.innerHTML=""
    productosTiendaBE.forEach(Producto => {
        listadoProductosUsr.innerHTML += 
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
cardsProductos()

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

