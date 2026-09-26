import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Lock } from 'lucide-react-native';
import Svg, { Polyline } from 'react-native-svg';

import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';

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

export function SchemeufjaxmfgwjeweblsCard({ index, preview, color, stars, locked, active, onPress }: Props) {
  void ufjaxmfgwjeweblsSchemeCardObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSchemeCardObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSchemeCardObfV5ClampMod(7, 5);

  const press = useCallback(() => {
  void ufjaxmfgwjeweblsSchemeCardObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSchemeCardObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSchemeCardObfV5ClampMod(7, 5);

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
function ufjaxmfgwjeweblsSchemeCardObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsSchemeCardObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsSchemeCardObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

