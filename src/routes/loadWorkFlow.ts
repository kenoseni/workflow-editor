import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/workflows", async (req: Request, res: Response) => {
  res.status(200).json();
});

export { router as loadeWorkFlow };
