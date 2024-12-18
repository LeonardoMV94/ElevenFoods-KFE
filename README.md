# ElevenFoods | Proyecto Comida rápida

## Descripcion

Aplicación web de comida rápida

## Tecnologias a usar

- HTML
- CSS
- JavaScript
- Bootstrap
- Node.js

### comandos para subir cambios
```bash
git init
git clone https://github.com/LeonardoMV94/ElevenFoods-KFE.git
git checkout -b tu-rama # primero crea tu rama
# ... realiza tus cambios ...
git add . # agrega los archivos al rastreo de git
git commit -m "mensaje" # añadir cambios
git push -u origin tu-rama # subir cambios a tu rama remota por primera vez
git push # desde la segunda vez
# solicitar el pull request en el boton verde del repositorio de github
```

### comandos para obtener los ultimos cambios de la rama main en tu rama
```bash
git checkout main # cambia a la rama main
git pull -u origin main # obtener los ultimos cambios primera vez
git pull origin main # despues de la segunda vez
git checkout tu-rama # cambia a tu rama
git merge main # combinar cambios actualizados de main a tu rama
```

### Inicializar proyecto de node
```bash
## descargar dependencias
npm install

## ejecutar en modo desarrollador
npm run dev
```