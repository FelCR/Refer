//-------------------------------- VARIABLES ------------------------------------//

const productoPortadaIndex = document.querySelector("#productoIndex");
const publicacionIndex = document.getElementById("publicacionIndex");
const detalle = document.querySelector("section#detalle");
const volver = document.querySelector("div.emoji-volver");

let prodIndex = []
let contenidoHTML = ""

//-------------------------------- CONTENIDO INDEX ------------------------------------//

//RENDERIZADO DE CARDS PRODUCTOS

const cardsProductosIndex = (Producto) => {
    console.log("cardsProductosIndex")  
    return `<div class=tarjetasTienda>
    <div class="card" style="width: 18rem;">
        <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" onclick="guardarContenidoEnLS('${Producto.id}')">
        <div class="card-body">
            <h5 class="card-title">${Producto.nombre}</h5>
            <p class="card-text">${Producto.descripcion}</p>
            <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
            <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}">Agregar al Carrito</button>
        </div>
        </div>
    </div>`             
}

// FUNCION ASINCRÓNICA CARGA DE CONTENIDO DESDE BACK END

const cargarCont = async () => {
   await fetch(`js/Producto.json`)
            .then ((response) => response.json())
            .then ((data) => {
                listaTiendaBE = data
                pushDatosTienda() 
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
            console.log("cargar Contenido")
                       
}
cargarCont()

// CARGAR INFO EN LS Y RUTA A DETALLE DEL PRODUCTO

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
/*
function agregarCarrito() {
    debugger
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
    //localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire('Agregado al carrito')
}*/

function funcionalidad() {
    listaTienda.forEach((Producto)=>{
        document.querySelector(`#btn-agregar${Producto.id}`).addEventListener("click", () =>{
            console.log(Producto)
            agregarCarrito(Producto)
            Swal.fire('Agregado al carrito')
        })
    })
}

function agregarCarrito(Producto){
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
