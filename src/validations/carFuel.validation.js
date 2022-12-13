const Joi = require("joi");

const createCarFuel = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  createCarFuel,
};
