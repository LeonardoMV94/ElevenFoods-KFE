const http      = require('node:http')
const path      = require('node:path');
const fs        = require('fs-extra');
const handlebars = require('handlebars');

const plantillaFormulario = handlebars.compile(fs.readFileSync('../src/vistas/formulario.hbs', 'utf8'));
const plantillaListado = handlebars.compile(fs.readFileSync(path.resolve( __dirname,'src' ,'/vistas/listado.hbs'),'utf8'));

const server = http.createServer(async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end( plantillaFormulario() );

  } else if (req.url === '/registrar' && req.method === 'POST') {
    
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', async () => {
      const datos = new URLSearchParams(body);

      const nuevoProducto = {
        nombre: datos.get('nombre'),
        precio: parseFloat(datos.get('precio')),
        categoria: datos.get('categoria'),
      };

      await guardarProducto(nuevoProducto);

      const productos = await leerProductos();
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end( plantillaListado({ productos } ));
    });

  } else {
    
    // Servir archivos estáticos
    const filePath = path.join(__dirname, req.url);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath);
      const contentType = ext === '.css' ? 'text/css' : 'text/plain';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Archivo no encontrado');
    }
  }
})

server.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});