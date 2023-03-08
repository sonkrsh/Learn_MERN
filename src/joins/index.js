const location = require("../models/location.model");
const products = require("../models/products.model");
const carCompany = require("../models/carCompany.model");
const carModel = require("../models/carModel.model");
const carFuel = require("../models/carFuel.model");
const carServices = require("../models/carServices.model");
const servicesTag = require("../models/servicesTag.model");
const points = require("../models/points.model");
const userRoles = require("../models/userRoles.model");
const users = require("../models/users.model");
const image = require("../models/image.model");

carCompany.hasMany(carModel, { foreignKey: "car_company_uuid" });
carCompany.hasMany(products, { foreignKey: "car_company_uuid" });
carModel.hasMany(products, { foreignKey: "car_model_uuid" });
location.hasMany(products, { foreignKey: "location_uuid" });
carFuel.hasMany(products, { foreignKey: "car_fuel_uuid" });
image.hasMany(servicesTag, { foreignKey: "image_uuid" });
image.hasMany(carFuel, { foreignKey: "image_uuid" });
image.hasMany(carServices, { foreignKey: "image_uuid" });
servicesTag.hasMany(carServices, { foreignKey: "services_tag_uuid" });
points.hasMany(carServices, { foreignKey: "points_uuid" });
userRoles.hasMany(users, { foreignKey: "userRoles_uuid" });
image.hasMany(carCompany, { foreignKey: "image_uuid" });
image.hasMany(carModel, { foreignKey: "image_uuid" });

// carModel.belongsTo(carCompany, { foreignKey: "car_company_uuid" });
products.belongsTo(carCompany, { foreignKey: "car_company_uuid" });
products.belongsTo(carModel, { foreignKey: "car_model_uuid" });
products.belongsTo(location, { foreignKey: "location_uuid" });
products.belongsTo(carFuel, { foreignKey: "car_fuel_uuid" });
products.belongsTo(carServices, { foreignKey: "car_services_uuid" });
carServices.belongsTo(servicesTag, { foreignKey: "services_tag_uuid" });
carServices.belongsTo(points, { foreignKey: "points_uuid" });

// carServices.belongsTo(points, { foreignKey: "points_uuid" });
// users.belongsTo(userRoles, { foreignKey: "userRoles_uuid" });
