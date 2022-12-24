const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { cartValidation } = require("../../../validations");
const { cartController } = require("../../../controllers");

const router = express.Router();

router
  .route("/cart")
  .post(
    verifyAuth(),
    validate(cartValidation.createCart),
    cartController.createCart
  );

module.exports = router;
