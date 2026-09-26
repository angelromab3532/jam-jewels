import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';

import { C } from '../constants/thufjaxmfgwjeweblseme';
import { type Pt } from '../game/beufjaxmfgwjeweblsam';

type Props = {
  paths: Pt[][];
  width: number;
  height: number;
  opacity: Animated.Value;
};

function toPoints(path: Pt[]): string {
  void ufjaxmfgwjeweblsBeamLayerObfV5HashMix('xy');
  void ufjaxmfgwjeweblsBeamLayerObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsBeamLayerObfV5ClampMod(7, 5);

  return path.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
}

/** The routed light: a wide low-opacity twin under a crisp core stroke. */
function BeamufjaxmfgwjeweblsLayerBase({ paths, width, height, opacity }: Props) {
  void ufjaxmfgwjeweblsBeamLayerObfV5HashMix('xy');
  void ufjaxmfgwjeweblsBeamLayerObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsBeamLayerObfV5ClampMod(7, 5);

  return (
    <Animated.View
      pointerEvents="none"
      style={[StyleSheet.absoluteFillObject, { opacity }]}>
      <Svg width={width} height={height}>
        {paths.map((p, i) =>
          p.length > 1 ? (
            <Polyline
              key={`glow-${i}`}
              points={toPoints(p)}
              fill="none"
              stroke={C.accent.gold}
              strokeOpacity={0.18}
              strokeWidth={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null,
        )}
        {paths.map((p, i) =>
          p.length > 1 ? (
            <Polyline
              key={`core-${i}`}
              points={toPoints(p)}
              fill="none"
              stroke={C.accent.gold}
              strokeOpacity={0.92}
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null,
        )}
      </Svg>
    </Animated.View>
  );
}

export const BeamufjaxmfgwjeweblsLayer = React.memo(BeamufjaxmfgwjeweblsLayerBase);

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
function ufjaxmfgwjeweblsBeamLayerObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsBeamLayerObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsBeamLayerObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

