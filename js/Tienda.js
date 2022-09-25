//---------------------- INICIA TIENDA EN LÍNEA ------------------------

function creoID() { return parseInt(Math.random() * 100000) }

function buscarProductos() {
    let prod = prompt("¿Qué artículo esta buscando?")
    const resultado = productos.filter(producto => producto.nombre.includes(prod))
    if (resultado) {
    console.table(resultado)
    let respuesta = prompt("¿Desea agregar algún artículo al carrito?")
     while ((respuesta=="Si") || (respuesta=="si")) {
        const addCarrito2 = prompt("Escriba el nombre del articulo que desea agregar")
        /*let resultado1 = productos.some(producto => producto.id=addCarrito2)
        if (resultado1) {*/
        const resultado2 = productos.find(producto => producto.nombre.includes(addCarrito2))
        carrito.push(resultado2)
            alert("Articulo agregado exitosamente") 
            console.table (carrito)
            respuesta = prompt("¿Desea agregar algún artículo al carrito?")
            calcularCarrito()
            /*} else { alert("Error al ingresar el producto")}*/
        }
     } else {
        alert("Lo sentimos, por el momento no contamos con ese artículo")
     } 
}



// --------------------DOM---------------------------


// CARGA DE PRODUCTOS SEGUN CATEGORÍA

function agregarProducto() {
    let id = creoID()
    let prodName = document.querySelector("input.form-control.nombreProd").value
    let prodDesc = document.querySelector("input.form-control.descProd").value
    let precio = document.querySelector("input.form-control.precioProd").value
    let prodCat = document.querySelector("select.form-select.form-select-sm.selectCat").value
    let prodStock = document.querySelector("input.form-control.stockProd").value
    const listadoProductos = document.getElementById("listadoProductos")
    
    listadoProductos.innerHTML="" 
        switch(prodCat) {
            case "Tecnologia":
            tech.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(tech)
            //cargadeProductosTiendaTech()
            
            //eliminarProd()
            
            break
            case "Moda":
            moda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(moda)
            //cargadeProductosTiendaModa()
           
            //eliminarProd()
            
            break
            case "Belleza":
            belleza.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(belleza)
            
            
            break
            case "Servicios":
            servicios.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(servicios)
            
            
            break
            case "Alimentos":
            alimentos.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(alimentos)
            
            
            break
            case "Deportes":
            deportes.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(deportes)

            
            break
            case "Herramientas":
            herramientas.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(herramientas)
            
            
            break
            case "Muebles":
            muebles.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(muebles)
           
            
            break
            case "Juguetes":
            juguetes.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(juguetes)
            
           
            break
            case "Libros":
            libros.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            listaTienda.push(new Producto(id, prodName, prodDesc, precio, prodCat, prodStock))
            console.table(libros)
            
            
            break
        }

        //listaTienda.reverse()
        listaTienda.forEach(Producto => {
            listadoProductos.innerHTML += 
                                 `<div class=tarjetasTienda>
                                 <div class="card" style="width: 18rem;">
                                        <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="..." onclick="guardarContenidoEnLS('${Producto.id}')">
                                        <div class="card-body">
                                            <h5 class="card-title">${Producto.nombre}</h5>
                                            <p class="card-text">${Producto.descripcion}</p>
                                            <p><h7 class="precioTarjeta ">$ ${Producto.precio}</h7></p>
                                            <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
                                            <button type="button" class="btn btn-danger btnEliminar" data-id="${Producto.id}">Eliminar</button>
                                        </div>
                                        </div>
                                    </div>`
}) 
    const btnEliminar = document.querySelectorAll(".btnEliminar")
    btnEliminar.forEach(boton=>{
        boton.addEventListener("click",eliminarProd)
})
    Swal.fire('Producto agregado con éxito')
    funcionalidad();  
    displayProductos();

   /* document.querySelector("input.form-control.nombreProd").value=""
    document.querySelector("input.form-control.descProd").value=""
    document.querySelector("input.form-control.precioProd").value=""
    document.querySelector("select.form-select.form-select-sm.selectCat").selectedIndex = 0
    document.querySelector("input.form-control.stockProd").value=""*/
}

