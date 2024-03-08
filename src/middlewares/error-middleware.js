import logger from "../applications/logging.js";
import { ResponseError } from "../error/response-error.js";

export const errorHandling = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.status).json({
      errors: err.message,
    }).end;
  } else {
    res.status(500).json({
      errors: err.message,
    }).end;

    console.log(err);
    logger.error(err.message);
  }
};
