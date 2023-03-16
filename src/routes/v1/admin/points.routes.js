const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { pointsValidation } = require("../../../validations");
const { pointsController } = require("../../../controllers");

const router = express.Router();

router
  .route("/points")
  .post(
    verifyAuth(),
    validate(pointsValidation.createPoints),
    pointsController.createPoints
  )
  .get(verifyAuth(), pointsController.getPoints);

module.exports = router;
