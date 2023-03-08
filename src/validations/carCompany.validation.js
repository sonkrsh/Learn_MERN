const Joi = require("joi");

const createCarCompany = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image_uuid: Joi.string().required(),
  }),
};
const deleteCarCompany = {
  body: Joi.object().keys({
    carCompany_uuid: Joi.string().required(),
  }),
};

module.exports = {
  createCarCompany,
  deleteCarCompany,
};
