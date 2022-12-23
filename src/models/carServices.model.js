const { DataTypes } = require("sequelize");
const { isEqual } = require("lodash");
const sequelize = require("../config/database");

const carServices = sequelize.define(
  "carServices",
  {
    carServices_uuid: {
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
      allowNull: false,
    },
    points: {
      type: DataTypes.JSON,
      allowNull: false,
      get: function () {
        const returnValue = this.getDataValue("points");
        if (isEqual(typeof returnValue, "object")) return returnValue;
        else return JSON.parse(returnValue);
      },
    },
    time_taken_to_complete: {
      type: DataTypes.BIGINT,
    },
    servicesTag_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = carServices;
