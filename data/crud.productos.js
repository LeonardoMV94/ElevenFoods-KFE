const fs = require('fs-extra')
const archivoProducto = __dirname + '/productos.json';

class CrudProducto {

    async leerProductos() {
        try {
            const productos = await fs.readJson(archivoProducto);
            return productos;
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    async guardarProducto(producto) {
        try {
            const productos = await this.leerProductos();
            productos.push(producto);
            await fs.writeJson(archivoProducto, productos, { spaces: 2 });
            return true
        } catch (error) {
            console.log(error)
            return false
        }

    }

    async getPromociones() {
        const productos = await this.leerProductos()
        if (!productos) return []

        const promos = productos.filter(p => p.promocion)
        console.log(promos)
        if(promos.length > 1) return promos
        return [promos]
    }

    async eliminarProducto(producto) {

    }

    async editarProducto(producto) { }
}

module.exports = new CrudProducto()