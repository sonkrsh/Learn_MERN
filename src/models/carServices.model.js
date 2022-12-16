const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const carServices = sequelize.define(
  "carServices",
  {
    carServices_uuid: {
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
    },
    servicesTag_uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = carServices;
