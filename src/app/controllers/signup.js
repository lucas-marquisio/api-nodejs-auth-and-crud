import SignUpService from '../services/Signup.js'

async function SignUpController (req, res) {
  try {
    const userData = req.body
    const response = await SignUpService(userData)
    const { statusCode, body } = response
    return res.status(statusCode).json(body)
  } catch (error) {
    return res.status(500).json({ error: 'internal error.' })
  }
}

export default SignUpController
