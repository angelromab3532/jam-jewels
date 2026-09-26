/**
 * Fix-up after ObfV5: imports, LoaderSpark rename, dedupe Part02 V5, GameInit import
 */
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const FRAG = 'ufjaxmfgwjewebls';

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

function mapIdentifiers(src, mapFn) {
  const out = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const c2 = src[i + 1];
    if (c === '/' && c2 === '/') {
      const end = src.indexOf('\n', i);
      const e = end === -1 ? n : end + 1;
      out.push(src.slice(i, e));
      i = e;
      continue;
    }
    if (c === '/' && c2 === '*') {
      const end = src.indexOf('*/', i + 2);
      const e = end === -1 ? n : end + 2;
      out.push(src.slice(i, e));
      i = e;
      continue;
    }
    if (c === "'" || c === '"') {
      let j = i + 1;
      while (j < n) {
        if (src[j] === '\\') {
          j += 2;
          continue;
        }
        if (src[j] === c) {
          j++;
          break;
        }
        j++;
      }
      out.push(src.slice(i, j));
      i = j;
      continue;
    }
    if (c === '`') {
      let j = i + 1;
      out.push('`');
      i = j;
      while (i < n) {
        if (src[i] === '\\') {
          out.push(src.slice(i, i + 2));
          i += 2;
          continue;
        }
        if (src[i] === '`') {
          out.push('`');
          i++;
          break;
        }
        if (src[i] === '$' && src[i + 1] === '{') {
          out.push('${');
          i += 2;
          let depth = 1;
          const start = i;
          while (i < n && depth > 0) {
            if (src[i] === "'" || src[i] === '"') {
              const q = src[i++];
              while (i < n) {
                if (src[i] === '\\') {
                  i += 2;
                  continue;
                }
                if (src[i] === q) {
                  i++;
                  break;
                }
                i++;
              }
              continue;
            }
            if (src[i] === '{') depth++;
            else if (src[i] === '}') {
              depth--;
              if (depth === 0) break;
            }
            i++;
          }
          out.push(mapIdentifiers(src.slice(start, i), mapFn));
          if (i < n && src[i] === '}') {
            out.push('}');
            i++;
          }
          continue;
        }
        out.push(src[i]);
        i++;
      }
      continue;
    }
    if (/[A-Za-z_$]/.test(c)) {
      let j = i + 1;
      while (j < n && /[A-Za-z0-9_$]/.test(src[j])) j++;
      out.push(mapFn(src.slice(i, j)));
      i = j;
      continue;
    }
    out.push(c);
    i++;
  }
  return out.join('');
}

// 1) Fix LoaderSparkJewel → LoaderSparkufjaxmfgwjeweblsJewel imports + symbols
const sparkMap = {
  LoaderJewelCrest: `Loader${FRAG}JewelCrest`,
  LoaderJewelSparks: `Loader${FRAG}JewelSparks`,
  LoaderSparkJewel: `LoaderSpark${FRAG}Jewel`,
};

for (const f of walk(path.join(ROOT, 'Layouts', 'Game'))) {
  let src = fs.readFileSync(f, 'utf8');
  const orig = src;
  src = src.replace(/LoaderSparkJewel/g, `LoaderSpark${FRAG}Jewel`);
  src = mapIdentifiers(src, (id) => sparkMap[id] || id);
  if (src !== orig) {
    fs.writeFileSync(f, src);
    console.log('spark rename:', path.relative(ROOT, f));
  }
}

// 2) GameInit: ensure import of V5 helpers from Part01
{
  const f = path.join(ROOT, 'Layouts', 'Game', `Game${FRAG}Init.tsx`);
  let src = fs.readFileSync(f, 'utf8');
  if (!src.includes(`GameInitPartObfV5HashMix`)) {
    // weird
  }
  if (!/from '\.\/GameufjaxmfgwjeweblsInitPart01'/.test(src)) {
    const importLine = `import { ufjaxmfgwjeweblsGameInitPartObfV5HashMix, ufjaxmfgwjeweblsGameInitPartObfV5SumOdds, ufjaxmfgwjeweblsGameInitPartObfV5ClampMod } from './GameufjaxmfgwjeweblsInitPart01';\n`;
    src = importLine + src;
    fs.writeFileSync(f, src);
    console.log('GameInit: added V5 import');
  } else if (!src.includes('GameInitPartObfV5HashMix')) {
    src = src.replace(
      /import \{([^}]*)\} from '\.\/GameufjaxmfgwjeweblsInitPart01'/,
      (m, inner) =>
        `import {${inner.replace(/,\s*$/, '')}, ufjaxmfgwjeweblsGameInitPartObfV5HashMix, ufjaxmfgwjeweblsGameInitPartObfV5SumOdds, ufjaxmfgwjeweblsGameInitPartObfV5ClampMod } from './GameufjaxmfgwjeweblsInitPart01'`,
    );
    fs.writeFileSync(f, src);
    console.log('GameInit: extended V5 import');
  } else {
    console.log('GameInit: import OK');
  }
}

