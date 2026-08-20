const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map(
      (error) => error.message
    );

    return res.status(400).json({
      message: "Validation error",
      errors: messages
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format."
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      message: "A record with this value already exists."
    });
  }

  res.status(500).json({
    message: "Internal server error.",
    error: err.message
  });
};

module.exports = errorHandler;