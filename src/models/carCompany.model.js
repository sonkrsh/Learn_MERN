const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const carModel = require("./carModel.model");
const products = require("./products.model");

const carCompany = sequelize.define(
  "carCompany",
  {
    carCompany_uuid: {
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
    },
  },
  {
    underscored: true,
  }
);
carCompany.hasMany(carModel, { foreignKey: "car_company_uuid" });
carModel.belongsTo(carCompany, { foreignKey: "car_company_uuid" });

module.exports = carCompany;
