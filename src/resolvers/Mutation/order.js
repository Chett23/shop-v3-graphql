const order = {
  async addToCart(parent, {itemId, status, qty}, context) {
    return context.prisma.createItem({
        item: {connect: { id: itemId}},
        status,
        qty
    })
  },
}

module.exports = { order }
 