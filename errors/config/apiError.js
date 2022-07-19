class ApiError extends Error {
  constructor(statusCode, success, message) {
    super();
    object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    this.success = success;
    this.message = message;
    Error.captureStackTrace(this);
  }
}
module.exports - ApiError;
