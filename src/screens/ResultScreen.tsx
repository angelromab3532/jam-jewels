import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Home, RotateCcw, LayoutGrid } from 'lucide-react-native';
import Svg, { Polyline, Rect } from 'react-native-svg';

import { SCREEN_H, SCREEN_W, TOTAL_LEVELS } from '../constants/config';
import { C, THEME } from '../constants/theme';
import { traceBeam } from '../game/beam';
import { getLevel } from '../game/levels';
import { type RoundStats } from '../game/scoring';
import { DustLayer } from '../components/DustLayer';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { StatCard } from '../components/StatCard';

type Props = {
  levelIndex: number;
  stats: RoundStats;
  onPlayAgain: () => void;
  onSchemes: () => void;
  onMenu: () => void;
};

const PREVIEW = 168;

export function ResultScreen({ levelIndex, stats, onPlayAgain, onSchemes, onMenu }: Props) {
  const pop = useRef(new Animated.Value(0.8)).current;
  const fade = useRef(new Animated.Value(0)).current;

  const won = stats.outcome === 'win';

  const preview = useMemo(() => {
    const level = getLevel(levelIndex);
    const tile = PREVIEW / 6;
    return traceBeam(level.solved, tile).paths;
  }, [levelIndex]);

  useEffect(() => {
    Animated.spring(pop, {
      toValue: 1,
      tension: 44,
      friction: 7,
      useNativeDriver: true,
    }).start();
    Animated.timing(fade, {
      toValue: 1,
      duration: 320,
      delay: 120,
      useNativeDriver: true,
    }).start();
  }, [pop, fade]);

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={won ? THEME.gradients.winVeil : THEME.gradients.loseVeil}
        style={StyleSheet.absoluteFillObject}
      />
      <DustLayer width={SCREEN_W} height={SCREEN_H} count={900} seed={4242} />

      <View style={styles.body}>
        <Animated.View
          pointerEvents="none"
          style={[styles.titleWrap, { transform: [{ scale: pop }] }]}>
          <Text style={[styles.title, { color: won ? C.accent.gold : C.accent.ruby }]}>
            {won ? 'YOU WON!' : 'NO LUCK!'}
          </Text>
          <Text style={styles.subtitle}>
            SCHEME {levelIndex + 1} / {TOTAL_LEVELS}
          </Text>
        </Animated.View>

        <View style={styles.previewFrame}>
          <Svg width={PREVIEW} height={PREVIEW}>
            <Rect
              x={1}
              y={1}
              width={PREVIEW - 2}
              height={PREVIEW - 2}
              rx={10}
              fill="rgba(11,9,16,0.6)"
            />
            {preview.map((p, i) =>
              p.length > 1 ? (
                <Polyline
                  key={`pv${i}`}
                  points={p.map(pt => `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(' ')}
                  fill="none"
                  stroke={C.accent.gold}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : null,
            )}
          </Svg>
        </View>

        <View style={styles.starRow}>
          {[0, 1, 2].map(i => (
            <Text
              key={`s${i}`}
              style={[
                styles.star,
                { color: i < stats.stars ? C.accent.gold : C.ui.dim },
              ]}>
              ★
            </Text>
          ))}
        </View>

        <Animated.View pointerEvents="box-none" style={[styles.statsRow, { opacity: fade }]}>
          <View style={styles.statSlot}>
            <StatCard
              dot={C.accent.teal}
              value={`${stats.edgesLit}/${stats.edgesTotal}`}
              label="EDGES"
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard dot={C.accent.gold} value={`${stats.movesUsed}`} label="MOVES USED" />
          </View>
          {stats.score > 0 ? (
            <View style={styles.statSlot}>
              <StatCard dot={C.accent.ruby} value={`${stats.score}`} label="SCORE" />
            </View>
          ) : null}
        </Animated.View>

        <View style={styles.actions}>
          <PrimaryButton label="PLAY AGAIN" onPress={onPlayAgain} />

          <View style={styles.secondRow}>
            <View style={styles.secondSlot}>
              <SecondaryButton
                label={won ? 'NEXT SCHEME' : 'NEW SCHEME'}
                Icon={won ? LayoutGrid : RotateCcw}
                onPress={onSchemes}
              />
            </View>
            <View style={styles.secondSlot}>
              <SecondaryButton label="MENU" Icon={Home} onPress={onMenu} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg.primary,
  },
  body: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    paddingBottom: 28,
    alignItems: 'center',
  },
  titleWrap: {
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 12,
    textShadowOffset: { width: 0, height: 4 },
  },
  subtitle: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 3,
    color: C.text.secondary,
  },
  previewFrame: {
    marginTop: 18,
    padding: 6,
    borderRadius: THEME.radius.md,
    borderWidth: 2,
    borderColor: C.accent.gold,
    backgroundColor: 'rgba(11,9,16,0.7)',
    shadowColor: C.accent.amethyst,
    shadowOpacity: 0.5,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 10 },
    elevation: 12,
  },
  starRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  star: {
    fontSize: 26,
    lineHeight: 30,
  },
  statsRow: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  statSlot: {
    flex: 1,
  },
  actions: {
    width: '100%',
    marginTop: 'auto',
  },
  secondRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 12,
  },
  secondSlot: {
    flex: 1,
  },
});
