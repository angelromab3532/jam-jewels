import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BookOpen, LayoutGrid, Star } from 'lucide-react-native';
import Svg, { Defs, Line, LinearGradient as SvgGradient, Stop } from 'react-native-svg';

import { bgufjaxmfgwjeweblsMenu } from '../assets';
import { SCREEN_ufjaxmfgwjeweblsH, SCREEN_ufjaxmfgwjeweblsW, TOTAL_ufjaxmfgwjeweblsLEVELS } from '../constants/confufjaxmfgwjeweblsig';
import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';
import { getufjaxmfgwjeweblsLevel } from '../game/levufjaxmfgwjeweblsels';
import { PrimaryufjaxmfgwjeweblsButton } from '../components/PrimaryufjaxmfgwjeweblsButton';
import { SecondaryufjaxmfgwjeweblsButton } from '../components/SecondaryufjaxmfgwjeweblsButton';
import { StatufjaxmfgwjeweblsCard } from '../components/StatufjaxmfgwjeweblsCard';
// autosetup-split-begin
import {ufjaxmfgwjeweblsGameMixSeed, ufjaxmfgwjeweblsGameFoldRange, ufjaxmfgwjeweblsGameClampSpan, ufjaxmfgwjeweblsMenuScreenPaObfV5HashMix, ufjaxmfgwjeweblsMenuScreenPaObfV5SumOdds, ufjaxmfgwjeweblsMenuScreenPaObfV5ClampMod } from './MenuufjaxmfgwjeweblsScreenPart01';
// autosetup-split-end

type Props = {
  levelIndex: number;
  stars: number;
  onPlay: () => void;
  onSchemes: () => void;
  onTutorial: () => void;
};

const ART_H = Math.round(SCREEN_ufjaxmfgwjeweblsH * 0.56);

