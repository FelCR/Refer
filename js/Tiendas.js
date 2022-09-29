const navPerfilTiendas = document.querySelector(".navPerfilTiendas");
const infoPerfilTiendas = document.querySelector(".infoPerfilTiendas");
let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"));

function uploadTiendas() {
    localStorage.setItem("Tiendas", JSON.stringify(tiendas))
    //console.log(JSON.stringify(tiendas))
}
uploadTiendas()

function cardsTiendas() {
    let TiendasBE = JSON.parse(localStorage.getItem("Tiendas"))
    //console.table(productosTiendaBE)
    const listadoTiendas = document.querySelector("#listadoTiendas");
    listadoTiendas.innerHTML=""
    TiendasBE.forEach(Tienda => {
        listadoTiendas.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="${Tienda.logo}" height="200px" width="200px" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${Tienda.nombre}</h5>
                                        <p class="card-text">${Tienda.giro}</p>
                                        <p><h7 class="precioTarjeta"> &#128222; ${Tienda.telefono}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Tienda.storeId}" onclick="visitarTienda('${Tienda.storeId}')">Visitar</button>
                                    </div>
                                    </div>
                                </div>`
})
}
cardsTiendas()

//------------------------------ CARGAR INFO TIENDA EN LS Y RUTA A LA TIENDA SEÑALADA ----------------------------------//

const visitarTienda = (id) => {
    //debugger
    let resultadoTienda = tiendas.find((Tienda) => Tienda.storeId == id)
        if(resultadoTienda) {
            localStorage.setItem("Tienda", JSON.stringify(resultadoTienda))
            location.href = "TiendaCliente.html"
        }
        console.log("guardar contenido en LS")  
}

//------------------------ INFO DE PERFIL ----------------------------//

function retornoInfoPerfil(logUsrTiendas) {
    //debugger
    const {usrid, usrName, usrApellido, usrEdad, usrTelefono, usrCorreo, usrPass} = logUsrTiendas 
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
  
  function cargarUsrTiendas() {
    
    if (infoLogUsr) {
        debugger
                navPerfilTiendas.innerHTML = `<div class="menuPerfil infoPerfil" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                        <div ><img src="Pictures/Perfil.png" height="35px" width="35px" role="button"></div>
                                        </div>`
                infoPerfilTiendas.innerHTML = retornoInfoPerfil(infoLogUsr)
                //console.table(infoLogUsr)
    }else{
        navPerfilTiendas.innerHTML = `<div class="menuPerfil infoPerfil" role="button" onclick="cerrarSesion()">
        <p>Iniciar Sesión</p>
        </div>`
    }
  }
  cargarUsrTiendas()

  function cerrarSesion() {
    sessionStorage.removeItem("logUsr");
    let infoLogUsr = JSON.parse(sessionStorage.getItem("logUsr"));
    console.log(infoLogUsr)
    location.href = "Portada.html";
}