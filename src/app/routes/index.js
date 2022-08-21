import { Router } from 'express'
import SignUpController from '../controllers/signup.js'
import SingInController from '../controllers/signin.js'

const route = Router()

route.post('/signup', SignUpController)
route.post('/signin', SingInController)

export default route
