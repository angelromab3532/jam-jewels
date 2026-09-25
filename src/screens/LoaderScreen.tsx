import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { bgLoader } from '../assets';
import { LOADER_DURATION_MS, SCREEN_H, SCREEN_W } from '../constants/config';
import { C, THEME } from '../constants/theme';
import { DustLayer } from '../components/DustLayer';
import { GemMark } from '../components/GemMark';

type Props = { onDone: () => void };

const TRACK_W = 200;
const MARK = 132;

/**
 * Brand card. Deliberately colder and darker than the menu: heavy veil, dense
 * dust, wing curtains, no chips and no buttons of any kind.
 */
export function LoaderScreen({ onDone }: Props) {
  const rise = useRef(new Animated.Value(0.72)).current;
  const fade = useRef(new Animated.Value(0)).current;
  const halo = useRef(new Animated.Value(0.45)).current;
  const bar = useRef(new Animated.Value(-TRACK_W)).current;
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    Animated.spring(rise, {
      toValue: 1,
      tension: 36,
      friction: 7,
      useNativeDriver: true,
    }).start();

    Animated.timing(fade, {
      toValue: 1,
      duration: 480,
      useNativeDriver: true,
    }).start();

    // Two finite breaths, never a perpetual loop: a loop that never settles
    // keeps the window busy and blocks the UI automation dump.
    Animated.sequence([
      Animated.timing(halo, { toValue: 0.85, duration: 1600, useNativeDriver: true }),
      Animated.timing(halo, { toValue: 0.45, duration: 1600, useNativeDriver: true }),
      Animated.timing(halo, { toValue: 0.85, duration: 1600, useNativeDriver: true }),
      Animated.timing(halo, { toValue: 0.6, duration: 1400, useNativeDriver: true }),
    ]).start();

    Animated.timing(bar, {
      toValue: 0,
      duration: LOADER_DURATION_MS,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      doneRef.current();
    }, LOADER_DURATION_MS);

    return () => clearTimeout(timer);
  }, [rise, fade, halo, bar]);

  return (
    <View style={styles.root}>
      <ImageBackground source={bgLoader} resizeMode="cover" style={styles.bg}>
        <LinearGradient
          colors={THEME.gradients.loaderVeil}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />

        <DustLayer width={SCREEN_W} height={SCREEN_H} count={2200} seed={1337} />

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

        <View style={styles.center}>
          <Animated.View
            pointerEvents="none"
            style={[styles.halo, { opacity: halo }]}
          />
          <Animated.View
            pointerEvents="none"
            style={{ opacity: fade, transform: [{ scale: rise }] }}>
            <GemMark size={MARK} />
          </Animated.View>

          <Animated.Text style={[styles.brand, { opacity: fade }]}>
            JAM JEWELS
          </Animated.Text>
          <Text style={styles.tagline}>THEATRE OF LIGHT</Text>

          <View style={styles.track}>
            <Animated.View
              pointerEvents="none"
              style={[styles.fillWrap, { transform: [{ translateX: bar }] }]}>
              <LinearGradient
                colors={['#753FB0', '#D93A67', '#EFC04C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.fill}
              />
            </Animated.View>
          </View>
          <Text style={styles.loading}>LOADING...</Text>
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
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(244,232,216,0.10)',
    overflow: 'hidden',
  },
  fillWrap: {
    width: TRACK_W,
    height: 4,
  },
  fill: {
    width: TRACK_W,
    height: 4,
    borderRadius: 2,
  },
  loading: {
    marginTop: 14,
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 3,
    color: 'rgba(244,232,216,0.55)',
  },
});
