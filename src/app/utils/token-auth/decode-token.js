import jwt from 'jwt-simple'

async function DecodeTokenAuth (tokenAuth) {
  const devHashToken = 'dev_hash'
  try {
    const tokenAuthDecoded = await jwt.decode(tokenAuth, devHashToken)
    return tokenAuthDecoded
  } catch (error) {
    return false
  }
}

export default DecodeTokenAuth
