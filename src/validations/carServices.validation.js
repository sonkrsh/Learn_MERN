const Joi = require("joi");

const createCarServices = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required(),
    time_taken_to_complete: Joi.number().required(),
    servicesTag_uuid: Joi.string().required(),
  }),
};

module.exports = {
  createCarServices,
};
