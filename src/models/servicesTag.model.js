const { DataTypes } = require("sequelize");
const { isEqual, isEmpty } = require("lodash");
const sequelize = require("../config/database");

const servicesTag = sequelize.define(
  "servicesTag",
  {
    servicesTag_uuid: {
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
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    points: {
      type: DataTypes.JSON,
      get: function () {
        const returnValue = this.getDataValue("points");
        if (isEqual(typeof returnValue, "object")) return returnValue;
        if (isEmpty(returnValue)) return returnValue;
        return JSON.parse(returnValue);
      },
    },
  },
  {
    underscored: true,
  }
);

module.exports = servicesTag;
