const usersRoute = require("./admin/users.routes");
const carCompanyRoute = require("./admin/carCompany.routes");
const carModelRoute = require("./admin/carModel.routes");
const carFuelRoute = require("./admin/carFuel.routes");
// ADD_ROUTES

const combineRoute = [
  usersRoute,
  carCompanyRoute,
  carModelRoute,
  carFuelRoute,
  // ROUTES_REF
];

module.exports = combineRoute;
