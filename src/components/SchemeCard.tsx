import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Lock } from 'lucide-react-native';
import Svg, { Polyline } from 'react-native-svg';

import { C, THEME } from '../constants/theme';

type Props = {
  index: number;
  preview: string;
  color: string;
  stars: number;
  locked: boolean;
  active: boolean;
  onPress: (index: number) => void;
};

const HIT = { top: 6, bottom: 6, left: 6, right: 6 };

export function SchemeCard({ index, preview, color, stars, locked, active, onPress }: Props) {
  const press = useCallback(() => {
    onPress(index);
  }, [index, onPress]);

  return (
    <Pressable
      onPress={press}
      hitSlop={HIT}
      disabled={locked}
      accessibilityRole="button"
      accessibilityLabel={`Scheme ${index + 1}`}
      style={[
        styles.card,
        {
          borderColor: active ? color : color + '55',
          opacity: locked ? 0.35 : 1,
          backgroundColor: active ? color + '1A' : C.ui.glassLight,
        },
      ]}>
      <Svg width={54} height={40}>
        <Polyline
          points={preview}
          fill="none"
          stroke={color}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
      <Text style={[styles.num, { color: C.text.primary }]}>{index + 1}</Text>
      <View style={styles.starRow}>
        {locked ? (
          <Lock size={14} color={C.text.secondary} strokeWidth={1.8} />
        ) : (
          [0, 1, 2].map(i => (
            <Text
              key={i}
              style={[styles.star, { color: i < stars ? C.accent.gold : C.ui.dim }]}>
              ★
            </Text>
          ))
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 98,
    height: 110,
    borderRadius: THEME.radius.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
  },
  num: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 2,
    fontVariant: THEME.numeric.fontVariant,
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    height: 16,
    marginTop: 2,
  },
  star: {
    fontSize: 11,
    lineHeight: 14,
  },
});
