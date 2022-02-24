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
    firt_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    job: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    dateOn: DataTypes.DATE,
    dateOff: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};