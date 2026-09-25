/**
 * Pure light-tracing for the puzzle board.
 *
 * The source sits at (0,0) and fires to the right. Mirrors bend the branch,
 * prisms split it (straight + a clockwise turn), blocks swallow it. A branch
 * that leaves the grid lights the edge slot it exited through.
 */

export type GemType =
  | 'SOURCE'
  | 'EMPTY_GLASS'
  | 'MIRROR_A'
  | 'MIRROR_B'
  | 'PRISM'
  | 'BLOCK';

export type Dir = 'right' | 'left' | 'up' | 'down';
export type Cell = { r: number; c: number };
export type Pt = { x: number; y: number };
export type Side = 'right' | 'bottom' | 'left' | 'top';
export type Exit = { side: Side; index: number };
export type Target = { side: Side; index: number; color: string };
export type Grid = GemType[][];

export type Trace = {
  paths: Pt[][];
  exits: Exit[];
  visited: string[];
};

const STEP: Record<Dir, Cell> = {
  right: { r: 0, c: 1 },
  left: { r: 0, c: -1 },
  up: { r: -1, c: 0 },
  down: { r: 1, c: 0 },
};

/** "/" mirror. */
const BEND_A: Record<Dir, Dir> = {
  right: 'up',
  up: 'right',
  left: 'down',
  down: 'left',
};

/** "\" mirror. */
const BEND_B: Record<Dir, Dir> = {
  right: 'down',
  down: 'right',
  left: 'up',
  up: 'left',
};

/** Clockwise quarter turn — the prism's secondary branch. */
const TURN_CW: Record<Dir, Dir> = {
  right: 'down',
  down: 'left',
  left: 'up',
  up: 'right',
};

const MAX_STEPS = 120;
const MAX_BRANCHES = 6;

export function cloneGrid(grid: Grid): Grid {
  return grid.map(row => row.slice());
}

export function swapCells(grid: Grid, a: Cell, b: Cell): Grid {
  const next = cloneGrid(grid);
  const tmp = next[a.r][a.c];
  next[a.r][a.c] = next[b.r][b.c];
  next[b.r][b.c] = tmp;
  return next;
}

export function areNeighbours(a: Cell, b: Cell): boolean {
  return Math.abs(a.r - b.r) + Math.abs(a.c - b.c) === 1;
}

function center(r: number, c: number, tile: number): Pt {
  return { x: c * tile + tile / 2, y: r * tile + tile / 2 };
}

/**
 * Trace every branch of the beam through `grid`.
 * Coordinates come back in board-inner pixels (0 .. cols*tile).
 */
export function traceBeam(grid: Grid, tile: number): Trace {
  const rows = grid.length;
  const cols = grid[0].length;

  const paths: Pt[][] = [];
  const exits: Exit[] = [];
  const visited: Record<string, true> = {};

  type Branch = { r: number; c: number; dir: Dir; pts: Pt[] };
  const queue: Branch[] = [
    { r: 0, c: 0, dir: 'right', pts: [center(0, 0, tile)] },
  ];
  visited['0,0'] = true;

  let spawned = 1;

  while (queue.length > 0) {
    const branch = queue.shift() as Branch;
    let { r, c, dir } = branch;
    const pts = branch.pts;

    for (let step = 0; step < MAX_STEPS; step++) {
      const d = STEP[dir];
      const nr = r + d.r;
      const nc = c + d.c;

      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
        // Leaves the grid: pin the polyline to the frame and record the slot.
        if (dir === 'right') {
          pts.push({ x: cols * tile, y: r * tile + tile / 2 });
          exits.push({ side: 'right', index: r });
        } else if (dir === 'left') {
          pts.push({ x: 0, y: r * tile + tile / 2 });
          exits.push({ side: 'left', index: r });
        } else if (dir === 'down') {
          pts.push({ x: c * tile + tile / 2, y: rows * tile });
          exits.push({ side: 'bottom', index: c });
        } else {
          pts.push({ x: c * tile + tile / 2, y: 0 });
          exits.push({ side: 'top', index: c });
        }
        break;
      }

      r = nr;
      c = nc;
      pts.push(center(r, c, tile));
      visited[r + ',' + c] = true;

      const gem = grid[r][c];
      if (gem === 'BLOCK') {
        break;
      }
      if (gem === 'MIRROR_A') {
        dir = BEND_A[dir];
      } else if (gem === 'MIRROR_B') {
        dir = BEND_B[dir];
      } else if (gem === 'PRISM' && spawned < MAX_BRANCHES) {
        spawned += 1;
        queue.push({
          r,
          c,
          dir: TURN_CW[dir],
          pts: [center(r, c, tile)],
        });
      }
    }

    paths.push(pts);
  }

  return { paths, exits, visited: Object.keys(visited) };
}

export function litFlags(exits: Exit[], targets: Target[]): boolean[] {
  return targets.map(t =>
    exits.some(e => e.side === t.side && e.index === t.index),
  );
}

export function countLit(exits: Exit[], targets: Target[]): number {
  return litFlags(exits, targets).filter(Boolean).length;
}
