import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

import {
  MAX_WRONG_CHECKS,
  TILE,
  WIN_HOLD_MS,
} from '../constants/config';
import {
  areNeighbours,
  cloneGrid,
  litFlags,
  swapCells,
  traceBeam,
  type Cell,
  type Grid,
} from '../game/beam';
import { getLevel, type Swap } from '../game/levels';
import { scoreRound, starsFor, type Outcome, type RoundStats } from '../game/scoring';
import { useAutoAssist } from './useAutoAssist';

export type Phase = 'idle' | 'win' | 'lose';

const MAX_ASSIST_STEPS = 3;

export function usePuzzle(levelIndex: number, onFinish: (s: RoundStats) => void) {
  const level = useMemo(() => getLevel(levelIndex), [levelIndex]);

  const [grid, setGrid] = useState<Grid>(() => cloneGrid(level.start));
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
    finishRef.current = onFinish;
  }, [onFinish]);

  const setSel = useCallback((next: Cell | null) => {
    selectedRef.current = next;
    setSelected(next);
  }, []);

  const trace = useMemo(() => traceBeam(grid, TILE), [grid]);
  const lit = useMemo(() => litFlags(trace.exits, level.targets), [trace, level]);
  const litCount = lit.filter(Boolean).length;
  const allLit = litCount === level.targets.length;

  useEffect(() => {
    litRef.current = litCount;
  }, [litCount]);

  // Redraw pulse whenever the routed light changes.
  useEffect(() => {
    beamOpacity.setValue(0.15);
    Animated.timing(beamOpacity, {
      toValue: 1,
      duration: 220,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [trace, beamOpacity]);

  const runShake = useCallback(() => {
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
      if (doneRef.current) {
        return;
      }
      doneRef.current = true;

      const edgesLit = litRef.current;
      const left = movesRef.current;
      const wrong = wrongRef.current;
      const stats: RoundStats = {
        outcome,
        edgesLit,
        edgesTotal: level.targets.length,
        movesUsed: level.moves - left,
        movesLeft: left,
        wrongChecks: wrong,
        score: scoreRound(edgesLit, left, wrong),
        stars: starsFor(outcome, left),
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

      setTimeout(() => finishRef.current(stats), WIN_HOLD_MS);
    },
    [flash, level, runShake],
  );

  useEffect(() => {
    if (allLit && !doneRef.current) {
      finish('win');
    }
  }, [allLit, finish]);

  const handleAssistStep = useCallback(
    (step: number) => {
      if (doneRef.current) {
        return;
      }
      const solution = level.solution;
      setSel(null);

      if (step >= MAX_ASSIST_STEPS || step >= solution.length || solution.length === 0) {
        setHighlight(solution.length > 0 ? solution[solution.length - 1] : null);
        setGrid(cloneGrid(level.solved));
      } else {
        const move = solution[step - 1];
        setHighlight(move);
        setGrid(prev => swapCells(prev, move.a, move.b));
      }
      setTimeout(() => setHighlight(null), 520);
    },
    [level, setSel],
  );

  const handleIdle = useCallback(() => {
    finish('timeup');
  }, [finish]);

  useAutoAssist(phase === 'idle', handleAssistStep, handleIdle);

  const onTapCell = useCallback(
    (cell: Cell) => {
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
      if (!areNeighbours(prev, cell)) {
        setSel(cell);
        return;
      }

      setSel(null);
      setGrid(current => swapCells(current, prev, cell));
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
    if (wrong >= MAX_WRONG_CHECKS) {
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
