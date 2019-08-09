const item = {
  async addItem(parent, { name, description, price, stock, imgUrl, qty}, context) {
    return context.prisma.createItem({
        name,
        description,
        price,
        stock,
        imgUrl
    })
  },
}

module.exports = { item }
