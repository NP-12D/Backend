import express from "express";
import { apiRouter } from "./api/api.js";
import { logger } from "./middlewares/logger.middleware.js";
const app = express();
const PORT = "9000";
app.use(express.json());
app.use(logger);
app.use("/api", apiRouter);


app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
