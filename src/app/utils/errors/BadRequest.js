function BadRequest (error) {
  return {
    statusCode: 400,
    body: error
  }
}

export default BadRequest
