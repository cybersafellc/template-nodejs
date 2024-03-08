import { ResponseError } from "../error/response-error.js";

export const pageNotFound = async (req, res, next) => {
  try {
    throw new ResponseError(404, "page not found");
  } catch (error) {
    next(error);
  }
};
