import BadRequest from '../utils/errors/BadRequest'

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

  return {
    statusCode: 200,
    body: {
      token: 'my token'
    }
  }
}

export default SignInService
