const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { pointsPriceValidation } = require("../../../validations");
const { pointsPriceController } = require("../../../controllers");

const router = express.Router();

router
  .route("/pointsPrice")
  .post(
    verifyAuth(),
    validate(pointsPriceValidation.createPointsPrice),
    pointsPriceController.createPointsPrice
  );

module.exports = router;
