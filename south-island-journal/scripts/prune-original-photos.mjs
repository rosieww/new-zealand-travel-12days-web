import { readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
// Keep camera originals locally; deploy only the optimized daily photos.
const output = path.resolve('dist/client');
for (const entry of await readdir(output, { withFileTypes: true })) {
  if (entry.isFile() && /^DAY\d+\.(jpe?g|dng)$/i.test(entry.name)) {
    await unlink(path.join(output, entry.name));
  }
}
