const { DataTypes } = require("sequelize");
const { get } = require("lodash");
const sequelize = require("../config/database");

const location = sequelize.define("location", {
  location_uuid: {
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = location;
