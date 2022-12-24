const Joi = require("joi");

const createCart = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    user_uuid: Joi.string().required(),
    product_uuid: Joi.string().required(),
    points_uuid: Joi.string().required(),
  }),
};

module.exports = {
  createCart,
};
