const fs = require("node:fs/promises");
const path = require("node:path");

async function listFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries.filter((e) => e.isFile()).map((e) => path.join(dir, e.name));
}

function pickOne(files, label, matcher) {
  const matched = files.filter((f) => matcher(path.basename(f)));
  if (matched.length === 0) {
    throw new Error(`NewTaskData: не найден файл для «${label}»`);
  }
  if (matched.length > 1) {
    const names = matched.map((f) => path.basename(f)).join(", ");
    console.warn(`[warn] NewTaskData: несколько файлов для «${label}», беру первый: ${names}`);
  }
  return matched[0];
}

/**
 * Legacy local-folder resolver (optional fallback when Jira is not configured).
 * Icons zip is no longer used — Jira ships a single PNG.
 */
async function resolveTaskData(newTaskDataDir) {
  const files = await listFiles(newTaskDataDir);

  return {
    dir: newTaskDataDir,
    iconsZip: null,
    keystoreTar: pickOne(files, "keystore tar.gz", (n) => /\.tar\.gz$/i.test(n)),
    googleServices: pickOne(files, "google-services.json", (n) =>
      /^google-services\.json$/i.test(n)
    ),
    sourceZip: pickOne(files, "_source zip", (n) => /_source/i.test(n) && /\.zip$/i.test(n)),
  };
}

module.exports = { resolveTaskData };
