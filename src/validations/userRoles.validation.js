const Joi = require("joi");

const createUserRoles = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  createUserRoles,
};
