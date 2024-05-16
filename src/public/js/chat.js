const socket = io()

const input = document.getElementById('message')

const messageList = document.getElementById('list-message')

input.addEventListener('keyup', event =>{
    if(event.key === 'Enter'){
        socket.emit('message_cliente',input.value)
        input.value= ''
    }
})

socket.on('messages_server', data=>{
    console.log(data)
})