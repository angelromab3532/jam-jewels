import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

import {
  MAX_ufjaxmfgwjeweblsWRONG_CHECKS,
  TILE,
  WIN_ufjaxmfgwjeweblsHOLD_MS,
} from '../constants/confufjaxmfgwjeweblsig';
import {
  areufjaxmfgwjeweblsNeighbours,
  cloneufjaxmfgwjeweblsGrid,
  litufjaxmfgwjeweblsFlags,
  swapufjaxmfgwjeweblsCells,
  traceufjaxmfgwjeweblsBeam,
  type Cell,
  type Grid,
} from '../game/beufjaxmfgwjeweblsam';
import { getufjaxmfgwjeweblsLevel, type Swap } from '../game/levufjaxmfgwjeweblsels';
import { scoreufjaxmfgwjeweblsRound, starsufjaxmfgwjeweblsFor, type Outcome, type RoundufjaxmfgwjeweblsStats } from '../game/scorufjaxmfgwjeweblsing';
import { useufjaxmfgwjeweblsAutoAssist } from './useufjaxmfgwjeweblsAutoAssist';

export type Phase = 'idle' | 'win' | 'lose';

const MAX_ASSIST_STEPS = 3;

export function useufjaxmfgwjeweblsPuzzle(levelIndex: number, onFinish: (s: RoundufjaxmfgwjeweblsStats) => void) {
  const level = useMemo(() => getufjaxmfgwjeweblsLevel(levelIndex), [levelIndex]);

  const [grid, setGrid] = useState<Grid>(() => cloneufjaxmfgwjeweblsGrid(level.start));
  const [selected, setSelected] = useState<Cell | null>(null);
  const [movesLeft, setMovesLeft] = useState(level.moves);
  const [wrongChecks, setWrongChecks] = useState(0);
  const [highlight, setHighlight] = useState<Swap | null>(null);
  const [phase, setPhase] = useState<Phase>('idle');

  const selectedRef = useRef<Cell | null>(null);
  const movesRef = useRef(level.moves);
  const wrongRef = useRef(0);
  const litRef = useRef(0);
  const doneRef = useRef(false);
  const finishRef = useRef(onFinish);
  const beamOpacity = useRef(new Animated.Value(1)).current;
  const shake = useRef(new Animated.Value(0)).current;
  const flash = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

    finishRef.current = onFinish;
  }, [onFinish]);

  const setSel = useCallback((next: Cell | null) => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

    selectedRef.current = next;
    setSelected(next);
  }, []);

  const trace = useMemo(() => traceufjaxmfgwjeweblsBeam(grid, TILE), [grid]);
  const lit = useMemo(() => litufjaxmfgwjeweblsFlags(trace.exits, level.targets), [trace, level]);
  const litCount = lit.filter(Boolean).length;
  const allLit = litCount === level.targets.length;

  useEffect(() => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

    litRef.current = litCount;
  }, [litCount]);

  // Redraw pulse whenever the routed light changes.
  useEffect(() => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

    beamOpacity.setValue(0.15);
    Animated.timing(beamOpacity, {
      toValue: 1,
      duration: 220,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [trace, beamOpacity]);

  const runShake = useCallback(() => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

    shake.setValue(0);
    Animated.sequence([
      Animated.timing(shake, { toValue: 6, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -6, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 4, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 0, duration: 60, useNativeDriver: true }),
    ]).start();
  }, [shake]);

  const finish = useCallback(
    (outcome: Outcome) => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

      if (doneRef.current) {
        return;
      }
      doneRef.current = true;

      const edgesLit = litRef.current;
      const left = movesRef.current;
      const wrong = wrongRef.current;
      const stats: RoundufjaxmfgwjeweblsStats = {
        outcome,
        edgesLit,
        edgesTotal: level.targets.length,
        movesUsed: level.moves - left,
        movesLeft: left,
        wrongChecks: wrong,
        score: scoreufjaxmfgwjeweblsRound(edgesLit, left, wrong),
        stars: starsufjaxmfgwjeweblsFor(outcome, left),
      };

      if (outcome === 'win') {
        setPhase('win');
        Animated.sequence([
          Animated.timing(flash, { toValue: 0.35, duration: 220, useNativeDriver: true }),
          Animated.timing(flash, { toValue: 0, duration: 280, useNativeDriver: true }),
        ]).start();
      } else {
        setPhase('lose');
        runShake();
      }

      setTimeout(() => finishRef.current(stats), WIN_ufjaxmfgwjeweblsHOLD_MS);
    },
    [flash, level, runShake],
  );

  useEffect(() => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

    if (allLit && !doneRef.current) {
      finish('win');
    }
  }, [allLit, finish]);

  const handleAssistStep = useCallback(
    (step: number) => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

      if (doneRef.current) {
        return;
      }
      const solution = level.solution;
      setSel(null);

      if (step >= MAX_ASSIST_STEPS || step >= solution.length || solution.length === 0) {
        setHighlight(solution.length > 0 ? solution[solution.length - 1] : null);
        setGrid(cloneufjaxmfgwjeweblsGrid(level.solved));
      } else {
        const move = solution[step - 1];
        setHighlight(move);
        setGrid(prev => swapufjaxmfgwjeweblsCells(prev, move.a, move.b));
      }
      setTimeout(() => setHighlight(null), 520);
    },
    [level, setSel],
  );

  const handleIdle = useCallback(() => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

    finish('timeup');
  }, [finish]);

  useufjaxmfgwjeweblsAutoAssist(phase === 'idle', handleAssistStep, handleIdle);

  const onTapCell = useCallback(
    (cell: Cell) => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

      if (doneRef.current) {
        return;
      }
      if (cell.r === 0 && cell.c === 0) {
        return;
      }
      const prev = selectedRef.current;
      if (!prev) {
        setSel(cell);
        return;
      }
      if (prev.r === cell.r && prev.c === cell.c) {
        setSel(null);
        return;
      }
      if (!areufjaxmfgwjeweblsNeighbours(prev, cell)) {
        setSel(cell);
        return;
      }

      setSel(null);
      setGrid(current => swapufjaxmfgwjeweblsCells(current, prev, cell));
      setHighlight({ a: prev, b: cell });
      setTimeout(() => setHighlight(null), 320);

      const left = Math.max(0, movesRef.current - 1);
      movesRef.current = left;
      setMovesLeft(left);
      if (left === 0) {
        setTimeout(() => {
          if (!doneRef.current) {
            finish('moves');
          }
        }, 520);
      }
    },
    [finish, setSel],
  );

  const onCheck = useCallback(() => {
  void ufjaxmfgwjeweblsusePuzzleObfV5HashMix('xy');
  void ufjaxmfgwjeweblsusePuzzleObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(7, 5);

    if (doneRef.current) {
      return;
    }
    if (litRef.current === level.targets.length) {
      finish('win');
      return;
    }
    const wrong = wrongRef.current + 1;
    wrongRef.current = wrong;
    setWrongChecks(wrong);
    runShake();
    if (wrong >= MAX_ufjaxmfgwjeweblsWRONG_CHECKS) {
      setTimeout(() => finish('checks'), 420);
    }
  }, [finish, level, runShake]);

  return {
    level,
    grid,
    paths: trace.paths,
    lit,
    litCount,
    selected,
    highlight,
    movesLeft,
    wrongChecks,
    phase,
    beamOpacity,
    shake,
    flash,
    onTapCell,
    onCheck,
  };
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
function ufjaxmfgwjeweblsusePuzzleObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsusePuzzleObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsusePuzzleObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

