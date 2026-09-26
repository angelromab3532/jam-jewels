import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
  type GestureResponderEvent,
  type LayoutChangeEvent,
} from 'react-native';

import { C } from '../constants/thufjaxmfgwjeweblseme';

const ACCENTS = [
  C.accent.amethyst,
  C.accent.ruby,
  C.accent.gold,
  C.accent.teal,
  C.accent.ember,
] as const;

const MAX_BURSTS = 3;
const BURST_MIN = 12;
const BURST_MAX = 18;

type SparkBit = {
  key: string;
  color: string;
  w: number;
  h: number;
  rot: number;
  opacity: Animated.Value;
  tx: Animated.Value;
  ty: Animated.Value;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  bits: SparkBit[];
};

/**
 * Full-screen spark field: empty-space taps spawn float-drift jewel sparks.
 * Use pointerEvents box-none on siblings so the crest still receives presses.
 */
export function LoaderufjaxmfgwjeweblsJewelSparks({
  trackIgnore,
}: {
  /** Approx Y band (from top of field) to ignore so the bar does not feel broken. */
  trackIgnore?: { topRatio: number; bottomRatio: number };
}) {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [field, setField] = useState({ w: 0, h: 0 });
  const burstId = useRef(0);
  const topR = trackIgnore?.topRatio ?? 0.56;
  const botR = trackIgnore?.bottomRatio ?? 0.74;

  const spawnBurst = useCallback((x: number, y: number) => {
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5ClampMod(7, 5);

    const count = BURST_MIN + Math.floor(Math.random() * (BURST_MAX - BURST_MIN + 1));
    const id = ++burstId.current;
    const palette = [...ACCENTS].sort(() => Math.random() - 0.5);
    const bits: SparkBit[] = [];

    for (let i = 0; i < count; i++) {
      const len = 4 + Math.random() * 5;
      const bit: SparkBit = {
        key: `${id}-${i}`,
        color: palette[i % palette.length],
        w: len,
        h: 1.5 + Math.random() * 1.5,
        rot: Math.random() * 360,
        opacity: new Animated.Value(0.95),
        tx: new Animated.Value(0),
        ty: new Animated.Value(0),
      };
      bits.push(bit);

      const driftX = (Math.random() - 0.5) * 32;
      const driftY = (Math.random() - 0.5) * 32 - 8;
      const life = 320 + Math.floor(Math.random() * 320);
      Animated.parallel([
        Animated.timing(bit.tx, { toValue: driftX, duration: life, useNativeDriver: true }),
        Animated.timing(bit.ty, { toValue: driftY, duration: life, useNativeDriver: true }),
        Animated.timing(bit.opacity, { toValue: 0, duration: life, useNativeDriver: true }),
      ]).start();
    }

    setBursts(prev => {
      const next = [...prev, { id, x, y, bits }];
      return next.length > MAX_BURSTS ? next.slice(next.length - MAX_BURSTS) : next;
    });
    setTimeout(() => {
      setBursts(prev => prev.filter(b => b.id !== id));
    }, 720);
  }, []);

  const onLayout = (e: LayoutChangeEvent) => {
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5ClampMod(7, 5);

    const { width, height } = e.nativeEvent.layout;
    setField({ w: width, h: height });
  };

  const onPress = (e: GestureResponderEvent) => {
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5ClampMod(7, 5);

    const { locationX, locationY } = e.nativeEvent;
    if (field.w <= 0) return;
    const trackTop = field.h * topR;
    const trackBottom = field.h * botR;
    const trackLeft = field.w * 0.18;
    const trackRight = field.w * 0.82;
    if (
      locationY >= trackTop &&
      locationY <= trackBottom &&
      locationX >= trackLeft &&
      locationX <= trackRight
    ) {
      return;
    }
    spawnBurst(
      Math.max(8, Math.min(field.w - 8, locationX)),
      Math.max(8, Math.min(field.h - 8, locationY)),
    );
  };

  return (
    <View style={styles.field} onLayout={onLayout} collapsable={false}>
      <Pressable style={StyleSheet.absoluteFill} onPress={onPress} />
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {bursts.map(burst =>
          burst.bits.map(bit => (
            <Animated.View
              key={bit.key}
              style={[
                styles.spark,
                {
                  left: burst.x,
                  top: burst.y,
                  width: bit.w,
                  height: bit.h,
                  backgroundColor: bit.color,
                  opacity: bit.opacity,
                  transform: [
                    { translateX: bit.tx },
                    { translateY: bit.ty },
                    { rotate: `${bit.rot}deg` },
                  ],
                },
              ]}
            />
          )),
        )}
      </View>
    </View>
  );
}

