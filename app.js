import express from "express";
const app = express();
export default app;

import tracksRouter from "./db/api/tracks.js";
import playlistsRouter from "./db/api/playlists.js";

app.use(express.json());

app.use("/tracks", tracksRouter);
app.use("/playlists", playlistsRouter);

app.use((error, req, res, next) => {
  console.error("Database error:", error);
  switch (error.code) {
    // Invalid type
    case "22P02":
      return res.status(400).send(error.message);
    // Unique constraint
    case "23505":
      return res.status(400).send(error.detail);
    // Foreign key
    case "23503":
      return res.status(400).send(error.detail);
    default:
      next(error);
  }
});
