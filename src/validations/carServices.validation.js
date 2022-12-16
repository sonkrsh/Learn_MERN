const Joi = require("joi");

const createCarServices = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required(),
    points: Joi.object().required(),
    servicesTag_uuid: Joi.string().required(),
  }),
};

module.exports = {
  createCarServices,
};
