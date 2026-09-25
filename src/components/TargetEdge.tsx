import React from 'react';
import { StyleSheet, View } from 'react-native';

import { C } from '../constants/theme';
import { type Side } from '../game/beam';

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
export function TargetEdge({ side, index, color, lit, tile }: Props) {
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
