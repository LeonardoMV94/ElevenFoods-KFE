const archivoProducto = './productos.json';
const leerProductos = async () => {
    try {
        const productos = await fs.readJson(archivoProducto);
        return productos;
    } catch {
        return [];
    }
};

const guardarProducto = async (producto) => {
    const productos = await leerProductos();
    productos.push(producto);
    await fs.writeJson(archivoProducto, productos, { spaces: 2 });
};


module.exports = {
    leerProductos,
    guardarProducto
}