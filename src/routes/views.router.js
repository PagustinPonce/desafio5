import { Router } from "express";
import { UserManagerMongo } from "../dao/usersManagerMongo.js";

const router = Router()

const products = [
    {id: '1', title: 'producto 1', precio: '100'},
    {id: '2', title: 'producto 2', precio: '101'},
    {id: '3', title: 'producto 3', precio: '102'},
    {id: '4', title: 'producto 4', precio: '103'},
    {id: '5', title: 'producto 5', precio: '104'}    
]

const user = {
    username: 'agustinponce',
    nombre: 'agustin',
    apellido: 'ponce',
    role: 'user'
}

router.get('/users', async (req, res)=>{
    const {numPage, limit} = req.query

    const userService = new UserManagerMongo()
    const {docs,page, hasPrevPage, hasNextPage, prevPage, nextPage} = await userService.getUsers({limit, numPage})

    res.render('users',{
        users: docs,
        page,
        hasNextPage,
        hasPrevPage,
        nextPage,
        prevPage
    })
})

router.get('/', async (req,res)=>{
    res.render('index',{products})
})

router.get('/chat', (req, res)=>{
    const {socketServer} = req

    socketServer.on('connection', socket=>{
        console.log('nuevo cliente conectado')

        const messages = []

        socket.on('message_cliente', data =>{
            console.log(data)

            messages.push({id: socket.id, message: data})

            socketServer.emit('messages_server', messages)
        })
    })

    res.render('chat',{
        styles: 'homeStyles.css'
    })
})

export default router