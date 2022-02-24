'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    firtName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING(50),
    address: DataTypes.STRING,
    postalCode: DataTypes.STRING(50),
    city: DataTypes.STRING(50),
    country: DataTypes.STRING(50),
    job: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    price: DataTypes.STRING,
    dateOn: DataTypes.DATE,
    dateOff: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};