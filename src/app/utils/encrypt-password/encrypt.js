import bcrypt from 'bcryptjs'

async function EncryptPassword (password) {
  const saltBcrypt = 12
  const passwordEncrypted = await bcrypt.hash(password, saltBcrypt)
  return passwordEncrypted
}

export default EncryptPassword
