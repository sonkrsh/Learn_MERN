const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { carServicesValidation } = require("../../../validations");
const { carServicesController } = require("../../../controllers");
const upload = require("../../../utils/multer");

const router = express.Router();

router
  .route("/carServices")
  .post(
    verifyAuth(),
    upload.single("image"),
    validate(carServicesValidation.createCarServices),
    carServicesController.createCarServices
  );

module.exports = router;
