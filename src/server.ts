import express, { request, response } from 'express'

const port = 3000
const server = express()
 

server.get('/', (request, response) => {
    return response.json({
        menssage: "Bem vindos Usuários"
    })
})

server.post('/users', (request, response) => {
    return response.json({
        message: "Usuário cadastrado com sucesso"
    })
})

server.listen(port, () => console.log(`BACK-END Server is running on port ${port}`))