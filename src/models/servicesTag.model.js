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
    image_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = servicesTag;
