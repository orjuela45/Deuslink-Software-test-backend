import { Response, Request } from "express";
import { validationResult } from "express-validator";

export const validateFieldsRequest = (req: Request, res: Response, next: Function) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
