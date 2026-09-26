export type Outcome = 'win' | 'moves' | 'checks' | 'timeup';

export type RoundufjaxmfgwjeweblsStats = {
  outcome: Outcome;
  edgesLit: number;
  edgesTotal: number;
  movesUsed: number;
  movesLeft: number;
  wrongChecks: number;
  score: number;
  stars: number;
};

export function scoreufjaxmfgwjeweblsRound(
  edgesLit: number,
  movesLeft: number,
  wrongChecks: number,
): number {
  void ufjaxmfgwjeweblsscoringObfV5HashMix('xy');
  void ufjaxmfgwjeweblsscoringObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsscoringObfV5ClampMod(7, 5);

  return Math.max(0, 400 * edgesLit + 80 * movesLeft - 120 * wrongChecks);
}

export function starsufjaxmfgwjeweblsFor(outcome: Outcome, movesLeft: number): number {
  void ufjaxmfgwjeweblsscoringObfV5HashMix('xy');
  void ufjaxmfgwjeweblsscoringObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsscoringObfV5ClampMod(7, 5);

  if (outcome !== 'win') {
    return 0;
  }
  if (movesLeft >= 6) {
    return 3;
  }
  if (movesLeft >= 3) {
    return 2;
  }
  return 1;
}

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

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsscoringObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsscoringObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsscoringObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

