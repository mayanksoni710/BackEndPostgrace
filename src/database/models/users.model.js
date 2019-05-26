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
    Users.hasMany(models.Categories)
  }
  Users.associate = (models) => {
    Users.hasMany(models.Products)
  }
  return Users
}

export default users
