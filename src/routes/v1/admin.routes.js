const usersRoute = require("./admin/users.routes");
const carCompanyRoute = require("./admin/carCompany.routes");
const carModelRoute = require("./admin/carModel.routes");
const carFuelRoute = require("./admin/carFuel.routes");
const locationRoute = require("./admin/location.routes");
const servicesTagRoute = require("./admin/servicesTag.routes");
const carServicesRoute = require("./admin/carServices.routes");
const uploadImageRoute = require("./admin/uploadImage.routes");
const productsRoute = require("./admin/products.routes");
const pointsRoute = require("./admin/points.routes");
const userRolesRoute = require("./admin/userRoles.routes");
const cartRoute = require("./admin/cart.routes");
// ADD_ROUTES

const combineRoute = [
  usersRoute,
  carCompanyRoute,
  carModelRoute,
  carFuelRoute,
  locationRoute,
  servicesTagRoute,
  carServicesRoute,
  uploadImageRoute,
  productsRoute,
  pointsRoute,
  userRolesRoute,
  cartRoute,
  // ROUTES_REF
];

module.exports = combineRoute;
