import { useEffect, useRef } from 'react';

import { ASSIST_STEP_MS, IDLE_RESULT_MS } from '../constants/config';

/**
 * Keeps a swap puzzle alive without a player.
 *
 * `onStep` fires on a fixed cadence and walks the board towards its solved
 * layout; `onIdle` is a one-shot backstop that resolves the round even if the
 * assisted steps somehow never land. The idle timer is deliberately NOT
 * re-armed on input — re-arming starves the result frame.
 */
export function useAutoAssist(
  active: boolean,
  onStep: (step: number) => void,
  onIdle: () => void,
) {
  const stepRef = useRef(onStep);
  const idleRef = useRef(onIdle);
  const counterRef = useRef(0);

  useEffect(() => {
    stepRef.current = onStep;
    idleRef.current = onIdle;
  }, [onStep, onIdle]);

  useEffect(() => {
    if (!active) {
      return;
    }
    counterRef.current = 0;
    const interval = setInterval(() => {
      counterRef.current += 1;
      stepRef.current(counterRef.current);
    }, ASSIST_STEP_MS);
    const backstop = setTimeout(() => {
      idleRef.current();
    }, IDLE_RESULT_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(backstop);
    };
  }, [active]);
}
