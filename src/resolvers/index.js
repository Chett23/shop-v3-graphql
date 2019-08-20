const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { item } = require('./Mutation/item')
const { User } = require('./User')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...item
  },
  User,
}
