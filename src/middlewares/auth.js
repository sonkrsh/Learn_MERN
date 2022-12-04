const jwt = require("jsonwebtoken");
const { get, split, isEmpty } = require("lodash");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const config = require("../config/config");

const auth = () => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    const extractToken = split(get(req, "headers.authorization"), " ")?.[1];
    if (isEmpty(extractToken)) {
      new ApiError(httpStatus.BAD_REQUEST, "Auth Header not present");
    }
    jwt.verify(extractToken, get(config, "jwt.secret"));
  })
    .then(() => next())
    .catch((err) => next(new ApiError(httpStatus.UNAUTHORIZED, err)));
};
module.exports = auth;