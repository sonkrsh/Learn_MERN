const { carCompanyModel } = require("../models");
const httpStatus = require("http-status");
const { get, isEmpty, isEqual } = require("lodash");
const generateImageName = require("../utils/generateImageName");
const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");
const config = require("../config/config");
const uploadImage = require("../utils/uploadImage");

const createCarCompany = async (req, res, next) => {
  try {
    const resData = await carCompanyModel.create(get(req, "body"));
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

const deleteCarCompany = async (req, res, next) => {
  try {
    const resData = await carCompanyModel.destroy({
      where: {
        carCompany_uuid: get(req, "body.carCompany_uuid"),
      },
    });

    if (resData) successHandle(res, httpStatus.OK, resData);
    return next(new ApiError(httpStatus.NOT_FOUND));
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};
module.exports = { createCarCompany, deleteCarCompany };