type CrestProps = {
  children: React.ReactNode;
  size: number;
};

/**
 * Swipe-shear crest with tilt-turn one-shots. Primary gesture is horizontal flick.
 */
export function LoaderufjaxmfgwjeweblsJewelCrest({ children, size }: CrestProps) {
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5ClampMod(7, 5);

  const touched = useRef(false);
  const reactionIdx = useRef(0);
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const shearX = useRef(new Animated.Value(0)).current;

  const playTiltTurn = useCallback(() => {
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5ClampMod(7, 5);

    const pick = reactionIdx.current % 3;
    reactionIdx.current += 1;
    rotate.stopAnimation();
    scale.stopAnimation();
    rotate.setValue(0);
    scale.setValue(1);

    if (pick === 0) {
      Animated.sequence([
        Animated.timing(rotate, { toValue: 8, duration: 90, useNativeDriver: true }),
        Animated.timing(rotate, { toValue: -7, duration: 110, useNativeDriver: true }),
        Animated.timing(rotate, { toValue: 4, duration: 100, useNativeDriver: true }),
        Animated.timing(rotate, { toValue: 0, duration: 120, useNativeDriver: true }),
      ]).start();
    } else if (pick === 1) {
      Animated.sequence([
        Animated.timing(rotate, { toValue: -8, duration: 120, useNativeDriver: true }),
        Animated.timing(rotate, { toValue: 6, duration: 140, useNativeDriver: true }),
        Animated.timing(rotate, { toValue: 0, duration: 160, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.sequence([
          Animated.timing(rotate, { toValue: 18, duration: 160, useNativeDriver: true }),
          Animated.timing(rotate, { toValue: 0, duration: 280, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(scale, { toValue: 1.06, duration: 140, useNativeDriver: true }),
          Animated.timing(scale, { toValue: 1, duration: 260, useNativeDriver: true }),
        ]),
      ]).start();
    }
  }, [rotate, scale]);

  useEffect(() => {
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5ClampMod(7, 5);

    const delay = 2000 + Math.floor(Math.random() * 2000);
    const t = setTimeout(() => {
      if (!touched.current) playTiltTurn();
    }, delay);
    return () => clearTimeout(t);
  }, [playTiltTurn]);

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 4 || Math.abs(g.dy) > 4,
      onPanResponderGrant: () => {
        touched.current = true;
      },
      onPanResponderMove: (_, g) => {
        shearX.setValue(Math.max(-14, Math.min(14, g.dx * 0.12)));
        rotate.setValue(Math.max(-12, Math.min(12, g.dx * 0.08 + g.dy * 0.02)));
      },
      onPanResponderRelease: () => {
        Animated.parallel([
          Animated.spring(shearX, {
            toValue: 0,
            tension: 120,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.spring(rotate, {
            toValue: 0,
            tension: 110,
            friction: 7,
            useNativeDriver: true,
          }),
        ]).start(({ finished }) => {
          if (finished) playTiltTurn();
        });
      },
    }),
  ).current;

  const rotateStr = rotate.interpolate({
    inputRange: [-30, 30],
    outputRange: ['-30deg', '30deg'],
  });

  return (
    <View style={{ width: size, height: size }} {...pan.panHandlers} collapsable={false}>
      <Animated.View
        style={{
          transform: [{ translateX: shearX }, { rotate: rotateStr }, { scale }],
        }}>
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  spark: {
    position: 'absolute',
    marginLeft: -2,
    marginTop: -1,
    borderRadius: 1,
  },
});

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsLoaderSparkufjaxmfgwjeweblsJewelObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

