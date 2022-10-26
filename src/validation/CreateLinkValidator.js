const joi = require("joi");

const schema = joi.object({
  path: joi.string().required(),
  target: joi.string().required(),
});

module.exports = schema;
