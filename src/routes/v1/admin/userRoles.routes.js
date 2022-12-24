const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { userRolesValidation } = require("../../../validations");
const { userRolesController } = require("../../../controllers");

const router = express.Router();

router
  .route("/userRoles")
  .post(
    verifyAuth(),
    validate(userRolesValidation.createUserRoles),
    userRolesController.createUserRoles
  );

module.exports = router;
