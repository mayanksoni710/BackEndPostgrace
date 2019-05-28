const users = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: {
      type: DataTypes.TEXT,
    },
    gender: {
      type: DataTypes.TEXT,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.TEXT,
    },
  })
  Users.associate = (models) => {
    Users.hasMany(models.Products)
  }
  Users.associate = (models) => {
    Users.hasMany(models.Orders)
    Users.hasMany(models.Suppliers)
  }
  return Users
}

export default users
