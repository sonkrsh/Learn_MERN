const Joi = require("joi");

const createCarModel = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    carCompany_uuid: Joi.string().required(),
    image: Joi.any(),
  }),
};

module.exports = {
  createCarModel,
};
