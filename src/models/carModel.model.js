const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const carCompany = require("./carCompany.model");
const carModel = sequelize.define(
  "carModel",
  {
    carModel_uuid: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set: function (value) {
        this.setDataValue("name", value.trim());
      },
    },
    image: {
      type: DataTypes.STRING,
    },
    carCompany_uuid: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
  }
);

module.exports = carModel;
