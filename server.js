import app from "./app.js";
import db from "./db/client.js";
import express from "express";
const router = express.Router();

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

router.get("/", async (req, res) => {
  res.send("Welcome to da jukebox!");
});

export default router;
