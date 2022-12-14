const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { periodicServiceValidation } = require("../../../validations");
const { periodicServiceController } = require("../../../controllers");
const upload = require("../../../utils/multer");

const router = express.Router();

router
  .route("/periodicService")
  .post(
    verifyAuth(),
    upload.single("image"),
    validate(periodicServiceValidation.createPeriodicService),
    periodicServiceController.createPeriodicService
  );

module.exports = router;
