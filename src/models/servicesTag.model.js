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
      set: function (value) {
        this.setDataValue("points", JSON.parse(value));
      },
    },
  },
  {
    underscored: true,
  }
);

module.exports = servicesTag;
