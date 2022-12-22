const {
  productsModel,
  carCompanyModel,
  carModelModel,
  carServicesModel,
  servicesTagModel,
} = require("../models");
const httpStatus = require("http-status");
const { get, isEmpty } = require("lodash");
const { createAuth } = require("../middlewares/auth");
const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");

const createProducts = async (req, res, next) => {
  try {
    const resData = await productsModel.create(req.body);
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

const getProducts = async (req, res, next) => {
  try {
    const resData = await productsModel.findAll({
      include: [
        {
          model: carServicesModel,
          include: [servicesTagModel],
        },
        carCompanyModel,
        carModelModel,
      ],
    });
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};
module.exports = { createProducts, getProducts };
