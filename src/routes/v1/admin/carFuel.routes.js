const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { carFuelValidation } = require("../../../validations");
const { carFuelController } = require("../../../controllers");

const router = express.Router();

router
  .route("/carFuel")
  .post(
    verifyAuth(),
    validate(carFuelValidation.createCarFuel),
    carFuelController.createCarFuel
  )
  .delete(
    verifyAuth(),
    validate(carFuelValidation.deleteCarFuel),
    carFuelController.deleteCarFuel
  );

module.exports = router;
