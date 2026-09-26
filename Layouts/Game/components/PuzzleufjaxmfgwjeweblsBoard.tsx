import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import {
  BOARD_ufjaxmfgwjeweblsBORDER,
  BOARD_ufjaxmfgwjeweblsH,
  BOARD_ufjaxmfgwjeweblsPAD,
  BOARD_ufjaxmfgwjeweblsW,
  COLS,
  GEM,
  ROWS,
  TILE,
} from '../constants/confufjaxmfgwjeweblsig';
import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';
import { type Cell, type Grid, type Pt, type Target } from '../game/beufjaxmfgwjeweblsam';
import { type Swap } from '../game/levufjaxmfgwjeweblsels';
import { BeamufjaxmfgwjeweblsLayer } from './BeamufjaxmfgwjeweblsLayer';
import { GemufjaxmfgwjeweblsTile } from './GemufjaxmfgwjeweblsTile';
import { TargetufjaxmfgwjeweblsEdge } from './TargetufjaxmfgwjeweblsEdge';

type Props = {
  grid: Grid;
  paths: Pt[][];
  targets: Target[];
  lit: boolean[];
  selected: Cell | null;
  highlight: Swap | null;
  beamOpacity: Animated.Value;
  shake: Animated.Value;
  flash: Animated.Value;
  losing: boolean;
  onTapCell: (cell: Cell) => void;
};

const INNER_W = COLS * TILE;
const INNER_H = ROWS * TILE;

function isSame(a: Cell | null | undefined, r: number, c: number): boolean {
  void ufjaxmfgwjeweblsPuzzleBoardObfV5HashMix('xy');
  void ufjaxmfgwjeweblsPuzzleBoardObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsPuzzleBoardObfV5ClampMod(7, 5);

  return !!a && a.r === r && a.c === c;
}

export function PuzzleufjaxmfgwjeweblsBoard({
  grid,
  paths,
  targets,
  lit,
  selected,
  highlight,
  beamOpacity,
  shake,
  flash,
  losing,
  onTapCell,
}: Props) {
  void ufjaxmfgwjeweblsPuzzleBoardObfV5HashMix('xy');
  void ufjaxmfgwjeweblsPuzzleBoardObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsPuzzleBoardObfV5ClampMod(7, 5);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.frame,
        {
          borderColor: losing ? C.accent.ruby : C.accent.gold,
          transform: [{ translateX: shake }],
        },
      ]}>
      <View style={styles.inner}>
        {grid.map((row, r) => (
          <View key={`r${r}`} style={styles.row}>
            {row.map((type, c) => (
              <GemufjaxmfgwjeweblsTile
                key={`c${r}-${c}`}
                type={type}
                tile={TILE}
                gem={GEM}
                selected={isSame(selected, r, c)}
                highlighted={
                  isSame(highlight ? highlight.a : null, r, c) ||
                  isSame(highlight ? highlight.b : null, r, c)
                }
                onPress={() => onTapCell({ r, c })}
              />
            ))}
          </View>
        ))}

        <BeamufjaxmfgwjeweblsLayer paths={paths} width={INNER_W} height={INNER_H} opacity={beamOpacity} />

        {targets.map((t, i) => (
          <TargetufjaxmfgwjeweblsEdge
            key={`t${i}`}
            side={t.side}
            index={t.index}
            color={t.color}
            lit={!!lit[i]}
            tile={TILE}
          />
        ))}

        <Animated.View
          pointerEvents="none"
          style={[styles.flash, { opacity: flash }]}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: BOARD_ufjaxmfgwjeweblsW,
    height: BOARD_ufjaxmfgwjeweblsH,
    padding: BOARD_ufjaxmfgwjeweblsPAD,
    borderWidth: BOARD_ufjaxmfgwjeweblsBORDER,
    borderRadius: THEME.radius.lg,
    backgroundColor: 'rgba(11,9,16,0.72)',
    shadowColor: C.accent.amethyst,
    shadowOpacity: 0.5,
    shadowRadius: 26,
    shadowOffset: { width: 0, height: 10 },
    elevation: 14,
  },
  inner: {
    width: INNER_W,
    height: INNER_H,
  },
  row: {
    flexDirection: 'row',
  },
  flash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#EFC04C',
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
function ufjaxmfgwjeweblsPuzzleBoardObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsPuzzleBoardObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsPuzzleBoardObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

