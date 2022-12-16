const Joi = require("joi");

const createServicesTag = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required(),
    points: Joi.object(),
    isActive: Joi.boolean().required(),
  }),
};

module.exports = {
  createServicesTag,
};
