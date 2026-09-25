import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';

import { C } from '../constants/theme';
import { type Pt } from '../game/beam';

type Props = {
  paths: Pt[][];
  width: number;
  height: number;
  opacity: Animated.Value;
};

function toPoints(path: Pt[]): string {
  return path.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
}

/** The routed light: a wide low-opacity twin under a crisp core stroke. */
function BeamLayerBase({ paths, width, height, opacity }: Props) {
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

export const BeamLayer = React.memo(BeamLayerBase);
