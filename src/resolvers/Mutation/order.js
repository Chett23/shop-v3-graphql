const order = {
  async addToCart(parent, {itemId, status, qty}, context) {
    return context.prisma.createItem({
        item: {connect: { id: itemId}},
        status: INCART,
        qty
    })
  },
}

module.exports = { order }
 