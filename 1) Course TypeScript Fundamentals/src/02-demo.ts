const boom = () => {
  throw new Error('Boom!');
};

const validatorHandler2 = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom());
    }
    next();
  };
};
