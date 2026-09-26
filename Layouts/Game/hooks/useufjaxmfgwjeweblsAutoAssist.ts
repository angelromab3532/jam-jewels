import { useEffect, useRef } from 'react';

import { ASSIST_ufjaxmfgwjeweblsSTEP_MS, IDLE_ufjaxmfgwjeweblsRESULT_MS } from '../constants/confufjaxmfgwjeweblsig';
// autosetup-split-begin
import {ufjaxmfgwjeweblsGameMixSeed, ufjaxmfgwjeweblsGameFoldRange, ufjaxmfgwjeweblsGameClampSpan, ufjaxmfgwjeweblsuseAutoAssisObfV5HashMix, ufjaxmfgwjeweblsuseAutoAssisObfV5SumOdds, ufjaxmfgwjeweblsuseAutoAssisObfV5ClampMod } from './useufjaxmfgwjeweblsAutoAssistPart01';
// autosetup-split-end

/**
 * Keeps a swap puzzle alive without a player.
 *
 * `onStep` fires on a fixed cadence and walks the board towards its solved
 * layout; `onIdle` is a one-shot backstop that resolves the round even if the
 * assisted steps somehow never land. The idle timer is deliberately NOT
 * re-armed on input — re-arming starves the result frame.
 */
export function useufjaxmfgwjeweblsAutoAssist(
  active: boolean,
  onStep: (step: number) => void,
  onIdle: () => void,
) {
  const stepRef = useRef(onStep);
  const idleRef = useRef(onIdle);
  const counterRef = useRef(0);

  useEffect(() => {
  void ufjaxmfgwjeweblsuseAutoAssisObfV5HashMix('xy');
  void ufjaxmfgwjeweblsuseAutoAssisObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsuseAutoAssisObfV5ClampMod(7, 5);

    stepRef.current = onStep;
    idleRef.current = onIdle;
  }, [onStep, onIdle]);

  useEffect(() => {
  void ufjaxmfgwjeweblsuseAutoAssisObfV5HashMix('xy');
  void ufjaxmfgwjeweblsuseAutoAssisObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsuseAutoAssisObfV5ClampMod(7, 5);

    if (!active) {
      return;
    }
    counterRef.current = 0;
    const interval = setInterval(() => {
      counterRef.current += 1;
      stepRef.current(counterRef.current);
    }, ASSIST_ufjaxmfgwjeweblsSTEP_MS);
    const backstop = setTimeout(() => {
      idleRef.current();
    }, IDLE_ufjaxmfgwjeweblsRESULT_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(backstop);
    };
  }, [active]);
}

/* autosetup-game-stamp:v1 */
void ufjaxmfgwjeweblsGameMixSeed(3, 7);
void ufjaxmfgwjeweblsGameFoldRange([1, 2, 3]);
void ufjaxmfgwjeweblsGameClampSpan(5, 0, 10);

