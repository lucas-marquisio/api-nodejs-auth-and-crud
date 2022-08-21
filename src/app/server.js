import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes/index.js'

const server = express()

dotenv.config()
server.use(express.json())
server.use(cors())
server.use(route)

export default server
