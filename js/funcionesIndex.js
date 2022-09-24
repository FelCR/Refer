const productoPortadaIndex = document.querySelector("#productoIndex");
const publicacionIndex = document.getElementById("publicacionIndex");
const detalle = document.querySelector("section#detalle");
const volver = document.querySelector("div.emoji-volver");

let prodIndex = []
let contenidoHTML = ""

//-------------------------------- CONTENIDO INDEX ------------------------------------

const cardsProductosIndex = (Producto) => {
    return `<div class=tarjetasTienda>
    <div class="card" style="width: 18rem;">
        <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" onclick="guardarContenidoEnLS('${Producto.id}')">
        <div class="card-body">
            <h5 class="card-title">${Producto.nombre}</h5>
            <p class="card-text">${Producto.descripcion}</p>
            <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
            <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
        </div>
        </div>
    </div>`
                         
}
function funcionalidad() {
    listaTienda.forEach((Producto)=>{
        document.querySelector(`#btn-agregar${Producto.id}`).addEventListener("click", () =>{
            console.log(Producto)
            agregarCarrito(Producto)
            Swal.fire('Agregado al carrito')
        })
    })
}


// FUNCION ASINCRÓNICA
const cargarCont = async () => {
   await fetch(`js/Producto.json`)
            .then ((response) => response.json())
            .then ((data) => {
                listaTienda = data
                if (listaTienda.length>8){
                    let iniLista = listaTienda.length-8
                    let finLista = listaTienda.length+1
                    let listaEnIndex = listaTienda.slice(iniLista, finLista)
                    console.table(listaEnIndex)
                
                listaEnIndex.forEach(Producto => {
                    contenidoHTML += cardsProductosIndex(Producto)
                })}
                productoPortadaIndex.innerHTML = contenidoHTML
            })
            .then (funcionAddCarrito())
            .catch((error) => console.log("ERROR"))           
}

/*
const cargarCont = async () => {
    await fetch(`js/Producto.json`)
             .then ((response) => response.json())
             .then ((data) => {
                listaTienda = data
             })
             .catch((error) => console.log("ERROR"))
             .finally( () => {
                 listaTienda.forEach((Producto)=>{
                     //console.log(Producto.id)
                     let botones = document.querySelector(`#btn-agregar${Producto.id}`)
                     console.log(botones)
                     })
                 })            
 }
 */
cargarCont()

// CARGAR INFO EN LS
const guardarContenidoEnLS = (id) => {
    //debugger
    let resultado = listaTienda.find((Producto) => Producto.id == id)
        if(resultado) {
            localStorage.setItem("detalle", JSON.stringify(resultado))
            location.href = "detalle.html"
        }
}

// DISPLAY DEL DETALLE
const retornoDetalle = (detalle) => {
    const {id, nombre, descripcion, precio, categoria, stock} = detalle 
    return `<div class="row">
    <div class="col-8"><img src="Pictures/producto.webp" id="imgProd"></div>
    <div class="col-4">
      <div class="card carDetalle" style="width: 18rem;">
        <h3 class="card-title cardTitel">${nombre}</h3>
        <div class="card-body">
          <h4 class="card-text">$ ${precio}</h4>
          <p class="cardDesc">${descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${categoria}</li>
          <li class="list-group-item">Tienda</li>
          <li class="list-group-item">Stock : ${stock}</li>
        </ul>
        <div class="card-body">
          <button type="button" class="btn btn-primary" id="btn-agregar${id}" >Agregar al Carrito</button>
        </div>
      </div>
    </div>
  </div>`
}


// RECUPERAR CONTENIDO
const recuperoInfo = () => {
    if (localStorage.detalle){
        const objDetalle = JSON.parse(localStorage.getItem("detalle"))
                detalle.innerHTML = retornoDetalle(objDetalle)
    }else {
        console.log("ERROR")
    }
}
recuperoInfo()
//------------------ CARRITO -----------------------------------
function funcionAddCarrito() {
    listaTienda.forEach((Producto)=>{
        document.querySelector(`#btn-agregar${Producto.id}`).addEventListener("click", () =>{
            console.log(Producto)
        })
    })
}

/*function displayProductosIndex() {
    let lengthListaTienda = listaTienda.length
    console.log(lengthListaTienda)
    //console.log(productoPortada)
    
    if(lengthListaTienda>4){
    let iniLista = listaTienda.length-4
    let finLista = listaTienda.length+1
    let listaEnTienda = listaTienda.slice(iniLista, finLista)
    //console.table(listaEnTienda)
    
    productoPortadaIndex.innerHTML=""
    listaEnTienda.forEach(Producto => {
        productoPortadaIndex.innerHTML += 
                    `<div class=tarjetasTienda>
                    <div class="card" style="width: 18rem;">
                        <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
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
    console.log(productoPortadaIndex)
    productoPortadaIndex.innerHTML=""
    listaTienda.forEach(Producto => {
        productoPortadaIndex.innerHTML += 
                    `<div class=tarjetasTienda>
                    <div class="card" style="width: 18rem;">
                        <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
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
displayProductosIndex()*/

function displayPublicacionesIndex() {
    let lengthPublicaciones = publicaciones.length
    console.log(lengthPublicaciones)
    let iniLista = publicaciones.length-2
    let finLista = publicaciones.length+1
    let publiDisplay = publicaciones.slice(iniLista, finLista)
    publicacionIndex.innerHTML=""
    publiDisplay.forEach(Publicacion => {
        publicacionIndex.innerHTML += 
                             `<div class="card cardPublicacion">
                             <div class="card-body">
                             <div><img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."></div>
                               <p class="card-text">${Publicacion.descripcion}</p>
                             </div>
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                           </div>`
}) 
}

function postearIndex() {
    //debugger
    const publicacionIndex = document.querySelector("#publicacionIndex")
    publicacionIndex.innerHTML=""
    publicaciones.forEach(Publicacion => {
        publicacionIndex.innerHTML += 
                             `<div class="card cardPublicacion">
                             <div class="card-body">
                             <div><img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."></div>
                               <p class="card-text">${Publicacion.descripcion}</p>
                             </div>
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                            </div>`
}) 
}
postearIndex()

function tiendasIndex() {
    //debugger
    const tiendasIndex = document.querySelector("#tiendasIndex")
    tiendasIndex.innerHTML=""
    tiendas.forEach(RegistroTienda => {
        tiendasIndex.innerHTML += 
                             `<div class="card" style="width: 18rem;">
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                             <div class="card-body">
                               <h5 class="card-title">"${RegistroTienda.nombre}"</h5>
                               <p class="card-text">"${RegistroTienda.descripcion}"</p>
                               <a href="#" class="btn btn-primary">Go somewhere</a>
                             </div>
                           </div>`
}) 
}

//tiendasIndex()