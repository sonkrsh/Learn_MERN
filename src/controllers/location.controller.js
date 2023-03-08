const { locationModel } = require("../models");
const httpStatus = require("http-status");
const { get } = require("lodash");

const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");

const createLocation = async (req, res, next) => {
  try {
    const resData = await locationModel.create(get(req, "body"));
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

const getLocation = async (req, res, bext) => {
  try {
    const resData = await locationModel.findAll({});
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

module.exports = { createLocation, getLocation };
