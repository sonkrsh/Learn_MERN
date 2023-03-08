const httpStatus = require("http-status");
const { imagesModel } = require("../models");
const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");
const generateImageName = require("../utils/generateImageName");
const uploadImage = require("../utils/uploadImage");

const createUploadImage = async (req, res, next) => {
  try {
    const dataInSequence = await generateImageName(req);

    await uploadImage(req, dataInSequence.imgShortId);

    const resData = await imagesModel.create({
      path: dataInSequence.combineData.image,
    });

    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

module.exports = { createUploadImage };