function crearCards() {
    //listaTienda.reverse()

    listaTienda.forEach(Producto => {
        listadoProductos.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="..." onclick="guardarContenidoEnLS('${Producto.id}')">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
                                        <button type="button" class="btn btn-danger btnEliminar" data-id="${Producto.id}">Eliminar</button>
                                    </div>
                                    </div>
                                </div>`
    });
    funcionalidad();
    const btnEliminar = document.querySelectorAll(".btnEliminar")
    btnEliminar.forEach(boton=>{
    boton.addEventListener("click",eliminarProd)
})
}

crearCards()


function addDesdeCampos () {
        console.log(camposAddProducto.value)

        console.log(camposAddProducto1.value)

        console.log(camposAddProducto2.value)

        console.log(camposAddProducto3.value)

        console.log(camposAddProducto4.value)

}
btnprodAdd.addEventListener(("click"), agregarProducto)



function eliminarProd(e) {
    //debugger
    const idProducto =  e.target.getAttribute("data-id")
    console.log(idProducto)
    const indexProducto= listaTienda.findIndex(indexArray => indexArray.id == idProducto)
    console.log(indexProducto)
    listaTienda.splice(indexProducto,1)
    const listadoProductos = document.getElementById("listadoProductos")
    listadoProductos.innerHTML=""

    listaTienda.forEach(Producto => {
        listadoProductos.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="..." onclick="guardarContenidoEnLS('${Producto.id}')">
                                    <div class="card-body">
                                        <h5 class="card-title">${Producto.nombre}</h5>
                                        <p class="card-text">${Producto.descripcion}</p>
                                        <p><h7 class="precioTarjeta">$ ${Producto.precio}</h7></p>
                                        <button type="button" class="btn btn-primary" id="btn-agregar${Producto.id}" >Agregar al Carrito</button>
                                        <button type="button" class="btn btn-danger btnEliminar" data-id="${Producto.id}">Eliminar</button>
                                    </div>
                                    </div>
                                </div>`
}) 
    const btnEliminar = document.querySelectorAll(".btnEliminar")
    btnEliminar.forEach(boton=>{
        boton.addEventListener("click",eliminarProd)

    
})
funcionalidad()
displayProductos()
Swal.fire('Producto eliminado')
}

function displayProductos() {
    //debugger
    const productoPortada = document.querySelector("#productoPortada");
    
    let lengthListaTienda = listaTienda.length
    console.log(lengthListaTienda)
    //console.log(productoPortada)
    
    if(lengthListaTienda>4){
    let iniLista = listaTienda.length-4
    let finLista = listaTienda.length+1
    let listaEnTienda = listaTienda.slice(iniLista, finLista)
    //console.table(listaEnTienda)
    
    productoPortada.innerHTML=""
    listaEnTienda.forEach(Producto => {
        productoPortada.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="..." onclick="guardarContenidoEnLS('${Producto.id}')">
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
    console.log(productoPortada)
    productoPortada.innerHTML=""
    listaTienda.forEach(Producto => {
        productoPortada.innerHTML += 
                                `<div class=tarjetasTienda>
                                <div class="card" style="width: 18rem;">
                                    <img src="Pictures/producto.webp" height="200px" width="200px" class="card-img-top" alt="..." onclick="guardarContenidoEnLS('${Producto.id}')">
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
displayProductos()

function displayInverso(){
    let lengthListaTienda = listaTienda.length
    console.log(lengthListaTienda)
    let iniLista = listaTienda.length-4
    let finLista = listaTienda.length+1
    let listaEnTienda = listaTienda.slice(iniLista, finLista)
    listaEnTienda.reverse()
    console.table(listaEnTienda)
}

function descTienda() {
    let descpripcion = document.querySelector("textarea#exampleFormControlTextarea1.form-control.descContentTienda").value
    const descripTienda = document.getElementById("descTienda")
    descripTienda.innerHTML =
                    `<p class=descripcion>${descpripcion}</p>`
}

btndescTienda.addEventListener(("click"), descTienda)


function publicar() {
    let usrId = "f2667"
    let id = creoID()
    let pubImg = document.querySelector("input#formFileSm.form-control.form-control-sm").value
    let pubText = document.querySelector("textarea#exampleFormControlTextarea1.form-control.contPublicacion").value
    const publiTienda = document.getElementById("publiTienda")
    publicaciones.push(new Publicacion(usrId, id, pubImg, pubText))
    publiTienda.innerHTML=""
    publicaciones.forEach(Publicacion => {
        publiTienda.innerHTML += 
                             `<div class="card cardPublicacion">
                             <div class="card-body">
                             <div><img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."></div>
                               <p class="card-text">${Publicacion.descripcion}</p>
                             </div>
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                            </div>`
}) 
displayPublicaciones()
}

function postear() {
    publiTienda.innerHTML=""
    publicaciones.forEach(Publicacion => {
        publiTienda.innerHTML += 
                             `<div class="card cardPublicacion">
                             <div class="card-body">
                             <div><img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."></div>
                               <p class="card-text">${Publicacion.descripcion}</p>
                             </div>
                             <img src="Pictures/tienda.jpg" class="card-img-bottom" alt="...">
                            </div>`
}) 
}
postear()

btnPublicar.addEventListener(("click"), publicar)

function displayPublicaciones() {
    const publicacionesPortada = document.getElementById("publicacionesPortada")
    let lengthPublicaciones = publicaciones.length
    console.log(lengthPublicaciones)
    let iniLista = publicaciones.length-2
    let finLista = publicaciones.length+1
    let publiDisplay = publicaciones.slice(iniLista, finLista)
    publicacionesPortada.innerHTML=""
    publiDisplay.forEach(Publicacion => {
        publicacionesPortada.innerHTML += 
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

//-------------------------------AGREGAR AL CARRITO------------------------------------//

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
    //renderizarCarrito();
    //borrarProducto();
    //const btnBorrar = document.querySelectorAll(".btnBorrar")
    //btnBorrar.forEach(boton=>{
        //boton.addEventListener("click",borrarProd)
    //})
}