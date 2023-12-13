const express = require ('express');
const app = express ()
const port =2000
const path = require ('path')

// levantando servidor
app.listen(port, ()=> console.log('ejecutandose en el puerto 2000'))

// determinar la ruta de los recursos aportados - imagenes- videos- etc
app.use(express.static(path.resolve(__dirname, '../public')))

console.log (__dirname, '../public');

//se determina las rutas de las diferentes paginas web que tendra la pagina web.
// ruta principal de la pagina web
app.get ('/', (req, res)=>{
    res. sendFile(path.resolve(__dirname, './views/home.html'))
})

//ruta para la pagina web de celulares
app.get ('/celulares', (req, res)=>{
    res. sendFile(path.resolve(__dirname, './views/celulares.html'))
})

//ruta para la pagina web de crearCuenta
app.get ('/crearCuenta', (req, res)=>{
    res. sendFile(path.resolve(__dirname, './views/crearCuenta.html'))
})

//ruta para la pagina web de ingresa
app.get ('/ingresa', (req, res)=>{
    res. sendFile(path.resolve(__dirname, './views/ingresa.html'))
})
//ruta para la pagina web de misCompras
app.get ('/misCompras', (req, res)=>{
    res. sendFile(path.resolve(__dirname, './views/misCompras.html'))
})

//ruta para la pagina web de Politica de Privacidad
app.get ('/politicaDePrivacidad', (req, res)=>{
    res. sendFile(path.resolve(__dirname, './views/politicaDePrivacidad.html'))
})