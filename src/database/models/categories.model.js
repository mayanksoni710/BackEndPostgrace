const categories = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    categoryName: {
      type: DataTypes.TEXT,
    },
  })
  Categories.associate = (models) => {
    Categories.hasMany(models.Products)
  }
  Categories.associate = (models) => {
    Categories.belongsTo(models.Users)
  }
  return Categories
}

export default categories
