const Joi = require("joi");

const createPoints = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  createPoints,
};
