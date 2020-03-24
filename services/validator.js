const validationResult = require("express-validator");

const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))
  };
};
