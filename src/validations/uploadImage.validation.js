const Joi = require("joi");

const createUploadImage = {
  body: Joi.object().keys({
    image: Joi.any(),
  }),
};

module.exports = {
  createUploadImage,
};
