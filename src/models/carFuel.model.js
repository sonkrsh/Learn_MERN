const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const carFuel = sequelize.define(
  "carFuel",
  {
    carFuel_uuid: {
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

module.exports = carFuel;
