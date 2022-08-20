/* eslint-disable no-undef */

import SignInService from "../app/services/Signup"

describe('SignIn Service', () => {
  it('Should return 400 if no email is provided', () => {
    const httpRequest = {
      email: '',
      password: 'valid_password'
    }
    const httpResponse = SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if no password is provided', () => {
    const httpRequest = {
      email: 'valid_email',
      password: ''
    }
    const httpResponse = SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should return 400 if email not exists', () => {
    const httpRequest = {
      email: 'invalid_email',
      password: 'valid_password'
    }
    const httpResponse = SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual('Email invalid.')
  })

  it('Should return 400 if password not match', () => {
    const httpRequest = {
      email: 'valid_email',
      password: 'invalid_password'
    }
    const httpResponse = SignInService(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual('Password not match.')
  })
})
