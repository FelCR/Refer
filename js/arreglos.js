const usuarios = [
    {
        usrid: 102938,
        nombre: "Felipe",
        apellido: "Cabañas",
        fechaNacimiento: "27-02-1989",
        telefono: 5566778899,
        correo: "fel_277@hotmail.com",
        pass: 12345,
    }
]
const categorias = []
let listaTienda = [
    
    {
        id:1234,
        nombre:"Producto1",
        descripcion:"Descripcion1",
        precio:500,
        categoria:"tech",
        stock:1,
    },
    {
        id:2345,
        nombre:"Producto2",
        descripcion:"Descripcion2",
        precio:500,
        categoria:"tech",
        stock:1,
    },
    {
        id:3456,
        nombre:"Producto3",
        descripcion:"Descripcion3",
        precio:500,
        categoria:"tech",
        stock:1,
    },
    {
        id:4567,
        nombre:"Producto4",
        descripcion:"Descripcion4",
        precio:500,
        categoria:"tech",
        stock:1,
    },

]
let listaEnTienda = []
const publicaciones = [
    {
        usrid: 102938,
        id: 667788,
        imagen: `img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."`,
        descripcion: "Publicacion de prueba",
    },
    {
        usrid: 102938,
        id: 667789,
        imagen: `img src="Pictures/Perfil2.png" class="logoTiendaPub" alt="..."`,
        descripcion: "Publicacion de prueba 2",
    }
]
const tech = []
const moda = []
const belleza = []
const servicios = []
const alimentos = []
const deportes = []
const herramientas = []
const muebles = []
const juguetes = []
const libros = []
const tiendas = [
    {
        usrid: 102938,
        id: 334455,
        nombre: "Tienda 1",
        giro: "Deportes",
        descripcion: "En esta tienda encontrarás los mejores artículos de deportes, desde pesas y baloneas hasta ropa deportiva, revisa nuestro catálogo",
        telefono: "5566778899",
        correo: "deportes@correo.com",
    },
    {
        usrid: 102939,
        id: 334466,
        nombre: "Tienda 2",
        giro: "Tecnologia",
        descripcion: "Contamos con un catálogo muy completo en artículos de tecnología, busca los mejores gadgets en nuestro catalogo, estamos para servirte",
        telefono: "5566778899",
        correo: "tecnología@correo.com",
    },
    {
        usrid: 102940,
        id: 334477,
        nombre: "Tienda 3",
        giro: "Alimentos",
        descripcion: "Los mejores artículos de repostería, encuentra los más deliciosos pasteles en nuestro catálogo, ponte en contacto para respostería bajo pedido para ese evento especial",
        telefono: "5566778899",
        correo: "pasteles@correo.com",
    },
    {
        usrid: 102941,
        id: 334488,
        nombre: "Tienda 4",
        giro: "Moda",
        descripcion: "Encuentra lo último en moda para dama y caballero, animate a conocer nuestras colecciones disponibles en nuestro catálogo para que te veas siempre a la moda",
        telefono: "5566778899",
        correo: "moda@correo.com",
    },
]
const favoritos = []
const contactos = []
const socios = []
let carrito = []
let productos = [] 
let productosCarrito = []


function addCat(){
    categorias.push(tech)
    categorias.push(moda)
    categorias.push(belleza)
    categorias.push(servicios)
    categorias.push(alimentos)
    categorias.push(deportes)
    categorias.push(herramientas)
    categorias.push(muebles)
    categorias.push(juguetes)
    categorias.push(libros)
}
addCat()