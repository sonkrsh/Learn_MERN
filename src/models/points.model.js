const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const points = sequelize.define(
  "points",
  {
    points_uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    points: {
      type: DataTypes.STRING,
      set: function (value) {
        const stringyFy = JSON.stringify(value);
        this.setDataValue("points", stringyFy);
      },
      get: function (value) {
        const parseData = JSON.parse(this.getDataValue(value));
        return parseData;
      },
    },
  },
  {
    underscored: true,
  }
);

module.exports = points;
