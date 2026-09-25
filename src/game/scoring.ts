export type Outcome = 'win' | 'moves' | 'checks' | 'timeup';

export type RoundStats = {
  outcome: Outcome;
  edgesLit: number;
  edgesTotal: number;
  movesUsed: number;
  movesLeft: number;
  wrongChecks: number;
  score: number;
  stars: number;
};

export function scoreRound(
  edgesLit: number,
  movesLeft: number,
  wrongChecks: number,
): number {
  return Math.max(0, 400 * edgesLit + 80 * movesLeft - 120 * wrongChecks);
}

export function starsFor(outcome: Outcome, movesLeft: number): number {
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
