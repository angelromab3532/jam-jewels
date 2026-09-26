import React, { useEffect, useRef, useState } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { bgufjaxmfgwjeweblsLoader } from '../assets';
import { LOADER_ufjaxmfgwjeweblsDURATION_MS, SCREEN_ufjaxmfgwjeweblsH, SCREEN_ufjaxmfgwjeweblsW } from '../constants/confufjaxmfgwjeweblsig';
import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';
import { DustufjaxmfgwjeweblsLayer } from '../components/DustufjaxmfgwjeweblsLayer';
import { GemufjaxmfgwjeweblsMark } from '../components/GemufjaxmfgwjeweblsMark';
import { LoaderufjaxmfgwjeweblsJewelCrest, LoaderufjaxmfgwjeweblsJewelSparks } from './LoaderSparkufjaxmfgwjeweblsJewel';
// autosetup-split-begin
import {ufjaxmfgwjeweblsGameMixSeed,
  ufjaxmfgwjeweblsGameFoldRange,
  ufjaxmfgwjeweblsGameClampSpan, ufjaxmfgwjeweblsLoaderScreenObfV5HashMix, ufjaxmfgwjeweblsLoaderScreenObfV5SumOdds, ufjaxmfgwjeweblsLoaderScreenObfV5ClampMod } from './LoaderufjaxmfgwjeweblsScreenPart01';
// autosetup-split-end

type Props = {
  onDone?: () => void;
  /** Fire onDone after the first bar fill; keep looping / opaque until host unmounts. */
  doneOnFirstCycle?: boolean;
};

const TRACK_W = 200;
const TRACK_H = 4;
const MARK = 132;
const LABEL_CYCLE = ['LOADING…', 'SPINNING…', 'CHARGING…'] as const;

/**
 * Brand splash. Bar loops until unmount; crest is swipe-shear idle play;
 * empty taps spawn jewel sparks. No fade-out.
 */
