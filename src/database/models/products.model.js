const products = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    productName: {
      type: DataTypes.TEXT,
    },
    productDescription: {
      type: DataTypes.TEXT,
    },
    productUnitPrice: {
      type: DataTypes.DOUBLE,
    },
    productQuantity: {
      type: DataTypes.INTEGER,
    },
    history: {
      type: DataTypes.TEXT,
      get() {
        try {
          return JSON.parse(this.getDataValue('history'))
        } catch (error) {
          return this.getDataValue('history')
        }
      },
      set(value) {
        return this.setDataValue('history', JSON.stringify(value))
      },
    },
    qRcode: {
      type: DataTypes.TEXT,
    },
  })
  Products.associate = (models) => {
    Products.belongsTo(models.Users)
    Products.belongsTo(models.Categories)
  }
  return Products
}

export default products
