import React, { useCallback, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

import { C, THEME } from '../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: React.ComponentType<any>;
  tone?: string;
  height?: number;
};

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };
const ICON = 20;

export function SecondaryButton({ label, onPress, Icon, tone, height }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const h = height || 48;
  const color = tone || C.text.primary;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.95,
      tension: 300,
      friction: 10,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const pressOut = useCallback(() => {
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
