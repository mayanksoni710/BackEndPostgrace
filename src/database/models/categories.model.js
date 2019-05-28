const categories = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    categoryName: {
      type: DataTypes.TEXT,
    },
  })
  Categories.associate = (models) => {
    Categories.hasMany(models.Products)
    Categories.belongsTo(models.BusinessTypes)
  }
  return Categories
}

export default categories
