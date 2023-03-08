const Joi = require("joi");

const createPoints = {
  body: Joi.object().keys({
    points: Joi.array().items({
      name: Joi.string().required(),
    }),
  }),
};

module.exports = {
  createPoints,
};
