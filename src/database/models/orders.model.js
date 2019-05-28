const orders = (sequelize, DataTypes) => {
  const Orders = sequelize.define('orders', {
    products: {
      type: DataTypes.TEXT,
      get() {
        try {
          return JSON.parse(this.getDataValue('products'))
        } catch (error) {
          return this.getDataValue('products')
        }
      },
      set(value) {
        return this.setDataValue('products', JSON.stringify(value))
      },
    },
    discountPercentageApplied: {
      type: DataTypes.INTEGER,
    },
    totalAmount: {
      type: DataTypes.INTEGER,
    },
    amountPaid: {
      type: DataTypes.INTEGER,
    },
    amountPending: {
      type: DataTypes.INTEGER,
    },
    isSuplierOrder: {
      type: DataTypes.BOOLEAN,
    },
    orderActiveStatus: {
      type: DataTypes.BOOLEAN,
    },
  })
  Orders.associate = (models) => {
    Orders.belongsTo(models.Suppliers)
    Orders.belongsTo(models.Users)
  }
  return Orders
}

export default orders
