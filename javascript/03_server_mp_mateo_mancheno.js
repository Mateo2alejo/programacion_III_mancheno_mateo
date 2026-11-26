import { createServer } from 'node:http';

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Estadísticas de Fútbol - Servidor activo (Mateo Mancheno)\n');
  }
  else if (req.url === '/estadisticas') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Estadísticas de Fútbol</h1><p>Moisés Caicedo, Piero Hincapié y Enner Valencia - LigaPro y Selección</p>');
  }
  else {
    // Si la ruta no existe, devolvemos un Error 404
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 - Ruta no encontrada</h1>');
  }
});

// Inicia un servidor HTTP local en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor de Estadísticas de Fútbol escuchando en http://127.0.0.1:3000');
});