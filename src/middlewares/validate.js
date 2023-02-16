const validateRequest = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    res.status(400);
    res.json({ message: validationResult.error.message });
  } else {
    next();
  }
};

const validateParams = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.params);
  if (validationResult.error) {
    res.status(400);
    res.json({ message: validationResult.error.message });
  } else {
    next();
  }
};

const validateQuery = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.query);
  if (validationResult.error) {
    res.status(400);
    res.json({ message: validationResult.error.message });
  } else {
    next();
  }
};

module.exports = { validateRequest, validateParams, validateQuery };
