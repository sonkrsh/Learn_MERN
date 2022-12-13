const usersRoute = require("./admin/users.routes");
const carCompanyRoute = require("./admin/carCompany.routes");
const carModelRoute = require("./admin/carModel.routes");
// ADD_ROUTES

const combineRoute = [
  usersRoute,
  carCompanyRoute,
  carModelRoute,
  // ROUTES_REF
];

module.exports = combineRoute;
