const Joi = require("joi");

const createLocation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  createLocation,
};
