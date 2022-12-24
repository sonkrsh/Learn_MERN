const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const userRoles = sequelize.define(
  "userRoles",
  {
    userRoles_uuid: {
      allowNull: false,
      primaryKey: true,
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
  },
  {
    underscored: true,
  }
);

module.exports = userRoles;
