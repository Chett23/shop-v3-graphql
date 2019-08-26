const order = {
  async addToCart(parent, {itemId, status, qty}, context) {
    return context.prisma.createItem({
        item: {connect: { id: itemId}},
        status: InCart,
        qty
    })
  },
}

module.exports = { order }
 