class RegistroUsuario {
    constructor (id, nombre, apellido, fechaNacimiento, telefono, correo, pass) {
        this.usrid = id
        this.nombre = nombre
        this.apellido = apellido
        this.fechaNacimiento = fechaNacimiento
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
    }
}

class RegistroTienda {
    constructor (usrId, id, nombre, giro, descripcion, telefono, correo) {
        this.usrid = usrId
        this.id = id
        this.nombre = nombre
        this.giro = giro
        this.descripcion = descripcion
        this.telefono = telefono
        this.correo = correo
    }
}

class Publicacion {
    constructor(usrId, id, imagen, descripcion) {
        this.usrid = usrId
        this.id = id
        this.imagen = imagen
        this.descripcion = descripcion
}
}