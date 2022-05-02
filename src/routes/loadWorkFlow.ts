import express, { Request, Response } from "express";
import { Specification } from "../models/specification";

const router = express.Router();

router.get("/api/workflows", async (req: Request, res: Response) => {
  const specifications = await Specification.find({});
  res.status(200).json(specifications);
});

export { router as loadeWorkFlow };
