const asyncErrorHandler = (controller) => {
  return (req, res, next) => {
    controller(req, res, next).catch((err) => next(err));
  };
};

module.exports = asyncErrorHandler;
