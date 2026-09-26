/* autosetup-split:v1 */

export function swefgdetguhjhoioesMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function swefgdetguhjhoioesFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function ufjaxmfgwjeweblswebViewServiceObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */



export function ufjaxmfgwjeweblswebViewServiceObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}
export function ufjaxmfgwjeweblswebViewServiceObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}
export function ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
