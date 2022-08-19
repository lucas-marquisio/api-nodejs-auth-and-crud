import BadRequest from '../utils/errors/BadRequest'

async function SignUpService (SingUpData) {
  const { name, email, password } = SingUpData
  if (!name) return BadRequest('Missing param: name')
  if (!email) return BadRequest('Missing param: email')
  if (!password) return BadRequest('Missing param: password')

  return {
    statusCode: 200,
    body: null
  }
}

export default SignUpService
