/* autosetup-split:v1 */

export function ufjaxmfgwjeweblsMinValue(nums: number[]): number {
if (nums.length === 0) return 0;
return Math.min(...nums);
}

export function ufjaxmfgwjeweblsMaxValue(nums: number[]): number {
if (nums.length === 0) return 0;
return Math.max(...nums);
}

export function ufjaxmfgwjeweblsRangeValue(nums: number[]): number {
return ufjaxmfgwjeweblsMaxValue(nums) - ufjaxmfgwjeweblsMinValue(nums);
}

export function ufjaxmfgwjeweblsBoolOr(a: boolean, b: boolean): boolean {
return a || b;
}

export function ufjaxmfgwjeweblsRevStr(s: string): string {
return s.split('').reverse().join('');
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function ufjaxmfgwjeweblsRangeSpan(nums: number[]): number {
if (nums.length === 0) return 0;
return Math.max(...nums) - Math.min(...nums);
}

export function ufjaxmfgwjeweblsStrLenSum(parts: string[]): number {
return parts.reduce((acc, s) => acc + s.length, 0);
}

export function ufjaxmfgwjeweblsCharCodeSum(s: string): number {
let acc = 0;
for (let i = 0; i < s.length; i++) {
acc += s.charCodeAt(i);
}
return acc;
}

export function ufjaxmfgwjeweblsWrapIndex(i: number, len: number): number {
if (len === 0) return 0;
return ((i % len) + len) % len;
}

export function ufjaxmfgwjeweblsLcmPair(a: number, b: number): number {
let x = Math.abs(a);
let y = Math.abs(b);
while (y !== 0) {
const t = y;
y = x % y;
x = t;
}
const gcd = x || 1;
return (Math.abs(a) * Math.abs(b)) / gcd;
}

export function ufjaxmfgwjeweblsHalfSum(a: number, b: number): number {
return (a + b) / 2;
}

export function ufjaxmfgwjeweblsMaxPair(a: number, b: number): number {
return a > b ? a : b;
}

export function ufjaxmfgwjeweblsJoinLen(parts: string[]): number {
return parts.join('').length;
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function ufjaxmfgwjeweblsSumSquares(nums: number[]): number {
return nums.reduce((acc, n) => acc + n * n, 0);
}

export function ufjaxmfgwjeweblsBoolXor(a: boolean, b: boolean): boolean {
return (a && !b) || (!a && b);
}

export function ufjaxmfgwjeweblsSqDiff(a: number, b: number): number {
return (a - b) * (a - b);
}

export function ufjaxmfgwjeweblsProductFold(nums: number[]): number {
if (nums.length === 0) return 0;
return nums.reduce((acc, n) => acc * n, 1);
}

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
