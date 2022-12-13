const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const carModel = sequelize.define("carModel", {
  carModel_uuid: {
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  carCompany_uuid: {
    type: DataTypes.STRING,
  },
});

module.exports = carModel;
