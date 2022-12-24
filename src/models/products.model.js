const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const products = sequelize.define(
  "products",
  {
    products_uuid: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    location_uuid: {
      type: DataTypes.UUID,
      // defaultValue: "fb3c44b4-d5fd-458b-a120-143c028c80a0",
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
    carServices_uuid: {
      type: DataTypes.UUID,
    },
    pointsPrice_uuid: {
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

module.exports = products;
