import fs from 'fs';

// Deduplicate consecutive identical function declarations by name within a file
function dedupeFunctions(file) {
  let src = fs.readFileSync(file, 'utf8');
  const seen = new Set();
  // Split by function declarations at top level (function name)
  const re = /((?:\/\* obfuscation-batch:[^*]+\*\/\s*)?(?:export\s+)?function\s+(\w+)\s*\([^)]*\)\s*(?::\s*[^{]+)?\{[\s\S]*?\n\})\n?/g;
  let out = src;
  const matches = [...src.matchAll(re)];
  // Process from end so indices stay valid
  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i];
    const name = m[2];
    // Only dedupe obfuscation helpers
    if (!/ObfV\d|MixSeed|FoldRange|ClampSpan/.test(name)) continue;
    if (seen.has(name)) {
      // remove this occurrence
      out = out.slice(0, m.index) + out.slice(m.index + m[0].length);
    } else {
      seen.add(name);
    }
  }
  // seen was built reverse — wrong. Rebuild properly:
  return null;
}

function dedupeProper(file) {
  let src = fs.readFileSync(file, 'utf8');
  const re =
    /((?:\/\* obfuscation-batch:[^*]+\*\/\s*)?(?:export\s+)?function\s+(\w+)\s*\([^)]*\)\s*(?::\s*[^{]+)?\{[\s\S]*?\n\})\n?/g;
  const matches = [...src.matchAll(re)];
  const keep = new Set();
  const removeIdx = new Set();
  for (const m of matches) {
    const name = m[2];
    if (!/ObfV\d/.test(name)) continue;
    if (keep.has(name)) removeIdx.add(m.index);
    else keep.add(name);
  }
  if (removeIdx.size === 0) return false;
  // rebuild
  let out = '';
  let last = 0;
  for (const m of matches) {
    if (removeIdx.has(m.index)) {
      out += src.slice(last, m.index);
      last = m.index + m[0].length;
    }
  }
  out += src.slice(last);
  fs.writeFileSync(file, out);
  console.log('deduped', file, removeIdx.size);
  return true;
}

const files = [
  'services/ufjaxmfgwjeweblsViewportHost.ts',
  'services/ufjaxmfgwjeweblsSignalHarvest.ts',
  'services/UtufjaxmfgwjeweblsilService.ts',
  'services/CrypufjaxmfgwjeweblstoService.ts',
  'services/initufjaxmfgwjeweblsializationFlow.ts',
  'services/constants/constufjaxmfgwjeweblsntsVariablePart01.ts',
  'services/weufjaxmfgwjeweblsbViewServicePart01.ts',
];

for (const f of files) dedupeProper(f);

// Fix constntsVariable import duplicates
{
  const f = 'services/constants/constufjaxmfgwjeweblsntsVariable.ts';
  let s = fs.readFileSync(f, 'utf8');
  s = s.replace(
    /import\s*\{([^}]*)\}\s*from\s*'(\.\/constufjaxmfgwjeweblsntsVariablePart01)'/,
    (m, inner, path) => {
      const names = inner
        .split(',')
        .map((x) => x.trim())
        .filter(Boolean);
      const uniq = [...new Set(names)];
      return `import { ${uniq.join(', ')} } from '${path}'`;
    },
  );
  fs.writeFileSync(f, s);
  console.log('cleaned const import');
}

// webView main: prefer ServiceObfV5 names; drop Servi if both imported
{
  const f = 'services/weufjaxmfgwjeweblsbViewService.ts';
  let s = fs.readFileSync(f, 'utf8');
  s = s.replace(/,?\s*ufjaxmfgwjeweblswebViewServiObfV5HashMix/g, '');
  s = s.replace(/,?\s*ufjaxmfgwjeweblswebViewServiObfV5SumOdds/g, '');
  s = s.replace(/,?\s*ufjaxmfgwjeweblswebViewServiObfV5ClampMod/g, '');
  s = s.replace(/void ufjaxmfgwjeweblswebViewServiObfV5HashMix\('xy'\);\n/g, '');
  s = s.replace(/void ufjaxmfgwjeweblswebViewServiObfV5SumOdds\(\[1, 3, 5\]\);\n/g, '');
  s = s.replace(/void ufjaxmfgwjeweblswebViewServiObfV5ClampMod\(7, 5\);\n/g, '');
  fs.writeFileSync(f, s);
}

console.log('done');
