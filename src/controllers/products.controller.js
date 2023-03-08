const {
  productsModel,
  carCompanyModel,
  carModelModel,
  carServicesModel,
  servicesTagModel,
  locationModel,
  carFuelModel,
  pointsModel,
} = require("../models");
const httpStatus = require("http-status");
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
      attributes: ["price", "discount", "createdAt", "updatedAt"],
      include: [
        {
          model: carServicesModel,
          include: [servicesTagModel],
        },
        {
          model: carCompanyModel,
          include: [carModelModel],
        },
        {
          model: carServicesModel,
          include: [pointsModel],
        },
        carCompanyModel,
        carModelModel,
        locationModel,
        carFuelModel,
      ],
    });
    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};
module.exports = { createProducts, getProducts };
