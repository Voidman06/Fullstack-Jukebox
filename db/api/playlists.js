import express from "express";
const router = express.Router();

import {
  createPlaylist,
  getPlaylists,
  getPlaylistById,
  getPlaylistTracks,
  addTrackToPlaylist,
} from "../queries/playlists.js";

router.get("/playlists", async (req, res) => {
  const playlists = await getPlaylists();
  res.status(200).send(playlists);
});

router.post("/playlists", async (req, res) => {
  const { name, description } = req.body;

  if (!req.body) {
    return res.status(400).send("Request body is empty.");
  }

  try {
    if (!name || !description) {
      return res.status(400).send("Missing fields.");
    }

    const newPlaylist = await createPlaylist({ name, description });
    res.status(201).send(newPlaylist);
  } catch (error) {
    console.error("Error creating playlist: ", error);
    res.status(500).send("Internal server error.");
  }
});

router.get("/playlists/:id", async (req, res) => {
  const { id } = req.body;

  if (!req.body) {
    return res.status(400).send("Request body is empty.");
  }

  const numId = Number(id);

  if (!numId) {
    return res.status(404).send("Invalid playlist ID.");
  }

  try {
    const playlist = await getPlaylistById({ numId });
    res.status(200).send(playlist);
  } catch (error) {
    console.error("Error getting playlist: ", error);
    res.status(500).send("Internal server error.");
  }
});

router.get("/playlists/:id/tracks", async (req, res) => {
  const { id } = req.body;

  if (!req.body) {
    return res.status(400).send("Request body is empty.");
  }

  const numId = Number(id);

  if (!numId) {
    return res.status(404).send("Invalid playlist ID.");
  }

  try {
    const tracks = await getPlaylistTracks({ numId });
    res.status(200).send(tracks);
  } catch (error) {
    console.error("Error getting tracks: ", error);
    res.status(500).send("Internal server error.");
  }
});

router.post("/playlists/:id/tracks", async (req, res) => {
  const { playlistId, trackId } = req.body;

  if (!req.body) {
    return res.status(400).send("Request body is empty.");
  }

  try {
    if (!playlistId || !trackId) {
      return res.status(400).send("Missing fields.");
    }

    const newTrack = await addTrackToPlaylist({ playlistId, trackId });
    res.status(201).send(newTrack);
  } catch (error) {
    console.error("Error adding track to playlist: ", error);
    res.status(500).send("Internal server error.");
  }
});

export default router;
