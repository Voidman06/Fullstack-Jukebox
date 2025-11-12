import express from "express";
const router = express.Router();

import { getTracks, getTrackById } from "../queries/tracks.js";

router.get("/tracks", async (req, res) => {
  const tracks = await getTracks();
  res.status(200).send(tracks);
});

router.get("/tracks/:id", async (req, res) => {
  const { id } = req.body;
  const track = await getTrackById(id);
  res.status(200).send(track);
});

export default router;
