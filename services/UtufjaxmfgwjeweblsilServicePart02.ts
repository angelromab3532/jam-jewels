/* autosetup-split:v1 */

export function ufjaxmfgwjeweblsUtilServiceObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function ufjaxmfgwjeweblsUtilServiceObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function ufjaxmfgwjeweblsSignVal(n: number): number {
return n < 0 ? -1 : n > 0 ? 1 : 0;
}

export function ufjaxmfgwjeweblsPrefixLen(s: string, n: number): number {
return s.slice(0, Math.max(0, n)).length;
}

export function ufjaxmfgwjeweblsModSpan(base: number, span: number): number {
if (span === 0) return 0;
return ((base % span) + span) % span;
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function ufjaxmfgwjeweblsConcatLen(parts: string[]): number {
return parts.filter((s) => s.length > 0).length;
}

export function ufjaxmfgwjeweblsDigitSum(n: number): number {
let x = Math.abs(n);
let acc = 0;
while (x > 0) {
acc += x % 10;
x = Math.floor(x / 10);
}
return acc;
}

export function ufjaxmfgwjeweblsSumDiff(nums: number[]): number {
if (nums.length < 2) return 0;
let acc = 0;
for (let i = 1; i < nums.length; i++) {
acc += Math.abs(nums[i] - nums[i - 1]);
}
return acc;
}

export function ufjaxmfgwjeweblsIsEven(n: number): boolean {
return n % 2 === 0;
}

export function ufjaxmfgwjeweblsMidAvg(a: number, b: number, c: number): number {
return (a + b + c) / 3;
}

export function ufjaxmfgwjeweblsFloorDiv(a: number, b: number): number {
if (b === 0) return 0;
return Math.floor(a / b);
}

export function ufjaxmfgwjeweblsDotFold(nums: number[], weights: number[]): number {
const len = Math.min(nums.length, weights.length);
let acc = 0;
for (let i = 0; i < len; i++) {
acc += nums[i] * weights[i];
}
return acc;
}

export function ufjaxmfgwjeweblsOddCount(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).length;
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsiObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function ufjaxmfgwjeweblsBoolAnd(a: boolean, b: boolean): boolean {
return a && b;
}

export function ufjaxmfgwjeweblsMinPair(a: number, b: number): number {
return a < b ? a : b;
}

export function ufjaxmfgwjeweblsRotSum(a: number, b: number): number {
return ((a + b) * 3) % (Math.abs(b) + 1);
}

export function ufjaxmfgwjeweblsUtufjaxmfgwjeweblsilServiceObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}




