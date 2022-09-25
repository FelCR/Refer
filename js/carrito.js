const carritoDeCompra = document.querySelector("#carritoDeCompra")
const btnEliminarCarrito = document.querySelector("button.btn.btn-primary.btnEliminarCarrito")
const botonVaciar = document.getElementById("vaciarCarrito")
const botonConfirmarCompra = document.getElementById("confirmarCompra")
//const btnConfirmarCompra = document.getElementById("confirmarCompra")

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
    const botonBorrar = document.querySelectorAll(".btnBorrar")
    botonBorrar.forEach(boton=>{
        boton.addEventListener("click",borrarProd)
    })
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
    confirmacionCompra()
}

function VaciarCarrito() {
    carrito.splice(0,carrito.length)
    console.log(carrito)
    carritoDeCompra.innerHTML=""
    
    const costoTotal = document.getElementById("costoTotal")
    costoTotal.innerText = carrito.reduce((acc,prod) => acc + prod.cantidad*prod.precio, 0)
    //confirmacionCompra()
    renderizaCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito));
    confirmacionCompra()
}
botonVaciar.addEventListener(`click`,VaciarCarrito)

function confirmacionCompra(){
    let carritoDeCompra = carrito.length
    if (carritoDeCompra === 0) {
        confirmarLaCompra.innerHTML = ""
    } else {
        confirmarLaCompra.innerHTML =
                            ` <button type="button" class="btn btn-success btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="comprarCarrito">Comprar</button>
                            <!-- Modal -->
                                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Pago</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <h2>Confirmar su compra</h2>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="confirmarCompra">Confirmar</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>`
    }
  
}
confirmacionCompra()
botonConfirmarCompra.addEventListener(`click`,console.log("click"))
