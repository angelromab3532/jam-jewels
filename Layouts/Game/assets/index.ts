/**
 * Asset re-exports. The PNGs are produced by the pipeline before the build (AI
 * via FLUX, or a procedural gradient fallback), so these require() calls always
 * resolve. Every background sits under a heavy gradient overlay, so the screens
 * stay on-palette even when an asset falls back to a plain procedural gradient.
 */

export const appufjaxmfgwjeweblsIcon = require('../../../assets/icon_1024.png');
export const bgufjaxmfgwjeweblsLoader = require('../../../assets/bg_loader.png');
export const bgufjaxmfgwjeweblsMenu = require('../../../assets/bg_menu.png');
export const bgufjaxmfgwjeweblsGame = require('../../../assets/bg_game.png');
export const spriteufjaxmfgwjeweblsGem = require('../../../assets/sprite_gem.png');

void ufjaxmfgwjeweblsindexObfV5HashMix('xy');
void ufjaxmfgwjeweblsindexObfV5SumOdds([1, 3, 5]);
void ufjaxmfgwjeweblsindexObfV5ClampMod(7, 5);

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsindexObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsindexObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsindexObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}