const express = require("express");
// const validate = require("../../middlewares/validate");
// const authValidation = require("../../validations/auth.validation");
// const authController = require("../../controllers/auth.controller");
// const auth = require("../../middlewares/auth");

const router = express.Router();

router.post("/", (req, resp) => {
  return resp.status(200).json("auth log");
});

module.exports = router;
