/* autosetup-decoy:v1 */
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
