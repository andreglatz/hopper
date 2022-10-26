function validator(schema) {
  return async (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({ errors: error.details.map(({ message }) => message) });
    }

    next();
  };
}

module.exports = validator;
