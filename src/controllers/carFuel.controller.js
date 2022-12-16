const { carFuelModel } = require("../models");
const httpStatus = require("http-status");
const { get, isEmpty } = require("lodash");
const { createAuth } = require("../middlewares/auth");
const successHandle = require("../middlewares/successHandle");
const ApiError = require("../utils/ApiError");
const generateImageName = require("../utils/generateImageName");
const uploadImage = require("../utils/uploadImage");

const createCarFuel = async (req, res, next) => {
  try {
    const dataInSequence = await generateImageName(req);

    await uploadImage(req, dataInSequence.imgShortId);
    const resData = await carFuelModel.create(dataInSequence.combineData);

    successHandle(res, httpStatus.CREATED, resData);
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

const deleteCarFuel = async (req, res, next) => {
  try {
    const resData = await carFuelModel.destroy({
      where: {
        carFuel_uuid: get(req, "body.carFuel_uuid"),
      },
    });

    if (resData) successHandle(res, httpStatus.OK, resData);
    return next(new ApiError(httpStatus.NOT_FOUND));
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err));
  }
};

module.exports = { createCarFuel, deleteCarFuel };
