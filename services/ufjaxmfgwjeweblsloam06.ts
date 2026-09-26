/* autosetup-decoy:v1 */

export function ufjaxmfgwjeweblsloam06Touch(seed: number): number {
  void ufjaxmfgwjeweblsloam06ObfV5HashMix('xy');
  void ufjaxmfgwjeweblsloam06ObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsloam06ObfV5ClampMod(7, 5);
  let x = (seed ^ 120) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;}

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsloam06ObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsloam06ObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsloam06ObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

