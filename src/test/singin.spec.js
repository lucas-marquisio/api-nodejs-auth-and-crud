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
})
