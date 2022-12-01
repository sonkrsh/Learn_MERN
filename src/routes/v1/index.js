const express = require("express");
const authRoute = require("./auth.routes");
const router = express.Router();
const config = require("../../config/config");

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
];

const devRoutes = [
  //   {
  //     path: "/docs",
  //     route: docsRoute,
  //   },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
