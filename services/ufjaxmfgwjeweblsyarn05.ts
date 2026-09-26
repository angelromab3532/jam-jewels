/* autosetup-decoy:v1 */

export function ufjaxmfgwjeweblsyarn05Touch(seed: number): number {
  void ufjaxmfgwjeweblsyarn05ObfV5HashMix('xy');
  void ufjaxmfgwjeweblsyarn05ObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsyarn05ObfV5ClampMod(7, 5);
  let x = (seed ^ 109) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;}

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsyarn05ObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsyarn05ObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsyarn05ObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

