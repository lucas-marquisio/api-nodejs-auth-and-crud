/* eslint-disable no-undef */
import SignUpService from '../app/services/Signup'

describe('SignUp Service', () => {
  it('Should return 400 if no name is provided', async () => {
    const httpRequest = {
      email: 'any_email',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = await SignUpService(httpRequest)
    console.log(httpResponse)
    expect(httpResponse.statusCode).toBe(400)
  })
})
