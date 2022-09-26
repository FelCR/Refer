let objDetalle = JSON.parse(localStorage.getItem("detalle"))
//let carrito = JSON.parse(localStorage.getItem("carrito"))

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
    //debugger
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