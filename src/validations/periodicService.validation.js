const Joi = require("joi");

const createPeriodicService = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.any(),
    points: Joi.string().required(),
    work_done_in: Joi.string().required(),
  }),
};

module.exports = {
  createPeriodicService,
};
