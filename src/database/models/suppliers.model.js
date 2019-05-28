const suppliers = (sequelize, DataTypes) => {
  const Suppliers = sequelize.define('suppliers', {
    supplierName: {
      type: DataTypes.TEXT,
    },
    supplierDetails: {
      type: DataTypes.TEXT,
    },
  })
  Suppliers.associate = (models) => {
    Suppliers.hasMany(models.Orders)
    Suppliers.belongsTo(models.Users)
  }
  return Suppliers
}

export default suppliers
