const Joi = require("joi");

const createPointsPrice = {
  body: Joi.object().keys({
    carCompany_uuid: Joi.string().required(),
    carModel_uuid: Joi.string().required(),
    carFuel_uuid: Joi.string().required(),
    location_uuid: Joi.string().required(),
    points_uuid: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
  }),
};

module.exports = {
  createPointsPrice,
};
