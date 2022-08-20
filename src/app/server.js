import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const server = express()

dotenv.config()
server.use(express.json())
server.use(cors())

export default server
