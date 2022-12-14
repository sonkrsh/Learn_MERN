const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const periodicService = sequelize.define(
  "periodicService",
  {
    periodicService_uuid: {
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
    work_done_in: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
  }
);

module.exports = periodicService;
