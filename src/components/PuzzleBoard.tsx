import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import {
  BOARD_BORDER,
  BOARD_H,
  BOARD_PAD,
  BOARD_W,
  COLS,
  GEM,
  ROWS,
  TILE,
} from '../constants/config';
import { C, THEME } from '../constants/theme';
import { type Cell, type Grid, type Pt, type Target } from '../game/beam';
import { type Swap } from '../game/levels';
import { BeamLayer } from './BeamLayer';
import { GemTile } from './GemTile';
import { TargetEdge } from './TargetEdge';

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
  return !!a && a.r === r && a.c === c;
}

export function PuzzleBoard({
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
              <GemTile
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

        <BeamLayer paths={paths} width={INNER_W} height={INNER_H} opacity={beamOpacity} />

        {targets.map((t, i) => (
          <TargetEdge
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
    width: BOARD_W,
    height: BOARD_H,
    padding: BOARD_PAD,
    borderWidth: BOARD_BORDER,
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
