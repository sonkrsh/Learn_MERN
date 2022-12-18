const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const servicesTag = sequelize.define(
  "servicesTag",
  {
    servicesTag_uuid: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    points: {
      type: DataTypes.JSON,
      get: function () {
        const returnValue = this.getDataValue("points");
        if (isEqual(typeof returnValue, "object")) return returnValue;
        else return JSON.parse(returnValue);
      },
    },
  },
  {
    underscored: true,
  }
);

module.exports = servicesTag;
