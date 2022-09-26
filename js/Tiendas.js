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
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="...">
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

/*const visitarTienda = (storeId) => {
    //debugger
    let resultado = listaTienda.find((Tienda) => Tienda.storeId == storeId)
        if(resultado) {
            localStorage.setItem("Tienda", JSON.stringify(resultado))
            location.href = "TiendaUsr.html"
        }
        console.log("guardar contenido en LS")  
}*/