export function LoaderufjaxmfgwjeweblsScreen({ onDone, doneOnFirstCycle }: Props) {
  void ufjaxmfgwjeweblsLoaderScreenObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderScreenObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderScreenObfV5ClampMod(7, 5);

  const rise = useRef(new Animated.Value(0.72)).current;
  const dropY = useRef(new Animated.Value(-12)).current;
  const fade = useRef(new Animated.Value(0)).current;
  const halo = useRef(new Animated.Value(0.45)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const doneRef = useRef(onDone);
  const firedDone = useRef(false);
  const [labelIdx, setLabelIdx] = useState(0);

  useEffect(() => {
  void ufjaxmfgwjeweblsLoaderScreenObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderScreenObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderScreenObfV5ClampMod(7, 5);

    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
  void ufjaxmfgwjeweblsLoaderScreenObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderScreenObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderScreenObfV5ClampMod(7, 5);

    // drop-in entrance (persona)
    Animated.parallel([
      Animated.spring(rise, {
        toValue: 1,
        tension: 36,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.spring(dropY, {
        toValue: 0,
        tension: 40,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 480,
        useNativeDriver: true,
      }),
    ]).start();

    // Two finite breaths only — never a perpetual halo loop.
    Animated.sequence([
      Animated.timing(halo, { toValue: 0.85, duration: 1600, useNativeDriver: true }),
      Animated.timing(halo, { toValue: 0.45, duration: 1600, useNativeDriver: true }),
      Animated.timing(halo, { toValue: 0.85, duration: 1600, useNativeDriver: true }),
      Animated.timing(halo, { toValue: 0.6, duration: 1400, useNativeDriver: true }),
    ]).start();

    let stopped = false;
    let cycle = 0;

    const fireDoneOnce = () => {
  void ufjaxmfgwjeweblsLoaderScreenObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderScreenObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderScreenObfV5ClampMod(7, 5);

      if (firedDone.current) return;
      firedDone.current = true;
      doneRef.current?.();
    };

    const fillOnce = () => {
  void ufjaxmfgwjeweblsLoaderScreenObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLoaderScreenObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLoaderScreenObfV5ClampMod(7, 5);

      if (stopped) return;
      progress.setValue(0);
      // lazy band 1800–2800ms
      const ms = 1800 + Math.floor(Math.random() * 1001);
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (!finished || stopped) return;
        cycle += 1;
        if (!stopped) {
          setLabelIdx(i => (i + 1) % LABEL_CYCLE.length);
        }
        if (doneOnFirstCycle && cycle === 1) {
          fireDoneOnce();
        }
        fillOnce();
      });
    };
    fillOnce();

    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!doneOnFirstCycle && onDone) {
      timer = setTimeout(() => fireDoneOnce(), LOADER_ufjaxmfgwjeweblsDURATION_MS);
    }

    return () => {
      stopped = true;
      progress.stopAnimation();
      if (timer) clearTimeout(timer);
    };
  }, [rise, dropY, fade, halo, progress, doneOnFirstCycle, onDone]);

  const fillWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, TRACK_W],
  });

  return (
    <View style={styles.root}>
      <ImageBackground source={bgufjaxmfgwjeweblsLoader} resizeMode="cover" style={styles.bg}>
        <LinearGradient
          colors={THEME.gradients.loaderVeil}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />

        <DustufjaxmfgwjeweblsLayer width={SCREEN_ufjaxmfgwjeweblsW} height={SCREEN_ufjaxmfgwjeweblsH} count={2200} seed={1337} />

        <LinearGradient
          colors={['rgba(117,63,176,0.28)', 'rgba(117,63,176,0)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.wing, styles.wingLeft]}
        />
        <LinearGradient
          colors={['rgba(117,63,176,0)', 'rgba(117,63,176,0.28)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.wing, styles.wingRight]}
        />

        <LoaderufjaxmfgwjeweblsJewelSparks />

        <View style={styles.center} pointerEvents="box-none">
          <Animated.View
            pointerEvents="none"
            style={[styles.halo, { opacity: halo }]}
          />
          <Animated.View
            style={{
              opacity: fade,
              transform: [{ translateY: dropY }, { scale: rise }],
            }}>
            <LoaderufjaxmfgwjeweblsJewelCrest size={MARK}>
              <GemufjaxmfgwjeweblsMark size={MARK} />
            </LoaderufjaxmfgwjeweblsJewelCrest>
          </Animated.View>

          <Animated.Text style={[styles.brand, { opacity: fade }]} pointerEvents="none">
            JAM JEWELS
          </Animated.Text>
          <Text style={styles.tagline} pointerEvents="none">
            THEATRE OF LIGHT
          </Text>

          <View style={styles.track} pointerEvents="none">
            <Animated.View style={[styles.fillClip, { width: fillWidth }]}>
              <View style={styles.fillInner}>
                <LinearGradient
                  colors={['#753FB0', '#D93A67', '#EFC04C']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.fill}
                />
                {/* striped-fill chrome */}
                <View style={[styles.stripe, styles.stripeA]} />
                <View style={[styles.stripe, styles.stripeB]} />
                <View style={[styles.stripe, styles.stripeC]} />
              </View>
            </Animated.View>
          </View>

          <Text style={styles.loading} pointerEvents="none">
            {LABEL_CYCLE[labelIdx]}
          </Text>
          <Text style={styles.hint} pointerEvents="none">
            LIGHT THE GEM
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg.deep,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  wing: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 84,
  },
  wingLeft: { left: 0 },
  wingRight: { right: 0 },
  center: {
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  halo: {
    position: 'absolute',
    width: MARK * 2.1,
    height: MARK * 2.1,
    borderRadius: MARK,
    backgroundColor: 'rgba(117,63,176,0.20)',
    top: -MARK * 0.55,
  },
  brand: {
    marginTop: 28,
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 6,
    color: C.text.primary,
    textShadowColor: '#753FB0',
    textShadowRadius: 18,
    textShadowOffset: { width: 0, height: 0 },
  },
  tagline: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 4,
    color: C.text.secondary,
  },
  track: {
    marginTop: 46,
    width: TRACK_W,
    height: TRACK_H,
    borderRadius: 2,
    backgroundColor: 'rgba(244,232,216,0.10)',
    overflow: 'hidden',
  },
  fillClip: {
    height: TRACK_H,
    overflow: 'hidden',
  },
  fillInner: {
    width: TRACK_W,
    height: TRACK_H,
    position: 'relative',
  },
  fill: {
    width: TRACK_W,
    height: TRACK_H,
    borderRadius: 2,
  },
  stripe: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: 'rgba(244,232,216,0.18)',
  },
  stripeA: { left: 36 },
  stripeB: { left: 88 },
  stripeC: { left: 140 },
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 3,
    color: 'rgba(244,232,216,0.55)',
  },
  hint: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 3,
    color: 'rgba(239,192,76,0.55)',
  },
});

/* autosetup-game-stamp:v1 */
void ufjaxmfgwjeweblsGameMixSeed(3, 7);
void ufjaxmfgwjeweblsGameFoldRange([1, 2, 3]);
void ufjaxmfgwjeweblsGameClampSpan(5, 0, 10);

export default LoaderufjaxmfgwjeweblsScreen;

