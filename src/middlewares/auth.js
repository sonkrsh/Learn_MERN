const jwt = require("jsonwebtoken");
const { get, split, isEmpty } = require("lodash");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const config = require("../config/config");

const verifyAuth = () => async (req, res, next) => {
  const extractToken = split(get(req, "headers.authorization"), " ")[1];
  try {
    jwt.verify(extractToken, get(config, "jwt.secret"));
    next();
  } catch (error) {
    next(new ApiError(httpStatus.UNAUTHORIZED, error));
  }
};

const createAuth = async (user) => {
  return await jwt.sign(user, get(config, "jwt.secret"));
};

module.exports = {
  verifyAuth,
  createAuth,
};
