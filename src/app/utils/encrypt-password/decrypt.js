import bcrypt from 'bcryptjs'

async function DecryptPassword (password, passwordCompare) {
  const passwordMatch = bcrypt.compare(password, passwordCompare)
  return passwordMatch
}

export default DecryptPassword
