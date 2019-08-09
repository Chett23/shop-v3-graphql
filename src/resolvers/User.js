const User = {
  cart: ({ id }, args, context) => {
    return context.prisma.user({ id }).items()
  },
}

module.exports = {
  User,
}