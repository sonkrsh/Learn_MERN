const Joi = require("joi");

const createCarFuel = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image_uuid: Joi.string().required(),
  }),
};

const deleteCarFuel = {
  body: Joi.object().keys({
    carFuel_uuid: Joi.string().required(),
  }),
};

module.exports = {
  createCarFuel,
  deleteCarFuel,
};
