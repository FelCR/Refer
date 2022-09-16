const usuarios = []
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
const publicaciones = []
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
const tiendas = []
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