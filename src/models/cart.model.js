const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const cart = sequelize.define(
  "cart",
  {
    cart_uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    user_uuid: {
      type: DataTypes.UUID,
    },
    product_uuid: {
      type: DataTypes.UUID,
    },
    points_uuid: {
      type: DataTypes.UUID,
    },
  },
  {
    underscored: true,
  }
);

module.exports = cart;
