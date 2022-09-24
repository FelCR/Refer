const carritoDeCompra = document.querySelector("#carritoDeCompra")
const btnEliminarCarrito = document.querySelector("button.btn.btn-primary.btnEliminarCarrito")
const botonVaciar = document.getElementById("vaciarCarrito")
const btnConfirmarCompra = document.getElementById("confirmarCompra")

function cargarCarrito() {
    carrito = JSON.parse(localStorage.getItem("carrito"))
    
}

cargarCarrito()

function renderizaCarrito(){
    //debugger
    console.table(carrito)
    carritoDeCompra.innerHTML=""
    carrito.forEach((Producto) =>{
        carritoDeCompra.innerHTML +=
                `<tr>
                    <td id="imgCarrito"><img src="Pictures/producto.webp" height="100px" width="0px" class="card-img-top" alt="..."></td>
                    <td class="datoCarrito" id="nombreCarrito">${Producto.nombre}</td>
                    <td class="datoCarrito">${Producto.cantidad}</td>     
                    <td class="datoCarrito">$ ${Producto.precio}</td>
                    <td class="datoCarrito">$ ${Producto.cantidad*Producto.precio}</td>
                    <td><button type="button" class="btn btn-danger btnBorrar" id="btn-borrar${Producto.id}" data-id="${Producto.id}">Eliminar</button></td>
                </tr>`
    });
    const costoTotal = document.getElementById("costoTotal")
    costoTotal.innerText = carrito.reduce((acc,prod) => acc + prod.cantidad*prod.precio, 0)
    //confirmacionCompra()
    //localStorage.setItem("carrito", JSON.stringify(carrito));
}
renderizaCarrito()

function borrarProd(e) {
    const idProduct =  e.target.getAttribute("data-id")
    console.log(idProduct)
    const indexProduct= carrito.findIndex(indexCarrito => indexCarrito.id == idProduct)
    console.log(indexProduct)
    carrito.splice(indexProduct,1)
    //const carritoCompra = document.getElementById("carritoCompra")
    renderizaCarrito();

    const botonBorrar = document.querySelectorAll(".btnBorrar")
    botonBorrar.forEach(boton=>{
        boton.addEventListener("click",borrarProd)
    })
    //confirmacionCompra()
}

function VaciarCarrito() {
    carrito.splice(0,carrito.length)
    console.log(carrito)
    carritoCompra.innerHTML=""
    
    const totalCarrito = document.getElementById("totalCarrito")
    totalCarrito.innerText = carrito.reduce((acc,prod) => acc + prod.cantidad*prod.precio, 0)
    //confirmacionCompra()
    renderizaCarrito()
}