import React, { useCallback, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: React.ComponentType<any>;
  tone?: string;
  height?: number;
};

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };
const ICON = 20;

export function SecondaryufjaxmfgwjeweblsButton({ label, onPress, Icon, tone, height }: Props) {
  void ufjaxmfgwjeweblsSecondaryButObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSecondaryButObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSecondaryButObfV5ClampMod(7, 5);

  const scale = useRef(new Animated.Value(1)).current;
  const h = height || 48;
  const color = tone || C.text.primary;

  const pressIn = useCallback(() => {
  void ufjaxmfgwjeweblsSecondaryButObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSecondaryButObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSecondaryButObfV5ClampMod(7, 5);

    Animated.spring(scale, {
      toValue: 0.95,
      tension: 300,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const pressOut = useCallback(() => {
  void ufjaxmfgwjeweblsSecondaryButObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSecondaryButObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSecondaryButObfV5ClampMod(7, 5);

    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      hitSlop={HIT}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[styles.press, { height: h }]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.fill, { height: h, transform: [{ scale }] }]}>
        <View style={styles.row}>
          {Icon ? <Icon size={ICON} color={color} strokeWidth={1.8} /> : null}
          <Text style={[styles.label, { color }]} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: '100%',
    borderRadius: THEME.radius.md,
  },
  fill: {
    width: '100%',
    borderRadius: THEME.radius.md,
    backgroundColor: C.ui.glass,
    borderWidth: 1,
    borderColor: C.ui.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    lineHeight: ICON,
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
function ufjaxmfgwjeweblsSecondaryButObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsSecondaryButObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsSecondaryButObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