// 3) LoaderufjaxmfgwjeweblsScreen: import V5 from Part01, remove local V5 defs
{
  const f = path.join(ROOT, 'Layouts', 'Game', 'screens', `Loader${FRAG}Screen.tsx`);
  let src = fs.readFileSync(f, 'utf8');
  // Update Part01 import to include V5
  if (!src.includes('LoaderScreenObfV5HashMix') || !/LoaderScreenObfV5HashMix/.test(src.split('from')[0] || '')) {
    src = src.replace(
      /import \{([^}]*)\} from '\.\/LoaderufjaxmfgwjeweblsScreenPart01'/,
      (m, inner) => {
        if (inner.includes('LoaderScreenObfV5')) return m;
        return `import {${inner.replace(/,\s*$/, '').trim()}, ufjaxmfgwjeweblsLoaderScreenObfV5HashMix, ufjaxmfgwjeweblsLoaderScreenObfV5SumOdds, ufjaxmfgwjeweblsLoaderScreenObfV5ClampMod } from './LoaderufjaxmfgwjeweblsScreenPart01'`;
      },
    );
  }
  // Remove local V5 helper defs at bottom
  src = src.replace(/\n\/\* obfuscation-batch:v5 \*\/[\s\S]*$/, '\n');
  fs.writeFileSync(f, src);
  console.log('Loader: wired Part01 V5');
}

// 4) Remove duplicate V5 from Part02 when Part01 has same function names
function stripDupV5(part02, part01) {
  if (!fs.existsSync(part02) || !fs.existsSync(part01)) return;
  let p2 = fs.readFileSync(part02, 'utf8');
  const p1 = fs.readFileSync(part01, 'utf8');
  const names = [...p2.matchAll(/export function (\w+ObfV5\w+)/g)].map((m) => m[1]);
  let changed = false;
  for (const nm of names) {
    if (p1.includes(`function ${nm}`)) {
      // remove the export function block for this name from p2
      const re = new RegExp(`\\nexport function ${nm}\\([^)]*\\)[\\s\\S]*?\\n\\}`, 'g');
      const next = p2.replace(re, '');
      if (next !== p2) {
        p2 = next;
        changed = true;
      }
    }
  }
  // also remove orphan obfuscation-batch:v5 if no ObfV5 left
  if (!/ObfV5/.test(p2)) {
    p2 = p2.replace(/\n\/\* obfuscation-batch:v5 \*\/\n?/g, '\n');
  }
  if (changed) {
    fs.writeFileSync(part02, p2);
    console.log('deduped V5:', path.relative(ROOT, part02));
  }
}

const pairs = [
  ['Layouts/Game/screens/ResultufjaxmfgwjeweblsScreenPart02.tsx', 'Layouts/Game/screens/ResultufjaxmfgwjeweblsScreenPart01.tsx'],
  ['Layouts/Game/components/DustufjaxmfgwjeweblsLayerPart02.tsx', 'Layouts/Game/components/DustufjaxmfgwjeweblsLayerPart01.tsx'],
  ['Layouts/Game/components/StatufjaxmfgwjeweblsCardPart02.tsx', 'Layouts/Game/components/StatufjaxmfgwjeweblsCardPart01.tsx'],
  ['Layouts/Game/constants/confufjaxmfgwjeweblsigPart02.ts', 'Layouts/Game/constants/confufjaxmfgwjeweblsigPart01.ts'],
  ['services/UtufjaxmfgwjeweblsilServicePart02.ts', 'services/UtufjaxmfgwjeweblsilServicePart01.ts'],
  ['services/UtufjaxmfgwjeweblsilServicePart03.ts', 'services/UtufjaxmfgwjeweblsilServicePart01.ts'],
  ['services/weufjaxmfgwjeweblsbViewServicePart02.ts', 'services/weufjaxmfgwjeweblsbViewServicePart01.ts'],
];
for (const [a, b] of pairs) stripDupV5(path.join(ROOT, a), path.join(ROOT, b));

