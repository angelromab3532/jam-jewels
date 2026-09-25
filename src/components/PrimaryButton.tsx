import React, { useCallback, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { C, THEME } from '../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  colors?: string[];
  height?: number;
  shadowColor?: string;
  textColor?: string;
  caption?: string;
};

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

export function PrimaryButton({
  label,
  onPress,
  colors,
  height,
  shadowColor,
  textColor,
  caption,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const h = height || 60;

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

  const tint = textColor || '#FFFFFF';

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      hitSlop={HIT}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[styles.press, { height: h, shadowColor: shadowColor || C.accent.ruby }]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.fill, { transform: [{ scale }] }]}>
        <LinearGradient
          colors={colors || THEME.gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.grad, { height: h }]}>
          <Text style={[styles.label, { color: tint }]} numberOfLines={1}>
            {label}
          </Text>
          {caption ? (
            <Text style={[styles.caption, { color: tint }]} numberOfLines={1}>
              {caption}
            </Text>
          ) : null}
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    width: '100%',
    borderRadius: THEME.radius.lg,
    shadowOpacity: 0.5,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
  },
  fill: {
    width: '100%',
    height: '100%',
    borderRadius: THEME.radius.lg,
    overflow: 'hidden',
  },
  grad: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 3,
    lineHeight: 24,
  },
  caption: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
    opacity: 0.8,
  },
});
