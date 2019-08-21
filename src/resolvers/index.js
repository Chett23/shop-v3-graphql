const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { item } = require('./Mutation/item')
const { order } = require('./Mutation/order')
const { User } = require('./User')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...item,
    ...order,
  },
  User,
}
