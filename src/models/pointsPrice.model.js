const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const pointsPrice = sequelize.define(
  "pointsPrice",
  {
    pointsPrice_uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    location_uuid: {
      type: DataTypes.UUID,
    },
    carCompany_uuid: {
      type: DataTypes.UUID,
    },
    carModel_uuid: {
      type: DataTypes.UUID,
    },
    carFuel_uuid: {
      type: DataTypes.UUID,
    },
    points_uuid: {
      type: DataTypes.UUID,
    },
    price: {
      type: DataTypes.BIGINT,
    },
    discount: {
      type: DataTypes.BIGINT,
    },
  },
  {
    underscored: true,
  }
);

module.exports = pointsPrice;
