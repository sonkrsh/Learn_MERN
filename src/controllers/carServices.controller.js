const { carServicesModel, servicesTagModel } = require("../models");
const httpStatus = require("http-status");
const { get } = require("lodash");

const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");

const createCarServices = async (req, res, next) => {
  try {
    const resData = await carServicesModel.create(get(req, "body"));

    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

const getCarServices = async (req, res, next) => {
  try {
    const resData = await carServicesModel.findAll({
      include: servicesTagModel,
    });

    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

module.exports = { createCarServices, getCarServices };
