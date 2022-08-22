class RegistroUsuario {
    constructor (nombre, edad, sexo, telefono, correo, pass) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.telefono = telefono
        this.correo = correo
        this.pass = pass
    }
        displayDatos() {
            console.log("Sus datos son:")
            console.table (constructor)
        }
}

class Producto {
    constructor(id, nombre, descripcion, precio, categoria, stock) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }precioFinal() {
        return '$ ' + parseFloat((this.precio * 1.16).toFixed(2))
    }
}

class RegistroTienda {
    constructor (nombre, giro, descripcion, telefono, correo) {
        this.nombre = nombre
        this.giro = giro
        this.descripcion = descripcion
        this.telefono = telefono
        this.correo = correo
    }
        displayDatos() {
            console.log("Los datos de su tienda son:")
            console.table (constructor)
        }
}