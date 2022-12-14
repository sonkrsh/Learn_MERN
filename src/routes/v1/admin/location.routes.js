const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { locationValidation } = require("../../../validations");
const { locationController } = require("../../../controllers");

const router = express.Router();

router
  .route("/location")
  .post(
    verifyAuth(),
    validate(locationValidation.createLocation),
    locationController.createLocation
  );

module.exports = router;
