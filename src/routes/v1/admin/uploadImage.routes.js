const express = require("express");
const validate = require("../../../middlewares/validate");
const { verifyAuth } = require("../../../middlewares/auth");
const { uploadImageValidation } = require("../../../validations");
const { uploadImageController } = require("../../../controllers");
const upload = require("../../../utils/multer");

const router = express.Router();

router
  .route("/uploadImage")
  .post(
    verifyAuth(),
    upload.single("image"),
    validate(uploadImageValidation.createUploadImage),
    uploadImageController.createUploadImage
  );

module.exports = router;
