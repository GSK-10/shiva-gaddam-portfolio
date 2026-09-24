import { spawn, spawnSync } from "node:child_process";

const host = "127.0.0.1";
const port = "3000";
const baseUrl = `http://${host}:${port}`;

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  return result.status ?? 1;
}

async function waitForServer(url, timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for ${url}`);
}

function stopServer(server) {
  if (!server.pid || server.exitCode !== null) return;

  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(server.pid), "/t", "/f"], {
      stdio: "ignore",
    });
    return;
  }

  server.kill("SIGTERM");
}

const buildStatus = run(process.execPath, ["node_modules/next/dist/bin/next", "build"]);
if (buildStatus !== 0) process.exit(buildStatus);

const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", host, "--port", port],
  {
    cwd: process.cwd(),
    env: process.env,
    stdio: "inherit",
    windowsHide: true,
  },
);

let exitCode = 1;

try {
  await waitForServer(baseUrl);
  exitCode = run(process.execPath, ["node_modules/@playwright/test/cli.js", "test"]);
} finally {
  stopServer(server);
}

process.exit(exitCode);
