import db from "#db/client";

await db.connect();
await seedPlaylists();
await seedTracks();
await seedPlaylistsTracks();
await db.end();
console.log("🌱 Database seeded.");

async function seedPlaylists() {
  // TODO
  await db.query(`
    INSERT INTO playlists (name, description)
    VALUES
      ('Aurora Echoes', 'blah blah'),
      ('Velvet Horizon', 'blah blah'),
      ('Solar Mirage', 'blah blah'),
      ('Crimson Reverie', 'blah blah'),
      ('Midnight Drift', 'blah blah'),
      ('Golden Tides', 'blah blah'),
      ('Neon Bloom', 'blah blah'),
      ('Ivory Skyline', 'blah blah'),
      ('Eternal Pulse', 'blah blah'),
      ('Frozen Vale', 'blah blah');
  `);
}

async function seedTracks() {
  // TODO
  await db.query(`
    INSERT INTO tracks (name, duration_ms)
    VALUES
      ('Stellar Drift', 180000),
      ('Electric Dawn', 180000),
      ('Golden Mirage', 180000),
      ('Crimson Fade', 180000),
      ('Ivory Fields', 180000),
      ('Ocean in Glass', 180000),
      ('Midnight Lanterns', 180000),
      ('Frosted Path', 180000),
      ('Static Bloom', 180000),
      ('Dream Circuit', 180000),
      ('Silent Orbit', 180000),
      ('Fragments of Light', 180000),
      ('Solar Lullaby', 180000),
      ('Magenta Sky', 180000),
      ('Eternal Reign', 180000),
      ('Halcyon Road', 180000),
      ('Rift Horizon', 180000),
      ('Wanderlust', 180000),
      ('Frozen Ashes', 180000),
      ('Last Ember', 180000);
  `);
}

async function seedPlaylistsTracks() {
  // TODO
  await db.query(`
    INSERT INTO playlists_tracks (playlist_id, track_id)
    VALUES
      (1, 1),
      (2, 2),
      (3, 3),
      (4, 4),
      (5, 5),
      (6, 6),
      (7, 7),
      (8, 8),
      (9, 9),
      (10, 10),
      (11, 11),
      (12, 12),
      (13, 13),
      (14, 14),
      (15, 15);
  `);
}
