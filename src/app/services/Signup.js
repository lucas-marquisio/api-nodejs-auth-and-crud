import BadRequest from '../utils/errors/BadRequest.js'
import EncryptPassword from '../utils/encrypt-password/encrypt.js'
import GeneratorId from '../utils/generate-id.js'

async function SignUpService (SingUpData) {
  const { name, email, password, passwordConfirmation } = SingUpData
  const passwordMatch = password === passwordConfirmation

  if (!name) return BadRequest('Missing param: name')
  if (!email) return BadRequest('Missing param: email')
  if (!password) return BadRequest('Missing param: password')
  if (!passwordMatch) return BadRequest('password not equal passwordConfirmation')

  const UserData = {
    id: GeneratorId(),
    name,
    email,
    password: await EncryptPassword(password)
  }

  const body = {
    message: 'User created!'
  }

  return {
    statusCode: 200,
    body
  }
}

export default SignUpService
