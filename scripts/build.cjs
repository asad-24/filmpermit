const { spawnSync } = require("node:child_process");

const result = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build", "--webpack"], {
  stdio: "inherit",
  env: {
    ...process.env,
    RAYON_NUM_THREADS: "1",
    UV_THREADPOOL_SIZE: "1",
  },
});

if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
