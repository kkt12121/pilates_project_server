import CustomError from "./error/customError";

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error: unknown) {
      if (error instanceof CustomError) {
        console.error(error.response?.data);
        return res.status(error.response?.status).json(error.message);
      }
    }
  };
};

export default asyncWrapper;
