import express, { Request, Response } from "express";

const router = express.Router();

router.post("/api/workflows", async (req: Request, res: Response) => {
  res.status(201).json();
});

export { router as saveWorkFlow };
