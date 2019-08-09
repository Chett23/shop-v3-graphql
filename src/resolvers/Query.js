const { getUserId } = require('../utils')

const Query = {
  cart(parent, args, context) {
    const id = getUserId(context)
    const where = {
      purchased: false,
      author: {
        id,
      },
    }
    return context.prisma.items({ where })
  },
  items(parent, args, context) {
    return context.prisma.items({})
  },
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  },
}

module.exports = { Query }
