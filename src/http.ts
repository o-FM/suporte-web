import express from 'express'

import { createServer } from "http"
import { Server, Socket } from "socket.io";
import path from 'path'

import './database'
import { routes } from "./routes";

const server = express()

// Configurando HTML para utilização no projeto...
server.use(express.static(path.join(__dirname, "..", "/public")))
server.set("views", path.join(__dirname, "..", "/public"))
server.engine("html", require("ejs").renderFile)
server.set("view engine", "html")

server.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
})

const http = createServer(server) // Criando protocolo HTTP...
const io = new Server(http) // Criando protocolo WebSocket...

io.on("connection", (socket: Socket) => {
    console.log("Se conectou ", socket.id)
    
})

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use(routes)

export { http, io }