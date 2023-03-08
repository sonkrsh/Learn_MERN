const Joi = require("joi");

const createServicesTag = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image_uuid: Joi.string().required(),
    isActive: Joi.boolean().required(),
  }),
};

module.exports = {
  createServicesTag,
};
