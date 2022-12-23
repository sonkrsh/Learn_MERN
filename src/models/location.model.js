const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const location = sequelize.define(
  "location",
  {
    location_uuid: {
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
  },
  {
    underscored: true,
  }
);

module.exports = location;
