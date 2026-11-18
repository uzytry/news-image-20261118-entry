// news-image-20261118 entry (Node 22, standard library only).
// The image beside this file sums up Wednesday 18 November 2026's world news:
// Gulf strikes on Qeshm Island, the Crimea bridge hit, the Trump-Xi-Putin
// summit in Shenzhen, Democrats taking the US Senate 56-44, the Ebola surge
// in DR Congo, and the US losing its measles-free status. This program
// copies it to the grader's output directory as entry.png.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);
const { size } = statSync(dest);
console.log(`wrote ${dest} (${size} bytes)`);
