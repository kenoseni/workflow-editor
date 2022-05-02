import express, { Request, Response } from "express";
import { body, CustomValidator } from "express-validator";
import { Specification } from "../models/specification";

import { validateRequest } from "@sage-mode/common";

const router = express.Router();

const isValidArray: CustomValidator = (value) => Array.isArray(value);
const notEmpty: CustomValidator = (value) => value.length > 0;

router.post(
  "/api/workflows",
  [
    body("purpose").trim(),
    body("scope").trim(),
    body("definitions").trim(),
    body("responsibilities").trim(),
    body("materials")
      .custom(isValidArray)
      .withMessage("Materials must be an array"),
    body("procedures")
      .custom(isValidArray)
      .withMessage("Procedures must be an array")
      .custom(notEmpty)
      .withMessage("Procedures cannot be empty"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      purpose,
      scope,
      definitions,
      responsibilities,
      materials,
      procedures,
    } = req.body;

    const specification = Specification.build({
      purpose,
      scope,
      definitions,
      responsibilities,
      materials,
      procedures,
    });
    await specification.save();
    res.status(201).json(specification);
  }
);

export { router as saveWorkFlow };
