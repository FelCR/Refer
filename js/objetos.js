class RegistroUsuario {
    constructor (id, usrName, apellido, fechaNacimiento, telefono, correo, pass) {
        this.usrid = id
        this.usrName = usrName
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
    constructor(id, storeId, nombre, descripcion, precio, categoria, stock) {
        this.id = id
        this.storeId = storeId
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }
}

class Tienda {
    constructor (usrId, storeId, nombre, giro, descripcion, telefono, correo, logo) {
        this.usrid = usrId
        this.storeId = storeId
        this.nombre = nombre
        this.giro = giro
        this.descripcion = descripcion
        this.telefono = telefono
        this.correo = correo
        this.logo = logo
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