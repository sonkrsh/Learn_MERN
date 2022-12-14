const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { servicesTagValidation } = require("../../../validations");
const { servicesTagController } = require("../../../controllers");

const router = express.Router();

router
  .route("/servicesTag")
  .post(
    verifyAuth(),
    validate(servicesTagValidation.createServicesTag),
    servicesTagController.createServicesTag
  );

module.exports = router;
