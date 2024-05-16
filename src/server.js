import express from 'express'
import userRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import viewsRouter from './routes/views.router.js'
import { uploader } from './utils/multer.js'
import handlebars from 'express-handlebars'
import { productsSocket } from './utils/productsSocket.js'
import { connect } from 'mongoose'
import { connectDb } from './config/index.js'
import productsRouter from './routes/products.router.js'


const app = express()
const httpServer = new httpServer(app)
const io = new ServerIo(httpServer)

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('/public'))

connectDb()

app.engine('hbs',handlebars.engine({
    extname: '.hbs'
}))

app.set('views','src/views')
app.set('view engine', 'hbs')

app.use(productsSocket(io))

app.use('/subir-archivo', uploader.single('myFile'),(req,res)=>{
    if(!req.file){
        return res.send('No se puede subir el archivo')
    }

    res.send('Archivo subido')
})

app.use('/', viewsRouter)

app.use('/api/users', userRouter)
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

app.use((error, req, res, next)=>{
    console.log(error)
    res.status(500).send('Error 500 en el server')
})

httpServer.listen(PORT, error =>{
    if(error) console.log(error)
        console.log('Server escuchando en el puerto 8080')
})

let messages = []

io.on('connection', socket =>{
    console.log('Cliente conectado')

    socket.on('message', data =>{
        console.log('message data:', data)

        messages.push(data)

        io.emit('messageLogs', message)
    })
})