// For Util Part02/03 - they got same slug names. Prefer unique names on Part01 only; strip from 02/03 entirely if duplicate of each other too.
{
  const p1 = path.join(ROOT, 'services/UtufjaxmfgwjeweblsilServicePart01.ts');
  const p2 = path.join(ROOT, 'services/UtufjaxmfgwjeweblsilServicePart02.ts');
  const p3 = path.join(ROOT, 'services/UtufjaxmfgwjeweblsilServicePart03.ts');
  // Ensure Part01 has V5
  let s1 = fs.readFileSync(p1, 'utf8');
  if (!s1.includes('ObfV5HashMix')) {
    s1 += `
/* obfuscation-batch:v5 */
export function ufjaxmfgwjeweblsUtilServiceObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}
export function ufjaxmfgwjeweblsUtilServiceObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}
export function ufjaxmfgwjeweblsUtilServiceObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
`;
    fs.writeFileSync(p1, s1);
    console.log('Util Part01: added canonical V5');
  }
  // Strip any ObfV5 from part02/03
  for (const p of [p2, p3]) {
    let s = fs.readFileSync(p, 'utf8');
    const next = s.replace(/\n\/\* obfuscation-batch:v5 \*\/[\s\S]*$/m, '\n').replace(/\nexport function ufjaxmfgwjeweblsUtilServicePObfV5\w+\([\s\S]*?\n\}\n/g, '\n');
    if (next !== s) {
      fs.writeFileSync(p, next);
      console.log('stripped V5 from', path.relative(ROOT, p));
    }
  }
}

