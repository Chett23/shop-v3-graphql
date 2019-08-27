const User = {
  cart: ({ id }, args, context) => {
    return context.prisma.user({ id }).orders({where: {status: 'INCART'}}).item()
  },
}

module.exports = {
  User,
}