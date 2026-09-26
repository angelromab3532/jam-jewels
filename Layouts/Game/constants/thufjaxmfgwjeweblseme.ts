/**
 * Visual system for JamJewels.
 * Preset: DARK_PREMIUM (accent ramp re-tuned to the "theatre of light" brief).
 * The `name` field is the canonical preset id and must not be renamed.
 */

export const THEME = {
  name: 'DARK_PREMIUM',

  colors: {
    bg: {
      deep: '#0B0910',
      primary: '#15121C',
      surface: '#1C1826',
      sheet: 'rgba(28,24,38,0.94)',
      panel: 'rgba(28,24,38,0.92)',
    },
    accent: {
      amethyst: '#753FB0',
      ruby: '#D93A67',
      gold: '#EFC04C',
      teal: '#34B9AB',
      ember: '#D97B2C',
      granite: '#2A2533',
    },
    text: {
      primary: '#F4E8D8',
      secondary: '#9A8FB0',
      muted: 'rgba(244,232,216,0.45)',
      onGold: '#15121C',
    },
    ui: {
      border: 'rgba(244,232,216,0.12)',
      borderSoft: 'rgba(244,232,216,0.10)',
      borderStrong: 'rgba(244,232,216,0.22)',
      glass: 'rgba(244,232,216,0.06)',
      glassLight: 'rgba(244,232,216,0.05)',
      scrim: 'rgba(0,0,0,0.30)',
      dim: 'rgba(244,232,216,0.18)',
    },
  },

  gradients: {
    primary: ['#753FB0', '#D93A67'],
    gold: ['#EFC04C', '#D97B2C'],
    loaderVeil: ['rgba(8,6,12,0.88)', 'rgba(21,18,28,0.92)', 'rgba(6,5,10,0.96)'],
    menuVeil: ['rgba(21,18,28,0.05)', 'rgba(21,18,28,0.55)', '#15121C'],
    gameVeil: ['rgba(21,18,28,0.82)', 'rgba(11,9,16,0.93)'],
    winVeil: ['#2A1840', '#15121C'],
    loseVeil: ['#2A1220', '#15121C'],
    tutorial: ['#1C1826', '#15121C'],
  },

  radius: { sm: 8, md: 14, lg: 18, xl: 22, sheet: 28 },

  type: {
    hero: { fontSize: 40, fontWeight: '800' as const, letterSpacing: 6 },
    title: { fontSize: 34, fontWeight: '800' as const, letterSpacing: 4 },
    section: { fontSize: 26, fontWeight: '700' as const, letterSpacing: 3 },
    body: { fontSize: 15, fontWeight: '500' as const },
    label: { fontSize: 12, fontWeight: '600' as const, letterSpacing: 2 },
    caption: { fontSize: 10, fontWeight: '500' as const, letterSpacing: 3 },
  },

  numeric: { fontVariant: ['tabular-nums' as const] },
};

export const C = THEME.colors;

/* autosetup-game-stamp:v1 */
function ufjaxmfgwjeweblsGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function ufjaxmfgwjeweblsGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function ufjaxmfgwjeweblsGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void ufjaxmfgwjeweblsGameMixSeed(3, 7);
void ufjaxmfgwjeweblsGameFoldRange([1, 2, 3]);
void ufjaxmfgwjeweblsGameClampSpan(5, 0, 10);
void ufjaxmfgwjeweblsthemeObfV5HashMix('xy');
void ufjaxmfgwjeweblsthemeObfV5SumOdds([1, 3, 5]);
void ufjaxmfgwjeweblsthemeObfV5ClampMod(7, 5);

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsthemeObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsthemeObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsthemeObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