export function MenuufjaxmfgwjeweblsScreen({ levelIndex, stars, onPlay, onSchemes, onTutorial }: Props) {
  void ufjaxmfgwjeweblsMenuScreenPaObfV5HashMix('xy');
  void ufjaxmfgwjeweblsMenuScreenPaObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsMenuScreenPaObfV5ClampMod(7, 5);

  const lift = useRef(new Animated.Value(60)).current;
  const fade = useRef(new Animated.Value(0)).current;
  const ray = useRef(new Animated.Value(0.35)).current;

  const level = getufjaxmfgwjeweblsLevel(levelIndex);

  useEffect(() => {
  void ufjaxmfgwjeweblsMenuScreenPaObfV5HashMix('xy');
  void ufjaxmfgwjeweblsMenuScreenPaObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsMenuScreenPaObfV5ClampMod(7, 5);

    Animated.spring(lift, {
      toValue: 0,
      tension: 40,
      friction: 9,
      useNativeDriver: true,
    }).start();

    Animated.timing(fade, {
      toValue: 1,
      duration: 260,
      useNativeDriver: true,
    }).start();

    Animated.sequence([
      Animated.timing(ray, { toValue: 0.8, duration: 900, useNativeDriver: true }),
      Animated.timing(ray, { toValue: 0.35, duration: 900, useNativeDriver: true }),
      Animated.timing(ray, { toValue: 0.6, duration: 700, useNativeDriver: true }),
    ]).start();
  }, [lift, fade, ray]);

  return (
    <View style={styles.root}>
      <View style={styles.art}>
        <ImageBackground source={bgufjaxmfgwjeweblsMenu} resizeMode="cover" style={styles.artBg}>
          <LinearGradient
            colors={THEME.gradients.menuVeil}
            locations={[0, 0.62, 1]}
            style={StyleSheet.absoluteFillObject}
          />

          <Animated.View
            pointerEvents="none"
            style={[StyleSheet.absoluteFillObject, { opacity: ray }]}>
            <Svg width={SCREEN_ufjaxmfgwjeweblsW} height={ART_H}>
              <Defs>
                <SvgGradient id="menuRay" x1="0" y1="0" x2="1" y2="1">
                  <Stop offset="0" stopColor="#EFC04C" stopOpacity="0.9" />
                  <Stop offset="1" stopColor="#EFC04C" stopOpacity="0" />
                </SvgGradient>
              </Defs>
              <Line
                x1={SCREEN_ufjaxmfgwjeweblsW * 0.18}
                y1={ART_H * 0.1}
                x2={SCREEN_ufjaxmfgwjeweblsW * 0.82}
                y2={ART_H * 0.74}
                stroke="url(#menuRay)"
                strokeWidth={3}
                strokeLinecap="round"
              />
            </Svg>
          </Animated.View>

          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                SCHEME {levelIndex + 1} / {TOTAL_ufjaxmfgwjeweblsLEVELS}
              </Text>
            </View>
            <View style={styles.badge}>
              <Star size={16} color={C.accent.gold} strokeWidth={2} />
              <Text style={[styles.badgeText, styles.badgeGold]}>{stars}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles.sheet, { opacity: fade, transform: [{ translateY: lift }] }]}>
        <View style={styles.handle} />

        <Text style={styles.title}>JAM JEWELS</Text>
        <Text style={styles.tagline}>ROUTE THE LIGHT. LIGHT THE EDGES.</Text>

        <View style={styles.statsRow}>
          <View style={styles.statSlot}>
            <StatufjaxmfgwjeweblsCard
              dot={C.accent.teal}
              value={`${levelIndex + 1}/${TOTAL_ufjaxmfgwjeweblsLEVELS}`}
              label="SCHEME"
            />
          </View>
          <View style={styles.statSlot}>
            <StatufjaxmfgwjeweblsCard dot={C.accent.amethyst} value={`${level.moves}`} label="MOVES" />
          </View>
          {stars > 0 ? (
            <View style={styles.statSlot}>
              <StatufjaxmfgwjeweblsCard dot={C.accent.gold} value={`${stars}`} label="STARS" />
            </View>
          ) : null}
        </View>

        <Text style={styles.hint}>TAP TWO NEIGHBOURS · SWAP THE GEMS</Text>

        <PrimaryufjaxmfgwjeweblsButton label="START PUZZLE" onPress={onPlay} />

        <View style={styles.secondRow}>
          <View style={styles.secondSlot}>
            <SecondaryufjaxmfgwjeweblsButton label="SCHEMES" Icon={LayoutGrid} onPress={onSchemes} />
          </View>
          <View style={styles.secondSlot}>
            <SecondaryufjaxmfgwjeweblsButton label="HOW IT WORKS" Icon={BookOpen} onPress={onTutorial} />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg.primary,
  },
  art: {
    flex: 1,
  },
  artBg: {
    flex: 1,
  },
  badgeRow: {
    paddingTop: 44,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(21,18,28,0.62)',
    borderWidth: 1,
    borderColor: 'rgba(244,232,216,0.14)',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    color: C.text.primary,
    lineHeight: 16,
  },
  badgeGold: {
    fontSize: 13,
    color: C.accent.gold,
  },
  sheet: {
    borderTopLeftRadius: THEME.radius.sheet,
    borderTopRightRadius: THEME.radius.sheet,
    backgroundColor: C.bg.sheet,
    borderTopWidth: 1,
    borderTopColor: 'rgba(244,232,216,0.10)',
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 24,
    shadowColor: C.accent.amethyst,
    shadowOpacity: 0.45,
    shadowRadius: 28,
    shadowOffset: { width: 0, height: -8 },
    elevation: 18,
  },
  handle: {
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(244,232,216,0.22)',
    alignSelf: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 4,
    color: C.text.primary,
  },
  tagline: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1.5,
    color: C.text.secondary,
  },
  statsRow: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 12,
  },
  statSlot: {
    flex: 1,
  },
  hint: {
    marginTop: 14,
    marginBottom: 12,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
    color: C.text.muted,
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

/* autosetup-game-stamp:v1 */
void ufjaxmfgwjeweblsGameMixSeed(3, 7);
void ufjaxmfgwjeweblsGameFoldRange([1, 2, 3]);
void ufjaxmfgwjeweblsGameClampSpan(5, 0, 10);

