import fs from 'fs';
import path from 'path';

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, a);
    else if (/\.(ts|tsx)$/.test(e.name)) a.push(p);
  }
  return a;
}

const helperName =
  /(?:ObfV\d|MixSeed|FoldRange|ClampSpan|Touch|HashMix|SumOdds|ClampMod|MinValue|MaxValue|GcdPair|NormMod|GameMix|GameFold|GameClamp)/;

const files = [...walk('Layouts/Game'), ...walk('services')];
let fixed = 0;

for (const f of files) {
  let src = fs.readFileSync(f, 'utf8');
  const lines = src.split('\n');
  const out = [];
  let inHelper = false;
  let depth = 0;
  let startDepth = 0;
  let changed = false;

  for (const line of lines) {
    const t = line.trim();
    const fn = t.match(/^(?:export\s+)?function\s+(\w+)\s*\(/);
    if (fn && helperName.test(fn[1]) && !inHelper) {
      inHelper = true;
      startDepth = depth;
    }

    let code = '';
    let inS = null;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (inS) {
        if (c === '\\') {
          i++;
          continue;
        }
        if (c === inS) inS = null;
        continue;
      }
      if (c === "'" || c === '"' || c === '`') {
        inS = c;
        continue;
      }
      code += c;
    }
    for (const ch of code) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
    }

    if (inHelper && /^\s*void\s+\w+/.test(line)) {
      changed = true;
      if (depth <= startDepth) inHelper = false;
      continue;
    }

    out.push(line);
    if (inHelper && depth <= startDepth && code.includes('}')) {
      inHelper = false;
    }
  }

  if (changed) {
    fs.writeFileSync(f, out.join('\n'));
    fixed++;
    console.log('stripped:', f);
  }
}
console.log('done, fixed', fixed);

// Clean UtilService P ObfV5 duplicates
{
  const part = 'services/UtufjaxmfgwjeweblsilServicePart01.ts';
  let s = fs.readFileSync(part, 'utf8');
  s = s.replace(
    /\/\* obfuscation-batch:v5 \*\/\s*export function ufjaxmfgwjeweblsUtilServicePObfV5HashMix[\s\S]*?export function ufjaxmfgwjeweblsUtilServicePObfV5ClampMod\([\s\S]*?\n\}\n\n/,
    '/* obfuscation-batch:v5 */\n',
  );
  fs.writeFileSync(part, s);

  const main = 'services/UtufjaxmfgwjeweblsilService.ts';
  let m = fs.readFileSync(main, 'utf8');
  m = m.replace(/,?\s*ufjaxmfgwjeweblsUtilServicePObfV5HashMix/g, '');
  m = m.replace(/,?\s*ufjaxmfgwjeweblsUtilServicePObfV5SumOdds/g, '');
  m = m.replace(/,?\s*ufjaxmfgwjeweblsUtilServicePObfV5ClampMod\s*/g, '');
  m = m.replace(/\n\s*void ufjaxmfgwjeweblsUtilServicePObfV5HashMix\('xy'\);\n\s*void ufjaxmfgwjeweblsUtilServicePObfV5SumOdds\(\[1, 3, 5\]\);\n\s*void ufjaxmfgwjeweblsUtilServicePObfV5ClampMod\(7, 5\);\n/g, '\n');
  fs.writeFileSync(main, m);
  console.log('cleaned UtilService P ObfV5');
}
