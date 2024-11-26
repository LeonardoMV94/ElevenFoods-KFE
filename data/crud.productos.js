const fs = require('fs-extra')
// eslint-disable-next-line n/no-path-concat
const archivoProducto = __dirname + '/productos.json'

class CrudProducto {
  async leerProductos () {
    try {
      const productos = await fs.readJson(archivoProducto)
      console.log('leerProductos: ' + productos.length)
      return productos
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async guardarProducto (producto) {
    try {
      const productos = await this.leerProductos()
      productos.push(producto)
      await fs.writeJson(archivoProducto, productos, { spaces: 2 })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async getPromociones () {
    const productos = await this.leerProductos()
    if (!productos) return []

    const promos = productos.filter((p) => p.promocion)
    console.log('get promos: ' + promos.length)
    if (promos.length > 1) return promos
    return [promos]
  }

  async eliminarProducto (hola) {}

  async editarProducto (hola) {}
}

module.exports = new CrudProducto()
