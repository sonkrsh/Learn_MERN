const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { productsValidation } = require("../../../validations");
const { productsController } = require("../../../controllers");

const router = express.Router();

router
  .route("/products")
  .post(
    verifyAuth(),
    validate(productsValidation.createProducts),
    productsController.createProducts
  )
  .get(verifyAuth(), productsController.getProducts);

module.exports = router;
