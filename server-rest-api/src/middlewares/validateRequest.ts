import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

export const validateRequest =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      return next();
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };
