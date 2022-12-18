const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { carServicesValidation } = require("../../../validations");
const { carServicesController } = require("../../../controllers");

const router = express.Router();

router
  .route("/carServices")
  .post(
    verifyAuth(),
    validate(carServicesValidation.createCarServices),
    carServicesController.createCarServices
  )
  .get(
    verifyAuth(),
    // validate(carServicesValidation.createCarServices),
    carServicesController.getCarServices
  );

module.exports = router;
