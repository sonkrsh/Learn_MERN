const { carServicesModel } = require("../models");
const httpStatus = require("http-status");
const { get, isEmpty } = require("lodash");
const { createAuth } = require("../middlewares/auth");
const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");
const generateImageName = require("../utils/generateImageName");
const uploadImage = require("../utils/uploadImage");

const createCarServices = async (req, res, next) => {
  try {
    const resData = await carServicesModel.create(get(req, "body"));
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

module.exports = { createCarServices };
