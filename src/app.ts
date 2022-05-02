import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { saveWorkFlow, loadeWorkFlow } from "./routes";
import { errorHandler, NotFoundError } from "@sage-mode/common";

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());

app.use(cors());

app.use(saveWorkFlow);
app.use(loadeWorkFlow);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
