import BadRequest from '../utils/errors/BadRequest.js'
import GenerateTokenAuth from '../utils/token-auth/generate-token.js'
import FindUser from '../repositories/find-user.js'

async function SignInService (SignInData) {
  const { email, password } = SignInData

  const mockUser = {
    email: 'valid_email',
    password: 'valid_password'
  }

  if (!email) return BadRequest('Missing param: email')
  if (!password) return BadRequest('Missing param: password')
  if (!(mockUser.email === email)) return BadRequest('Email invalid.')
  if (!(mockUser.password === password)) return BadRequest('Password not match.')

  const userFound = await FindUser(email)

  delete userFound.password

  const hourInMiliseconds = 3600000
  const body = {
    ...userFound,
    token: await GenerateTokenAuth({
      id: userFound.id,
      exp: parseInt(hourInMiliseconds * 4)
    })
  }

  return {
    statusCode: 200,
    body
  }
}

export default SignInService
