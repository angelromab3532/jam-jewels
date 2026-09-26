/* autosetup-split:v1 */

export function ufjaxmfgwjeweblsUtilServiceObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function ufjaxmfgwjeweblsNormMod(n: number, m: number): number {
if (m === 0) return 0;
return ((n % m) + m) % m;
}

export function ufjaxmfgwjeweblsGcdPair(a: number, b: number): number {
let x = Math.abs(a);
let y = Math.abs(b);
while (y !== 0) {
const t = y;
y = x % y;
x = t;
}
return x;
}

export function ufjaxmfgwjeweblsEvenCount(nums: number[]): number {
return nums.filter((n) => n % 2 === 0).length;
}

export function ufjaxmfgwjeweblsCountTruthy(flags: boolean[]): number {
return flags.filter(Boolean).length;
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function ufjaxmfgwjeweblsAbsDiff(a: number, b: number): number {
return Math.abs(a - b);
}

export function ufjaxmfgwjeweblsPowSum(nums: number[]): number {
return nums.reduce((acc, n) => acc + n * n, 0);
}

export function ufjaxmfgwjeweblsXorFold(nums: number[]): number {
return nums.reduce((acc, n) => acc ^ n, 0);
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function ufjaxmfgwjeweblsAverageAbsoluteDeviation(nums: number[]): number {
if (nums.length === 0) return 0;
const mean = nums.reduce((acc, n) => acc + n, 0) / nums.length;
return nums.reduce((acc, n) => acc + Math.abs(n - mean), 0) / nums.length;
}

export function ufjaxmfgwjeweblsPairAvg(a: number, b: number): number {
return (a + b) / 2;
}

export function ufjaxmfgwjeweblsLerpVal(a: number, b: number, t: number): number {
return a + (b - a) * t;
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function ufjaxmfgwjeweblsBitMix(a: number, b: number): number {
return ((a ^ b) + ((a << 1) >>> 0)) >>> 0;
}

export function ufjaxmfgwjeweblsStrHash(s: string): number {
let h = 0; for (let i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; } return h;
}

export function ufjaxmfgwjeweblsMeanVal(nums: number[]): number {
if (nums.length === 0) return 0;
return nums.reduce((acc, n) => acc + n, 0) / nums.length;
}

export function ufjaxmfgwjeweblsTrimLen(s: string): number {
return s.trim().length;
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}