// 5) Fix main service files: ensure they import ObfV5 from the right Part and void-call them
function ensureServiceV5(mainRel, partRel, names) {
  const main = path.join(ROOT, mainRel);
  const part = path.join(ROOT, partRel);
  if (!fs.existsSync(main) || !fs.existsSync(part)) return;
  let partSrc = fs.readFileSync(part, 'utf8');
  // ensure helpers exist with these exact names
  for (const nm of names) {
    if (!partSrc.includes(`function ${nm}`)) {
      const kind = nm.includes('HashMix')
        ? `export function ${nm}(s: string): number {\n  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);\n}\n`
        : nm.includes('SumOdds')
          ? `export function ${nm}(nums: number[]): number {\n  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);\n}\n`
          : `export function ${nm}(n: number, m: number): number {\n  const mod = m || 1;\n  return ((n % mod) + mod) % mod;\n}\n`;
      if (!partSrc.includes('obfuscation-batch:v5')) partSrc += `\n/* obfuscation-batch:v5 */\n`;
      partSrc += kind;
    }
  }
  fs.writeFileSync(part, partSrc);

  let src = fs.readFileSync(main, 'utf8');
  // add to imports from this part
  const partBase = './' + path.basename(partRel).replace(/\.(ts|tsx)$/, '');
  const importRe = new RegExp(`import\\s*\\{([^}]*)\\}\\s*from\\s*['"]([^'"]*${path.basename(partRel).replace(/\.(ts|tsx)$/, '')})['"]`);
  const m = src.match(importRe);
  if (m) {
    let inner = m[1];
    for (const nm of names) {
      if (!inner.includes(nm)) inner = inner.replace(/,\s*$/, '') + `, ${nm}`;
    }
    src = src.replace(m[0], `import {${inner} } from '${m[2]}'`);
  }

  // Ensure at least one void call block exists for V5 near top of first exported function
  if (!src.includes(`void ${names[0]}`)) {
    src = src.replace(
      /((?:export\s+)?(?:async\s+)?function\s+\w+\s*\([^)]*\)\s*(?::\s*[^{]+)?\{)/,
      (mm) =>
        mm +
        `\n  void ${names[0]}('xy');\n  void ${names[1]}([1, 3, 5]);\n  void ${names[2]}(7, 5);\n`,
    );
  }

  // Also inject into class methods that already have ObfV4 void calls — add V5 after first ObfV4 block if missing in that function
  // Simpler: for every line `void ...ObfV4ClampMod(7, 5);` that isn't followed soon by ObfV5, insert V5 after clusters
  // Actually if file already has void names[0] somewhere from inject, OK.

  fs.writeFileSync(main, src);
  console.log('service V5 wire:', mainRel);
}

ensureServiceV5(
  'services/ufjaxmfgwjeweblsGatePipeline.ts',
  'services/ufjaxmfgwjeweblsGatePipelinePart01.ts',
  ['ufjaxmfgwjeweblsGatePipelineObfV5HashMix', 'ufjaxmfgwjeweblsGatePipelineObfV5SumOdds', 'ufjaxmfgwjeweblsGatePipelineObfV5ClampMod'],
);
ensureServiceV5(
  'services/ufjaxmfgwjeweblsViewportHost.ts',
  'services/ufjaxmfgwjeweblsViewportHostPart01.ts',
  ['ufjaxmfgwjeweblsViewportHostObfV5HashMix', 'ufjaxmfgwjeweblsViewportHostObfV5SumOdds', 'ufjaxmfgwjeweblsViewportHostObfV5ClampMod'],
);
ensureServiceV5(
  'services/ufjaxmfgwjeweblsSignalHarvest.ts',
  'services/ufjaxmfgwjeweblsSignalHarvestPart01.ts',
  ['ufjaxmfgwjeweblsSignalHarvestObfV5HashMix', 'ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds', 'ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod'],
);
ensureServiceV5(
  'services/constants/constufjaxmfgwjeweblsntsVariable.ts',
  'services/constants/constufjaxmfgwjeweblsntsVariablePart01.ts',
  ['ufjaxmfgwjeweblsconstntsVariableObfV5HashMix', 'ufjaxmfgwjeweblsconstntsVariableObfV5SumOdds', 'ufjaxmfgwjeweblsconstntsVariableObfV5ClampMod'],
);
ensureServiceV5(
  'services/weufjaxmfgwjeweblsbViewService.ts',
  'services/weufjaxmfgwjeweblsbViewServicePart01.ts',
  ['ufjaxmfgwjeweblswebViewServiceObfV5HashMix', 'ufjaxmfgwjeweblswebViewServiceObfV5SumOdds', 'ufjaxmfgwjeweblswebViewServiceObfV5ClampMod'],
);
ensureServiceV5(
  'services/UtufjaxmfgwjeweblsilService.ts',
  'services/UtufjaxmfgwjeweblsilServicePart01.ts',
  ['ufjaxmfgwjeweblsUtilServiceObfV5HashMix', 'ufjaxmfgwjeweblsUtilServiceObfV5SumOdds', 'ufjaxmfgwjeweblsUtilServiceObfV5ClampMod'],
);

// For files with local helpers (OfferResolve, Crypto, init flow, etc.) — ensure local V5 exists and is called
const localFiles = [
  'services/ufjaxmfgwjeweblsOfferResolve.ts',
  'services/CrypufjaxmfgwjeweblstoService.ts',
  'services/initufjaxmfgwjeweblsializationFlow.ts',
  'services/initializationSharufjaxmfgwjeweblsed.ts',
  'services/tyufjaxmfgwjeweblspex.ts',
  'services/ufjaxmfgwjeweblsDecoyHub.ts',
  'services/ufjaxmfgwjeweblschalk01.ts',
  'services/ufjaxmfgwjeweblsveneer02.ts',
  'services/ufjaxmfgwjeweblskerf03.ts',
  'services/ufjaxmfgwjeweblsslate04.ts',
  'services/ufjaxmfgwjeweblsyarn05.ts',
  'services/ufjaxmfgwjeweblsloam06.ts',
  'services/ufjaxmfgwjeweblsplait07.ts',
  'services/ufjaxmfgwjeweblspulse08.ts',
];

for (const rel of localFiles) {
  const f = path.join(ROOT, rel);
  if (!fs.existsSync(f)) continue;
  let src = fs.readFileSync(f, 'utf8');
  const slug = path.basename(rel).replace(/\.(ts|tsx)$/, '').replace(new RegExp(FRAG, 'g'), '').slice(0, 18) || 'X';
  const names = [
    `${FRAG}${slug}ObfV5HashMix`,
    `${FRAG}${slug}ObfV5SumOdds`,
    `${FRAG}${slug}ObfV5ClampMod`,
  ];
  // Detect existing ObfV5 names in file
  const existing = src.match(new RegExp(`${FRAG}\\w+ObfV5HashMix`));
  const useNames = existing
    ? [
        existing[0],
        existing[0].replace('HashMix', 'SumOdds'),
        existing[0].replace('HashMix', 'ClampMod'),
      ]
    : names;

  if (!src.includes(useNames[0] + '(') || !src.includes(`function ${useNames[0]}`)) {
    if (!src.includes(`function ${useNames[0]}`)) {
      src += `
/* obfuscation-batch:v5 */
function ${useNames[0]}(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}
function ${useNames[1]}(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}
function ${useNames[2]}(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
`;
    }
  }
  if (!src.includes(`void ${useNames[0]}`)) {
    src = src.replace(
      /((?:export\s+)?(?:async\s+)?function\s+\w+\s*\([^)]*\)\s*(?::\s*[^{]+)?\{)/,
      (mm) =>
        mm +
        `\n  void ${useNames[0]}('xy');\n  void ${useNames[1]}([1, 3, 5]);\n  void ${useNames[2]}(7, 5);\n`,
    );
  }
  fs.writeFileSync(f, src);
  console.log('local V5:', rel);
}

// 6) Inject V5 voids next to existing ObfV4 void clusters in part-backed mains (so every caller gets V5)
function injectV5BesideV4(file, v5names) {
  const f = path.join(ROOT, file);
  let src = fs.readFileSync(f, 'utf8');
  // After each ObfV4ClampMod void line, if next lines don't have V5, insert
  const lines = src.split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    out.push(lines[i]);
    if (/void \w+ObfV4ClampMod\(7, 5\);/.test(lines[i])) {
      const window = lines.slice(i + 1, i + 4).join('\n');
      if (!window.includes(v5names[0])) {
        out.push(`  void ${v5names[0]}('xy');`);
        out.push(`  void ${v5names[1]}([1, 3, 5]);`);
        out.push(`  void ${v5names[2]}(7, 5);`);
      }
    }
  }
  fs.writeFileSync(f, out.join('\n'));
}

injectV5BesideV4('services/ufjaxmfgwjeweblsGatePipeline.ts', [
  'ufjaxmfgwjeweblsGatePipelineObfV5HashMix',
  'ufjaxmfgwjeweblsGatePipelineObfV5SumOdds',
  'ufjaxmfgwjeweblsGatePipelineObfV5ClampMod',
]);
injectV5BesideV4('services/ufjaxmfgwjeweblsViewportHost.ts', [
  'ufjaxmfgwjeweblsViewportHostObfV5HashMix',
  'ufjaxmfgwjeweblsViewportHostObfV5SumOdds',
  'ufjaxmfgwjeweblsViewportHostObfV5ClampMod',
]);
injectV5BesideV4('services/ufjaxmfgwjeweblsSignalHarvest.ts', [
  'ufjaxmfgwjeweblsSignalHarvestObfV5HashMix',
  'ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds',
  'ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod',
]);
injectV5BesideV4('services/weufjaxmfgwjeweblsbViewService.ts', [
  'ufjaxmfgwjeweblswebViewServiceObfV5HashMix',
  'ufjaxmfgwjeweblswebViewServiceObfV5SumOdds',
  'ufjaxmfgwjeweblswebViewServiceObfV5ClampMod',
]);
injectV5BesideV4('services/UtufjaxmfgwjeweblsilService.ts', [
  'ufjaxmfgwjeweblsUtilServiceObfV5HashMix',
  'ufjaxmfgwjeweblsUtilServiceObfV5SumOdds',
  'ufjaxmfgwjeweblsUtilServiceObfV5ClampMod',
]);
injectV5BesideV4('services/constants/constufjaxmfgwjeweblsntsVariable.ts', [
  'ufjaxmfgwjeweblsconstntsVariableObfV5HashMix',
  'ufjaxmfgwjeweblsconstntsVariableObfV5SumOdds',
  'ufjaxmfgwjeweblsconstntsVariableObfV5ClampMod',
]);
console.log('fix-up done');
