let objDetalle = JSON.parse(localStorage.getItem("detalle")) 
//let carrito = JSON.parse(localStorage.getItem("carrito"))
const navPerfilDetalle = document.querySelector(".navPerfilDetalle");
const infoPerfilDetalle = document.querySelector(".infoPerfilDetalle");
let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"));

function retornoDetalle (detalle) {
    const {id, nombre, descripcion, precio, categoria, stock} = detalle 
    return`<div class="row">
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
          <button type="button" class="btn btn-primary" id="btn-agregar${id}" onclick="agregarCarrito(objDetalle)">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  </div>`
}

// RECUPERAR CONTENIDO
function recuperoInfo () {
    //debugger
                detalle.innerHTML = retornoDetalle(objDetalle)
                console.table(objDetalle)
}
recuperoInfo()
//-------------------------------AGREGAR AL CARRITO------------------------------------//

function agregarCarrito(objDetalle){
    debugger
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let existe = carrito.some((productoSome) => productoSome.id === objDetalle.id);
    if (existe === false) {
        objDetalle.cantidad = 1;
        carrito.push(objDetalle)
    } else {
        let prodFind = carrito.find((productoFind) => productoFind.id === objDetalle.id);
        prodFind.cantidad++;
    }
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire('Agregado al carrito')
}

//------------------------ INFO DE PERFIL ----------------------------//

function retornoInfoPerfil(logUsrDetalle) {
  //debugger
  const {usrid, usrName, usrApellido, usrEdad, usrTelefono, usrCorreo, usrPass} = logUsrDetalle 
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

function cargarUsrDetalle() {
  
  if (infoLogUsr) {
      debugger
              navPerfilDetalle.innerHTML = `<div class="menuPerfil infoPerfil" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                      <div ><img src="Pictures/Perfil.png" height="35px" width="35px" role="button"></div>
                                      </div>`
              infoPerfilDetalle.innerHTML = retornoInfoPerfil(infoLogUsr)
              //console.table(infoLogUsr)
  }else{
    navPerfilDetalle.innerHTML = `<div class="menuPerfil infoPerfil" role="button" onclick="cerrarSesion()">
    <p>Iniciar Sesión</p>
    </div>`
}
}
cargarUsrDetalle()

function cerrarSesion() {
  sessionStorage.removeItem("logUsr");
  let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"));
  console.log(infoLogUsr)
  location.href = "Portada.html";
}