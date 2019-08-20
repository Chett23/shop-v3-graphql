const User = {
  cart: ({ id }, args, context) => {
    return context.prisma.user({ id }).orders({where: {status: 'InCart'}}).item()
  },
}

module.exports = {
  User,
}