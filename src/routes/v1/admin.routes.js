const usersRoute = require("./admin/users.routes");
const carCompanyRoute = require("./admin/carCompany.routes");
const carModelRoute = require("./admin/carModel.routes");
const carFuelRoute = require("./admin/carFuel.routes");
const locationRoute = require("./admin/location.routes");
const periodicServiceRoute = require("./admin/periodicService.routes");
// ADD_ROUTES

const combineRoute = [
  usersRoute,
  carCompanyRoute,
  carModelRoute,
  carFuelRoute,
  locationRoute,
  periodicServiceRoute,
  // ROUTES_REF
];

module.exports = combineRoute;
