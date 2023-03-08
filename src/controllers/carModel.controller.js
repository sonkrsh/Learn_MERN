const { carModelModel, carCompanyModel } = require("../models");
const httpStatus = require("http-status");
const { get } = require("lodash");

const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");

const createCarModel = async (req, res, next) => {
  try {
    const resData = await carModelModel.create(get(req, "body"));
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};
const getCarModel = async (req, res, next) => {
  try {
    const resData = await carModelModel.findAll({});
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

module.exports = { createCarModel, getCarModel };
