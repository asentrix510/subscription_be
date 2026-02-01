const errorMiddleware = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.error(err);

  // Invalid ObjectId
  if (err.name === 'CastError') {
    error = new Error('Resource not found');
    error.statusCode = 404;
  }

  // Duplicate key
  if (err.code === 11000) {
    error = new Error('Duplicate field value entered');
    error.statusCode = 400;
  }

  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(val => val.message);
    error = new Error(messages.join(', '));
    error.statusCode = 400;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

export default errorMiddleware;
