/**
 * Scheme construction.
 *
 * Every scheme is built the safe way round: first the SOLVED board is laid out
 * from a hand-authored light route, then the tracer itself decides where the
 * three target edges are, then a deterministic set of adjacent swaps scrambles
 * it. The solution is simply that scramble replayed backwards, so a scheme can
 * never be unsolvable and the targets can never be unreachable.
 */

import { COLS, ROWS, TOTAL_LEVELS } from '../constants/config';
import { THEME } from '../constants/theme';
import {
  cloneGrid,
  countLit,
  traceBeam,
  type Cell,
  type GemType,
  type Grid,
  type Target,
} from './beam';

export type Swap = { a: Cell; b: Cell };

export type Level = {
  index: number;
  start: Grid;
  solved: Grid;
  targets: Target[];
  solution: Swap[];
  moves: number;
  difficulty: 0 | 1 | 2;
};

type Placement = { r: number; c: number; type: GemType };

const ROUTES: Placement[][] = [
  [
    { r: 0, c: 1, type: 'PRISM' },
    { r: 0, c: 3, type: 'PRISM' },
    { r: 2, c: 3, type: 'MIRROR_B' },
    { r: 3, c: 1, type: 'MIRROR_B' },
    { r: 3, c: 2, type: 'MIRROR_B' },
  ],
  [
    { r: 0, c: 1, type: 'MIRROR_B' },
    { r: 1, c: 1, type: 'MIRROR_B' },
    { r: 1, c: 2, type: 'PRISM' },
    { r: 3, c: 2, type: 'MIRROR_B' },
    { r: 3, c: 3, type: 'PRISM' },
  ],
  [
    { r: 0, c: 1, type: 'PRISM' },
    { r: 0, c: 3, type: 'MIRROR_B' },
    { r: 2, c: 1, type: 'MIRROR_B' },
    { r: 2, c: 4, type: 'PRISM' },
  ],
];

const TARGET_COLORS = [
  THEME.colors.accent.teal,
  THEME.colors.accent.gold,
  THEME.colors.accent.ruby,
];

const DECOR: GemType[] = ['BLOCK', 'MIRROR_A', 'MIRROR_A', 'BLOCK', 'MIRROR_A'];

function makeRng(seed: number): () => number {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 4294967296;
  };
}

function blankGrid(): Grid {
  const grid: Grid = [];
  for (let r = 0; r < ROWS; r++) {
    const row: GemType[] = [];
    for (let c = 0; c < COLS; c++) {
      row.push('EMPTY_GLASS');
    }
    grid.push(row);
  }
  grid[0][0] = 'SOURCE';
  return grid;
}

function buildSolved(routeIndex: number, seed: number) {
  const grid = blankGrid();
  const route = ROUTES[routeIndex % ROUTES.length];
  for (const p of route) {
    grid[p.r][p.c] = p.type;
  }

  // The tracer reports which cells carry light; decor only lands on the rest,
  // so scenery can never silently break the authored route.
  const trace = traceBeam(grid, 10);
  const onBeam: Record<string, true> = {};
  for (const key of trace.visited) {
    onBeam[key] = true;
  }

  const rng = makeRng(seed * 7919 + 13);
  let placed = 0;
  let guard = 0;
  while (placed < DECOR.length && guard < 200) {
    guard += 1;
    const r = Math.floor(rng() * ROWS);
    const c = Math.floor(rng() * COLS);
    const key = r + ',' + c;
    if (onBeam[key] || grid[r][c] !== 'EMPTY_GLASS') {
      continue;
    }
    grid[r][c] = DECOR[placed];
    placed += 1;
  }

  const targets: Target[] = [];
  const seen: Record<string, true> = {};
  for (const exit of trace.exits) {
    const key = exit.side + ':' + exit.index;
    if (seen[key] || targets.length >= 3) {
      continue;
    }
    seen[key] = true;
    targets.push({
      side: exit.side,
      index: exit.index,
      color: TARGET_COLORS[targets.length],
    });
  }

  return { grid, targets };
}

function scramble(solved: Grid, targets: Target[], steps: number, seed: number) {
  for (let attempt = 0; attempt < 60; attempt++) {
    const rng = makeRng(seed * 104729 + attempt * 31 + 7);
    const grid = cloneGrid(solved);
    const applied: Swap[] = [];
    const used: Record<string, true> = { '0,0': true };
    let guard = 0;

    while (applied.length < steps && guard < 400) {
      guard += 1;
      const r = Math.floor(rng() * ROWS);
      const c = Math.floor(rng() * COLS);
      const horizontal = rng() < 0.5;
      const nr = horizontal ? r : r + 1;
      const nc = horizontal ? c + 1 : c;
      if (nr >= ROWS || nc >= COLS) {
        continue;
      }
      const ka = r + ',' + c;
      const kb = nr + ',' + nc;
      if (used[ka] || used[kb]) {
        continue;
      }
      if (grid[r][c] === grid[nr][nc]) {
        continue;
      }
      const tmp = grid[r][c];
      grid[r][c] = grid[nr][nc];
      grid[nr][nc] = tmp;
      used[ka] = true;
      used[kb] = true;
      applied.push({ a: { r, c }, b: { r: nr, c: nc } });
    }

    if (applied.length < steps) {
      continue;
    }
    const lit = countLit(traceBeam(grid, 10).exits, targets);
    if (lit < targets.length) {
      return { start: grid, solution: applied.slice().reverse() };
    }
  }

  return { start: cloneGrid(solved), solution: [] as Swap[] };
}

function buildLevel(index: number): Level {
  const difficulty: 0 | 1 | 2 = index < 4 ? 0 : index < 8 ? 1 : 2;
  const steps = 3 + difficulty;
  const moves = 12 + difficulty * 2;
  const { grid, targets } = buildSolved(index, index + 1);
  const { start, solution } = scramble(grid, targets, steps, index + 1);
  return {
    index,
    start,
    solved: grid,
    targets,
    solution,
    moves,
    difficulty,
  };
}

const CACHE: Record<number, Level> = {};

export function getLevel(index: number): Level {
  const i = ((index % TOTAL_LEVELS) + TOTAL_LEVELS) % TOTAL_LEVELS;
  if (!CACHE[i]) {
    CACHE[i] = buildLevel(i);
  }
  return CACHE[i];
}

export function difficultyColor(index: number): string {
  if (index < 4) {
    return THEME.colors.accent.teal;
  }
  if (index < 8) {
    return THEME.colors.accent.gold;
  }
  return THEME.colors.accent.ruby;
}
