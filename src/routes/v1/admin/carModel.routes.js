const express = require("express");
const validate = require("../../../middlewares/validate");
const upload = require("../../../utils/multer");
const { verifyAuth } = require("../../../middlewares/auth");
const { carModelValidation } = require("../../../validations");
const { carModelController } = require("../../../controllers");

const router = express.Router();

router
  .route("/carModel")
  .post(
    verifyAuth(),
    upload.single("image"),
    validate(carModelValidation.createCarModel),
    carModelController.createCarModel
  );

module.exports = router;
