import CustomError from "./customError";

/* 404 code */
export class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.response.status = 404;
  }
}

/* 412 code */
export class PreconditionFailed extends CustomError {
  constructor(message) {
    super(message);
    this.response.status = 412;
  }
}
