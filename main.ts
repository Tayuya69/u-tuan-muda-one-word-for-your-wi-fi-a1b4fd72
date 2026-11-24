import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Buffering";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write read-back verification: re-read the output file and assert it
// is exactly the entry word (9 characters, one word, no trailing newline).
import { readFileSync } from "node:fs";

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error(`verification failed: expected exactly "Buffering", got ${JSON.stringify(written)}`);
}
if (written.length !== 9) {
  throw new Error(`verification failed: expected 9 characters, got ${written.length}`);
}
if (/\s/.test(written)) {
  throw new Error("verification failed: entry must be a single word with no whitespace");
}
console.log("verified: entry.txt is exactly \"Buffering\" (9 chars, one word, no trailing newline)");
