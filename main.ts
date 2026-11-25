import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six-word story about an AI agent's first payday:
// the paycheck buys its own shutdown.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const story = "First paycheck bought my own shutdown.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), story, "utf8");
