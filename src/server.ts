import express, { request, response } from 'express'
import './database'
import { routes } from "./routes";

const port = 3000
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use(routes)
 
server.listen(port, () => console.log(`BACK-END Server is running on port ${port}`))