const carritoDeCompra = document.querySelector("#carritoDeCompra")
const btnEliminarCarrito = document.querySelector("button.btn.btn-primary.btnEliminarCarrito")
const botonVaciar = document.getElementById("vaciarCarrito")
const botonConfirmarCompra = document.getElementById("confirmarCompra")
//const btnConfirmarCompra = document.getElementById("confirmarCompra")
const iva = 1.16
const btnAddCarrito = document.querySelector("button.btn.btn-primary.btnAddCarrito")

const navPerfilCar = document.querySelector(".navPerfilCar");
const infoPerfilCar = document.querySelector(".infoPerfilCar");
let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"))

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
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="confirmarCompra" on onclick="VaciarCompra()">Confirmar</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>`
    }
  
}

//------------------------ INFO DE PERFIL ----------------------------//

function retornoInfoPerfil(logUsrCar) {
  //debugger
  const {usrid, usrName, usrApellido, usrEdad, usrTelefono, usrCorreo, usrPass} = logUsrCar 
  return `<div class="offcanvas offcanvas-end data-bs-scroll=true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
              <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"">${usrName} ${usrApellido}</h5> <img src="Pictures/perfil.png" height="45px" width="45px">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
              <div class="botonMenuPerfil">Tiendas</div>
              <div class="botonMenuPerfil">Contactos</div>
              <div class="botonMenuPerfil">Compras</div>
              <div class="botonMenuPerfil" onclick="cerrarSesion()" role="button">Cerrar sesi??n</div>
              </div>
          </div>`
}

function cargarUsrCar() {
  
  if (infoLogUsr) {
      debugger
              navPerfilCar.innerHTML = `<div class="menuPerfil infoPerfil" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                      <div ><img src="Pictures/Perfil.png" height="35px" width="35px" role="button"></div>
                                      </div>`
              infoPerfilCar.innerHTML = retornoInfoPerfil(infoLogUsr)
              //console.table(infoLogUsr)
  }else{
    navPerfilCar.innerHTML = `<div class="menuPerfil infoPerfil" role="button" onclick="cerrarSesion()">
    <p>Iniciar Sesi??n</p>
    </div>`
}
}
cargarUsrCar()

function cerrarSesion() {
  sessionStorage.removeItem("logUsr");
  let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"));
  console.log(infoLogUsr)
  location.href = "Portada.html";
}

//---------------------------- CONFIRMAR COMPRA -------------------------//
confirmacionCompra()
botonConfirmarCompra.addEventListener(`click`,console.log("click"))

function VaciarCompra() {
  carrito.splice(0,carrito.length)
  console.log(carrito)
  carritoDeCompra.innerHTML=""
  
  const costoTotal = document.getElementById("costoTotal")
  costoTotal.innerText = carrito.reduce((acc,prod) => acc + prod.cantidad*prod.precio, 0)
  //confirmacionCompra()
  renderizaCarrito()
  localStorage.setItem("carrito", JSON.stringify(carrito));
  Swal.fire('??Gracias por tu compra!')
}

