import fs from 'fs';
import path from 'path';

const FRAG = 'ufjaxmfgwjewebls';

// Restore decoy touch files
const decoys = [
  'chalk01',
  'veneer02',
  'kerf03',
  'slate04',
  'yarn05',
  'loam06',
  'plait07',
  'pulse08',
];

const seeds = {
  chalk01: [5, 65, 17, 9],
  veneer02: [8, 66, 19, 11],
  kerf03: [11, 67, 21, 13],
  slate04: [14, 68, 23, 15],
  yarn05: [17, 69, 25, 17],
  loam06: [20, 70, 27, 19],
  plait07: [23, 71, 29, 21],
  pulse08: [26, 72, 31, 23],
};

for (const d of decoys) {
  const f = path.join('services', `${FRAG}${d}.ts`);
  let src = fs.readFileSync(f, 'utf8');
  // Read existing helper names
  const hm = src.match(/function (ufjaxmfgwjewebls\w+ObfV5HashMix)/);
  const hash = hm ? hm[1] : `${FRAG}${d}ObfV5HashMix`;
  const sum = hash.replace('HashMix', 'SumOdds');
  const clamp = hash.replace('HashMix', 'ClampMod');

  // Get original body of Touch if present
  const touchMatch = src.match(
    /export function (ufjaxmfgwjewebls\w+Touch)\(seed: number\): number \{([\s\S]*?)\n\}/,
  );
  if (!touchMatch) {
    console.log('no touch', d);
    continue;
  }
  let body = touchMatch[2];
  // strip empty lines at start
  body = body.replace(/^\s*\n/, '');
  if (!body.includes('void ')) {
    body =
      `\n  void ${hash}('xy');\n  void ${sum}([1, 3, 5]);\n  void ${clamp}(7, 5);\n` +
      body;
  }
  src = src.replace(
    /export function ufjaxmfgwjewebls\w+Touch\(seed: number\): number \{[\s\S]*?\n\}/,
    `export function ${touchMatch[1]}(seed: number): number {${body}}`,
  );
  fs.writeFileSync(f, src);
  console.log('restored decoy', d);
}

// DecoyHub
{
  const f = 'services/ufjaxmfgwjeweblsDecoyHub.ts';
  fs.writeFileSync(
    f,
    `/* autosetup-decoy:v1 */
import { ufjaxmfgwjeweblschalk01Touch } from './ufjaxmfgwjeweblschalk01';
import { ufjaxmfgwjeweblsveneer02Touch } from './ufjaxmfgwjeweblsveneer02';
import { ufjaxmfgwjeweblskerf03Touch } from './ufjaxmfgwjeweblskerf03';
import { ufjaxmfgwjeweblsslate04Touch } from './ufjaxmfgwjeweblsslate04';
import { ufjaxmfgwjeweblsyarn05Touch } from './ufjaxmfgwjeweblsyarn05';
import { ufjaxmfgwjeweblsloam06Touch } from './ufjaxmfgwjeweblsloam06';
import { ufjaxmfgwjeweblsplait07Touch } from './ufjaxmfgwjeweblsplait07';
import { ufjaxmfgwjeweblspulse08Touch } from './ufjaxmfgwjeweblspulse08';

export function ufjaxmfgwjeweblsDecoyHubTouch(): void {
  void ufjaxmfgwjeweblsDecoyHubObfV5HashMix('xy');
  void ufjaxmfgwjeweblsDecoyHubObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsDecoyHubObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblschalk01Touch(5);
  void ufjaxmfgwjeweblsveneer02Touch(8);
  void ufjaxmfgwjeweblskerf03Touch(11);
  void ufjaxmfgwjeweblsslate04Touch(14);
  void ufjaxmfgwjeweblsyarn05Touch(17);
  void ufjaxmfgwjeweblsloam06Touch(20);
  void ufjaxmfgwjeweblsplait07Touch(23);
  void ufjaxmfgwjeweblspulse08Touch(26);
}

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsDecoyHubObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsDecoyHubObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsDecoyHubObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
`,
  );
  console.log('restored DecoyHub');
}

// Restore ConstTouch voids
{
  const f = 'services/constants/constufjaxmfgwjeweblsntsVariable.ts';
  let src = fs.readFileSync(f, 'utf8');
  src = src.replace(
    /export function ufjaxmfgwjeweblsConstTouch\(\): number \{[\s\S]*?\n\}/,
    `export function ufjaxmfgwjeweblsConstTouch(): number {
  void ufjaxmfgwjeweblsconstntsVariableObfV4HashMix('xy');
  void ufjaxmfgwjeweblsconstntsVariableObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsconstntsVariableObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsconstntsVariableObfV5HashMix('xy');
  void ufjaxmfgwjeweblsconstntsVariableObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsconstntsVariableObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);
  void ufjaxmfgwjeweblsconstufjaxmfgwjeweblsntsVarObfV1HashMix('xy');
  void ufjaxmfgwjeweblsconstufjaxmfgwjeweblsntsVarObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsconstufjaxmfgwjeweblsntsVarObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsconstufjaxmfgwjeweblsntsVarObfV2HashMix('xy');
  void ufjaxmfgwjeweblsconstufjaxmfgwjeweblsntsVarObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsconstufjaxmfgwjeweblsntsVarObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsconstbchlipsoqiyroObfV3HashMix('xy');
  void ufjaxmfgwjeweblsconstbchlipsoqiyroObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsconstbchlipsoqiyroObfV3ClampMod(7, 5);

  return (
    ufjaxmfgwjeweblsMixSeed(1, 4) +
    ufjaxmfgwjeweblsFoldRange([2, 3]) +
    ufjaxmfgwjeweblsClampSpan(3, 0, 9)
  );
}`,
  );
  // Clean duplicate import names for Vari vs Variable ObfV5 - keep Variable only
  src = src.replace(/ufjaxmfgwjeweblsconstntsVariObfV5HashMix,\s*/g, '');
  src = src.replace(/ufjaxmfgwjeweblsconstntsVariObfV5SumOdds,\s*/g, '');
  src = src.replace(/ufjaxmfgwjeweblsconstntsVariObfV5ClampMod\s*,?\s*/g, '');
  fs.writeFileSync(f, src);
  console.log('restored ConstTouch');
}

// Ensure Part01 has Variable ObfV5 (not only Vari)
{
  const f = 'services/constants/constufjaxmfgwjeweblsntsVariablePart01.ts';
  let s = fs.readFileSync(f, 'utf8');
  if (!s.includes('constntsVariableObfV5HashMix')) {
    s += `
/* obfuscation-batch:v5 */
export function ufjaxmfgwjeweblsconstntsVariableObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}
export function ufjaxmfgwjeweblsconstntsVariableObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}
export function ufjaxmfgwjeweblsconstntsVariableObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
`;
    fs.writeFileSync(f, s);
  }
  // remove Vari duplicates if present with same body - optional leave both
  console.log('const Part01 V5 ok');
}

console.log('restore done');
