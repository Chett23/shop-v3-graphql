const jwt = require('jsonwebtoken')

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if(Authorization === '') {
    return process.env.GUEST_ID
  }  
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    console.log(jwt.verify(token, process.env.APP_SECRET))
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    return userId
  }

  throw new AuthError()
}

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

module.exports = {
  getUserId,
  AuthError
}