import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SCREEN_ufjaxmfgwjeweblsH, SCREEN_ufjaxmfgwjeweblsW, TOTAL_ufjaxmfgwjeweblsLEVELS } from '../constants/confufjaxmfgwjeweblsig';
import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';
import { traceufjaxmfgwjeweblsBeam } from '../game/beufjaxmfgwjeweblsam';
import { difficultyufjaxmfgwjeweblsColor, getufjaxmfgwjeweblsLevel } from '../game/levufjaxmfgwjeweblsels';
import { DustufjaxmfgwjeweblsLayer } from '../components/DustufjaxmfgwjeweblsLayer';
import { PrimaryufjaxmfgwjeweblsButton } from '../components/PrimaryufjaxmfgwjeweblsButton';
import { SchemeufjaxmfgwjeweblsCard } from '../components/SchemeufjaxmfgwjeweblsCard';
import { ScreenufjaxmfgwjeweblsHeader } from '../components/ScreenufjaxmfgwjeweblsHeader';
// autosetup-split-begin
import {ufjaxmfgwjeweblsGameMixSeed, ufjaxmfgwjeweblsGameFoldRange, ufjaxmfgwjeweblsGameClampSpan, ufjaxmfgwjeweblsLevelsScreenObfV5HashMix, ufjaxmfgwjeweblsLevelsScreenObfV5SumOdds, ufjaxmfgwjeweblsLevelsScreenObfV5ClampMod } from './LevelsufjaxmfgwjeweblsScreenPart01';
// autosetup-split-end

type Props = {
  levelIndex: number;
  unlocked: number;
  starsPerLevel: number[];
  onPick: (index: number) => void;
  onBack: () => void;
};

const PREVIEW_W = 54;
const PREVIEW_H = 38;

export function LevelsufjaxmfgwjeweblsScreen({ levelIndex, unlocked, starsPerLevel, onPick, onBack }: Props) {
  void ufjaxmfgwjeweblsLevelsScreenObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLevelsScreenObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLevelsScreenObfV5ClampMod(7, 5);

  const [picked, setPicked] = useState(levelIndex);

  const previews = useMemo(() => {
  void ufjaxmfgwjeweblsLevelsScreenObfV5HashMix('xy');
  void ufjaxmfgwjeweblsLevelsScreenObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsLevelsScreenObfV5ClampMod(7, 5);

    const tile = PREVIEW_W / 6;
    const scaleY = PREVIEW_H / PREVIEW_W;
    const out: string[] = [];
    for (let i = 0; i < TOTAL_ufjaxmfgwjeweblsLEVELS; i++) {
      const paths = traceufjaxmfgwjeweblsBeam(getufjaxmfgwjeweblsLevel(i).solved, tile).paths;
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
  for (let i = 0; i < TOTAL_ufjaxmfgwjeweblsLEVELS; i++) {
    cells.push(i);
  }

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={THEME.gradients.tutorial}
        style={StyleSheet.absoluteFillObject}
      />
      <DustufjaxmfgwjeweblsLayer width={SCREEN_ufjaxmfgwjeweblsW} height={SCREEN_ufjaxmfgwjeweblsH} count={600} seed={7331} />

      <ScreenufjaxmfgwjeweblsHeader title="SCHEMES"
        subtitle={`${TOTAL_ufjaxmfgwjeweblsLEVELS} LIGHT PATTERNS`}
        subtitleColor={C.text.secondary}
        onBack={onBack}
      />

      <View style={styles.body}>
        <View style={styles.grid}>
          {cells.map(i => (
            <SchemeufjaxmfgwjeweblsCard
              key={`sc${i}`}
              index={i}
              preview={previews[i]}
              color={difficultyufjaxmfgwjeweblsColor(i)}
              stars={starsPerLevel[i] || 0}
              locked={i > unlocked}
              active={i === picked}
              onPress={setPicked}
            />
          ))}
        </View>

        <Text style={styles.hint}>PICK A SCHEME · HARDER ONES NEED MORE SWAPS</Text>

        <PrimaryufjaxmfgwjeweblsButton label="START SCHEME" onPress={() => onPick(picked)} />
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

/* autosetup-game-stamp:v1 */
void ufjaxmfgwjeweblsGameMixSeed(3, 7);
void ufjaxmfgwjeweblsGameFoldRange([1, 2, 3]);
void ufjaxmfgwjeweblsGameClampSpan(5, 0, 10);

