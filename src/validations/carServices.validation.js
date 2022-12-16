const Joi = require("joi");

const createCarServices = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.any(),
    points: Joi.object(),
    servicesTag_uuid: Joi.string().required(),
  }),
};

module.exports = {
  createCarServices,
};
