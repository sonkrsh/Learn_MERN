const { servicesTagModel } = require("../models");
const httpStatus = require("http-status");
const { get } = require("lodash");

const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");

const createServicesTag = async (req, res, next) => {
  try {
    const resData = await servicesTagModel.create(get(req, "body"));

    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

module.exports = { createServicesTag };
