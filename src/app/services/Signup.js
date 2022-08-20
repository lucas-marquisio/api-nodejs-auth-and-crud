import BadRequest from '../utils/errors/BadRequest'
import EncryptPassword from '../utils/encrypt-password/encrypt'

async function SignUpService (SingUpData) {
  const { name, email, password, passwordConfirmation } = SingUpData
  const passwordMatch = password === passwordConfirmation

  if (!name) return BadRequest('Missing param: name')
  if (!email) return BadRequest('Missing param: email')
  if (!password) return BadRequest('Missing param: password')
  if (!passwordMatch) return BadRequest('password not equal passwordConfirmation')

  const UserData = {
    name,
    email,
    password: await EncryptPassword(password)
  }

  return {
    statusCode: 200,
    body: UserData
  }
}

export default SignUpService
