const Joi = require("joi");

const createProducts = {
  body: Joi.object().keys({
    carCompany_uuid: Joi.string().required(),
    carModel_uuid: Joi.string().required(),
    carFuel_uuid: Joi.string().required(),
    location_uuid: Joi.string(),
    carServices_uuid: Joi.string().required(),
    pointsPrice_uuid: Joi.array().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
  }),
};

module.exports = {
  createProducts,
};
