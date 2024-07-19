const globalErrorController = async (err, req, res, next) => {
  res.status(500).json({
    error: {
      message: err.message,
    },
  });
};

module.exports = globalErrorController;
