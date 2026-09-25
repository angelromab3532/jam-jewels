import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SCREEN_H, SCREEN_W, TOTAL_LEVELS } from '../constants/config';
import { C, THEME } from '../constants/theme';
import { traceBeam } from '../game/beam';
import { difficultyColor, getLevel } from '../game/levels';
import { DustLayer } from '../components/DustLayer';
import { PrimaryButton } from '../components/PrimaryButton';
import { SchemeCard } from '../components/SchemeCard';
import { ScreenHeader } from '../components/ScreenHeader';

type Props = {
  levelIndex: number;
  unlocked: number;
  starsPerLevel: number[];
  onPick: (index: number) => void;
  onBack: () => void;
};

const PREVIEW_W = 54;
const PREVIEW_H = 38;

export function LevelsScreen({ levelIndex, unlocked, starsPerLevel, onPick, onBack }: Props) {
  const [picked, setPicked] = useState(levelIndex);

  const previews = useMemo(() => {
    const tile = PREVIEW_W / 6;
    const scaleY = PREVIEW_H / PREVIEW_W;
    const out: string[] = [];
    for (let i = 0; i < TOTAL_LEVELS; i++) {
      const paths = traceBeam(getLevel(i).solved, tile).paths;
      const longest = paths.reduce(
        (best, p) => (p.length > best.length ? p : best),
        paths[0] || [],
      );
      out.push(
        longest
          .map(p => `${p.x.toFixed(1)},${(p.y * scaleY).toFixed(1)}`)
          .join(' '),
      );
    }
    return out;
  }, []);

  const cells = [];
  for (let i = 0; i < TOTAL_LEVELS; i++) {
    cells.push(i);
  }

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={THEME.gradients.tutorial}
        style={StyleSheet.absoluteFillObject}
      />
      <DustLayer width={SCREEN_W} height={SCREEN_H} count={600} seed={7331} />

      <ScreenHeader title="SCHEMES"
        subtitle={`${TOTAL_LEVELS} LIGHT PATTERNS`}
        subtitleColor={C.text.secondary}
        onBack={onBack}
      />

      <View style={styles.body}>
        <View style={styles.grid}>
          {cells.map(i => (
            <SchemeCard
              key={`sc${i}`}
              index={i}
              preview={previews[i]}
              color={difficultyColor(i)}
              stars={starsPerLevel[i] || 0}
              locked={i > unlocked}
              active={i === picked}
              onPress={setPicked}
            />
          ))}
        </View>

        <Text style={styles.hint}>PICK A SCHEME · HARDER ONES NEED MORE SWAPS</Text>

        <PrimaryButton label="START SCHEME" onPress={() => onPick(picked)} />
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
    paddingHorizontal: 16,
    paddingBottom: 28,
    paddingTop: 14,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  hint: {
    marginTop: 'auto',
    marginBottom: 12,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
    color: C.text.muted,
    textAlign: 'center',
  },
});
