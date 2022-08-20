import jwt from 'jwt-simple'

async function GenerateTokenAuth (payload) {
  const devHashToken = 'dev_hash'
  const tokenAuth = await jwt.encode(payload, devHashToken)
  return tokenAuth
}

export default GenerateTokenAuth
