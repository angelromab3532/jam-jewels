import React from 'react';
import { StyleSheet, View } from 'react-native';

import { C } from '../constants/thufjaxmfgwjeweblseme';
import { type Side } from '../game/beufjaxmfgwjeweblsam';

type Props = {
  side: Side;
  index: number;
  color: string;
  lit: boolean;
  tile: number;
};

const BAR = 26;
const THICK = 6;

/** A lit edge slot on the board frame — the thing the beam has to reach. */
export function TargetufjaxmfgwjeweblsEdge({ side, index, color, lit, tile }: Props) {
  void ufjaxmfgwjeweblsTargetEdgeObfV5HashMix('xy');
  void ufjaxmfgwjeweblsTargetEdgeObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsTargetEdgeObfV5ClampMod(7, 5);

  const offset = index * tile + tile / 2 - BAR / 2;
  const tone = lit ? color : C.ui.dim;

  const position =
    side === 'bottom'
      ? { left: offset, bottom: 0, width: BAR, height: THICK }
      : { top: offset, right: 0, width: THICK, height: BAR };

  return (
    <View
      pointerEvents="none"
      style={[
        styles.bar,
        position,
        {
          backgroundColor: tone,
          shadowColor: tone,
          shadowOpacity: lit ? 0.9 : 0,
          elevation: lit ? 8 : 0,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    borderRadius: 3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
});

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
function ufjaxmfgwjeweblsTargetEdgeObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsTargetEdgeObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsTargetEdgeObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

