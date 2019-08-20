const { getUserId } = require('../utils')

const Query = {
  inventory(parent, args, context) {
    return context.prisma.items({})
  },
  user(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  },
  users(parent, args, context) {
    return context.prisma.users()
  }
}

module.exports = { Query }
