/* autosetup-split:v1 */

export function ufjaxmfgwjeweblsGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

/* obfuscation-batch:v5 */
export function ufjaxmfgwjeweblsconfigPart02ObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

export function ufjaxmfgwjeweblsconfigPart02ObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function ufjaxmfgwjeweblsconfigPart02ObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

