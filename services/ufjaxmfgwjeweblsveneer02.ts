/* autosetup-decoy:v1 */

export function ufjaxmfgwjeweblsveneer02Touch(seed: number): number {
  void ufjaxmfgwjeweblsveneer02ObfV5HashMix('xy');
  void ufjaxmfgwjeweblsveneer02ObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsveneer02ObfV5ClampMod(7, 5);
  let x = (seed ^ 76) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;}

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsveneer02ObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsveneer02ObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsveneer02ObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

