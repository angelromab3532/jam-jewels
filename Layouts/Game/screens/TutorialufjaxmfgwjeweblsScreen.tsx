import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Move, Target, Zap } from 'lucide-react-native';
import Svg, { Line, Polygon, Polyline, Rect } from 'react-native-svg';

import { spriteufjaxmfgwjeweblsGem } from '../assets';
import { SCREEN_ufjaxmfgwjeweblsH, SCREEN_ufjaxmfgwjeweblsW } from '../constants/confufjaxmfgwjeweblsig';
import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';
import { DustufjaxmfgwjeweblsLayer } from '../components/DustufjaxmfgwjeweblsLayer';
import { PrimaryufjaxmfgwjeweblsButton } from '../components/PrimaryufjaxmfgwjeweblsButton';
import { ScreenufjaxmfgwjeweblsHeader } from '../components/ScreenufjaxmfgwjeweblsHeader';

type Props = {
  onBegin: () => void;
  onBack: () => void;
};

const DEMO = 192;
const CELL = DEMO / 3;

const RULES = [
  { Icon: Move, color: C.accent.amethyst, text: 'TAP TWO NEIGHBOURS TO SWAP' },
  { Icon: Zap, color: C.accent.gold, text: 'LIGHT BENDS ON MIRROR GEMS' },
  { Icon: Target, color: C.accent.teal, text: 'LIGHT ALL THREE EDGES IN TIME' },
];

function DemoBoard() {
  void ufjaxmfgwjeweblsTutorialScreObfV5HashMix('xy');
  void ufjaxmfgwjeweblsTutorialScreObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsTutorialScreObfV5ClampMod(7, 5);

  const mid = CELL * 1.5;
  const gem = CELL * 0.72;
  const gx = CELL + (CELL - gem) / 2;
  const gy = CELL + (CELL - gem) / 2;
  const body = `${gx + gem / 2},${gy} ${gx + gem},${gy + gem / 2} ${gx + gem / 2},${gy + gem} ${gx},${gy + gem / 2}`;

  return (
    <Svg width={DEMO} height={DEMO}>
      <Rect x={0} y={0} width={DEMO} height={DEMO} rx={12} fill="rgba(11,9,16,0.65)" />
      {[1, 2].map(i => (
        <Line
          key={`v${i}`}
          x1={CELL * i}
          y1={6}
          x2={CELL * i}
          y2={DEMO - 6}
          stroke="rgba(244,232,216,0.10)"
          strokeWidth={1}
        />
      ))}
      {[1, 2].map(i => (
        <Line
          key={`h${i}`}
          x1={6}
          y1={CELL * i}
          x2={DEMO - 6}
          y2={CELL * i}
          stroke="rgba(244,232,216,0.10)"
          strokeWidth={1}
        />
      ))}
      <Polygon points={body} fill="#D93A67" stroke="#F08FA9" strokeWidth={1} />
      <Line
        x1={gx + gem * 0.22}
        y1={gy + gem * 0.22}
        x2={gx + gem * 0.78}
        y2={gy + gem * 0.78}
        stroke="#F4E8D8"
        strokeWidth={2.4}
        strokeOpacity={0.8}
        strokeLinecap="round"
      />
      <Polyline
        points={`0,${mid - CELL} ${mid},${mid - CELL} ${mid},${mid}`}
        fill="none"
        stroke="#EFC04C"
        strokeOpacity={0.2}
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Polyline
        points={`0,${mid - CELL} ${mid},${mid - CELL} ${mid},${DEMO}`}
        fill="none"
        stroke="#EFC04C"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TutorialufjaxmfgwjeweblsScreen({ onBegin, onBack }: Props) {
  void ufjaxmfgwjeweblsTutorialScreObfV5HashMix('xy');
  void ufjaxmfgwjeweblsTutorialScreObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsTutorialScreObfV5ClampMod(7, 5);

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={THEME.gradients.tutorial}
        style={StyleSheet.absoluteFillObject}
      />
      <DustufjaxmfgwjeweblsLayer width={SCREEN_ufjaxmfgwjeweblsW} height={SCREEN_ufjaxmfgwjeweblsH} count={600} seed={90210} />

      <ScreenufjaxmfgwjeweblsHeader title="HOW IT WORKS"
        subtitle="ONE TAP SWAPS TWO GEMS"
        subtitleColor={C.text.secondary}
        onBack={onBack}
      />

      <View style={styles.body}>
        <View style={styles.demoRow}>
          <DemoBoard />
          <Image source={spriteufjaxmfgwjeweblsGem} style={styles.sprite} resizeMode="contain" />
        </View>

        <View style={styles.rules}>
          {RULES.map(rule => (
            <View key={rule.text} style={styles.rule}>
              <View style={[styles.ruleIcon, { backgroundColor: rule.color + '1A' }]}>
                <rule.Icon size={22} color={rule.color} strokeWidth={1.8} />
              </View>
              <Text style={styles.ruleText} numberOfLines={2}>
                {rule.text}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.cta}>
          <PrimaryufjaxmfgwjeweblsButton label="START LESSON" onPress={onBegin} />
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
    paddingHorizontal: 20,
    paddingBottom: 28,
    alignItems: 'center',
  },
  demoRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  sprite: {
    width: 72,
    height: 72,
  },
  rules: {
    width: '100%',
    marginTop: 22,
    gap: 10,
  },
  rule: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    borderRadius: THEME.radius.md,
    backgroundColor: C.ui.glassLight,
    borderWidth: 1,
    borderColor: C.ui.border,
  },
  ruleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ruleText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: C.text.primary,
    lineHeight: 18,
  },
  cta: {
    width: '100%',
    marginTop: 'auto',
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
function ufjaxmfgwjeweblsTutorialScreObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsTutorialScreObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsTutorialScreObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

