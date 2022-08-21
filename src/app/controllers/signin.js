import SignInService from '../services/Signin.js'

async function SignInController (req, res) {
  try {
    const userData = req.body
    const response = await SignInService(userData)
    const { statusCode, body } = response
    return res.status(statusCode).json(body)
  } catch (error) {
    return res.status(500).json({ error: 'internal error.' })
  }
}

export default SignInController
