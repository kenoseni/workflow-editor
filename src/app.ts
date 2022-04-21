import express from "express";
import dotenv from "dotenv";

import { saveWorkFlow, loadeWorkFlow } from "./routes";

dotenv.config({ path: ".env" });

const app = express();

app.use(express.json());

app.use(saveWorkFlow);
app.use(loadeWorkFlow);

export { app };
