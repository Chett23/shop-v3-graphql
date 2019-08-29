const { getUserId } = require('../utils')

const Query = {
  inventory(parent, args, context) {
    return context.prisma.items({})
  },
  item(parent, { id }, context) {
    return context.prisma.item({ id })
  },
  user(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  },
  users(parent, args, context) {
    return context.prisma.users()
  },
  admins(parent, args, context) {
    return context.prisma.users({ where: { role: 'ADMIN' } })
  }
}

module.exports = { Query }
