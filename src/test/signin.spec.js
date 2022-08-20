/* eslint-disable no-undef */

import SignInService from '../app/services/Signin'

describe('SignIn Service', () => {
  it('Should return 400 if no email is provided', async () => {
    const httpRequest = {
      email: '',
      password: 'valid_password'
    }
    const httpResponse = await SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no password is provided', async () => {
    const httpRequest = {
      email: 'valid_email',
      password: ''
    }
    const httpResponse = await SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if email not exists', async () => {
    const httpRequest = {
      email: 'invalid_email',
      password: 'valid_password'
    }
    const httpResponse = await SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual('Email invalid.')
  })

  it('Should return 400 if password not match', async () => {
    const httpRequest = {
      email: 'valid_email',
      password: 'invalid_password'
    }
    const httpResponse = await SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual('Password not match.')
  })

  it('Should return 200 if signin sucess', async () => {
    const httpRequest = {
      email: 'valid_email',
      password: 'valid_password'
    }
    const httpResponse = await SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toHaveProperty('token')
  })
})
