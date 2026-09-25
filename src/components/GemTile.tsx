import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Line,
  Polygon,
  Rect,
  Stop,
} from 'react-native-svg';

import { C, THEME } from '../constants/theme';
import { type GemType } from '../game/beam';

type Props = {
  type: GemType;
  tile: number;
  gem: number;
  selected: boolean;
  highlighted: boolean;
  onPress: () => void;
};

const HIT = { top: 2, bottom: 2, left: 2, right: 2 };

function GemArt({ type, s }: { type: GemType; s: number }) {
  const h = s / 2;
  const body = `${h},2 ${s - 2},${h} ${h},${s - 2} 2,${h}`;

  if (type === 'SOURCE') {
    return (
      <Svg width={s} height={s}>
        <Circle cx={h} cy={h} r={h * 0.92} fill={C.accent.gold} opacity={0.14} />
        <Circle cx={h} cy={h} r={h * 0.7} fill={C.accent.gold} opacity={0.22} />
        <Circle cx={h} cy={h} r={h * 0.46} fill={C.accent.gold} />
        <Circle cx={h * 0.82} cy={h * 0.78} r={h * 0.14} fill="#FFF6DC" />
      </Svg>
    );
  }

  if (type === 'BLOCK') {
    return (
      <Svg width={s} height={s}>
        <Rect
          x={3}
          y={3}
          width={s - 6}
          height={s - 6}
          rx={7}
          fill={C.accent.granite}
          stroke="rgba(244,232,216,0.10)"
          strokeWidth={1}
        />
        <Line
          x1={s * 0.28}
          y1={s * 0.28}
          x2={s * 0.72}
          y2={s * 0.72}
          stroke="rgba(244,232,216,0.10)"
          strokeWidth={2}
        />
      </Svg>
    );
  }

  if (type === 'EMPTY_GLASS') {
    return (
      <Svg width={s} height={s}>
        <Rect
          x={4}
          y={4}
          width={s - 8}
          height={s - 8}
          rx={8}
          fill="rgba(244,232,216,0.06)"
          stroke="rgba(244,232,216,0.12)"
          strokeWidth={1}
        />
        <Line
          x1={s * 0.3}
          y1={s * 0.66}
          x2={s * 0.66}
          y2={s * 0.3}
          stroke="rgba(244,232,216,0.10)"
          strokeWidth={1.5}
        />
      </Svg>
    );
  }

  if (type === 'PRISM') {
    return (
      <Svg width={s} height={s}>
        <Defs>
          <LinearGradient id="gemPrism" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#5FE3D4" />
            <Stop offset="1" stopColor="#1E8C81" />
          </LinearGradient>
        </Defs>
        <Polygon points={body} fill="url(#gemPrism)" stroke="#8FF3E7" strokeWidth={1} />
        <Polygon
          points={`${h},${s * 0.3} ${s * 0.7},${s * 0.66} ${s * 0.3},${s * 0.66}`}
          fill="#F4E8D8"
          opacity={0.6}
        />
      </Svg>
    );
  }

  const isA = type === 'MIRROR_A';
  const gradId = isA ? 'gemMirrorA' : 'gemMirrorB';
  const from = isA ? '#9A63D6' : '#EB6089';
  const to = isA ? '#5C2C91' : '#A42349';

  return (
    <Svg width={s} height={s}>
      <Defs>
        <LinearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor={from} />
          <Stop offset="1" stopColor={to} />
        </LinearGradient>
      </Defs>
      <Polygon
        points={body}
        fill={`url(#${gradId})`}
        stroke={isA ? '#B78BE6' : '#F08FA9'}
        strokeWidth={1}
      />
      <Line
        x1={isA ? s * 0.22 : s * 0.22}
        y1={isA ? s * 0.78 : s * 0.22}
        x2={isA ? s * 0.78 : s * 0.78}
        y2={isA ? s * 0.22 : s * 0.78}
        stroke="#F4E8D8"
        strokeWidth={2.4}
        strokeOpacity={0.78}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function GemTileBase({ type, tile, gem, selected, highlighted, onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: selected ? 1.08 : 1,
      tension: 60,
      friction: 6,
      useNativeDriver: true,
    }).start();
  }, [selected, scale]);

  const press = useCallback(() => {
    onPress();
  }, [onPress]);

  const ring = selected
    ? C.text.primary
    : highlighted
    ? '#FFFFFF'
    : 'transparent';

  return (
    <Pressable
      onPress={press}
      hitSlop={HIT}
      accessibilityRole="button"
      accessibilityLabel={type}
      style={[styles.slot, { width: tile, height: tile }]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.inner,
          {
            width: gem,
            height: gem,
            borderColor: ring,
            transform: [{ scale }],
          },
        ]}>
        <GemArt type={type} s={gem} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  slot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: THEME.radius.sm,
  },
});

export const GemTile = React.memo(GemTileBase);
