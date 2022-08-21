import { Router } from 'express'
import SignUpController from '../controllers/signup.js'

const route = Router()

route.post('/signup', SignUpController)

export default route
