const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  role: Joi.string().pattern(/^(customer|admin|seller)$/),
});
const tokenSchema = Joi.object({
  token: Joi.string().length(10).required(),
});
const passwordSchema = Joi.object({
  password: Joi.string().min(8).max(25).required(),
  confirmPassword: Joi.ref("password"),
});

module.exports = { registerSchema, tokenSchema, passwordSchema };
