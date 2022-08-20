/* eslint-disable no-undef */
import SignUpService from '../app/services/Signup'

describe('SignUp Service', () => {
  it('Should return 400 if no name is provided', async () => {
    const httpRequest = {
      name: '',
      email: 'any_email',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = await SignUpService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no email is provided', async () => {
    const httpRequest = {
      name: 'any_name',
      email: '',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = await SignUpService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no password is provided', async () => {
    const httpRequest = {
      name: 'any_name',
      email: 'any_email',
      password: '',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = await SignUpService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no password is provided', async () => {
    const httpRequest = {
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
      passwordConfirmation: ''
    }
    const httpResponse = await SignUpService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
