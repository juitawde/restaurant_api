const logger = (req, res, next) => {
  const currentTime = new Date().toLocaleString();

  console.log(
    `[${currentTime}] ${req.method} ${req.originalUrl}`
  );

  next();
};

module.exports = logger;