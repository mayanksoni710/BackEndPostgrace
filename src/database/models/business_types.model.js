const businessTypes = (sequelize, DataTypes) => {
  const BusinessTypes = sequelize.define('businesstypes', {
    businessType: {
      type: DataTypes.TEXT,
    },
  })
  BusinessTypes.associate = (models) => {
    BusinessTypes.hasMany(models.Categories)
  }
  return BusinessTypes
}

export default businessTypes
