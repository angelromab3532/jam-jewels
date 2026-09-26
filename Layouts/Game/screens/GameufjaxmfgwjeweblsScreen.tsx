import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { bgufjaxmfgwjeweblsGame } from '../assets';
import { TOTAL_ufjaxmfgwjeweblsLEVELS } from '../constants/confufjaxmfgwjeweblsig';
import { C, THEME } from '../constants/thufjaxmfgwjeweblseme';
import { type RoundufjaxmfgwjeweblsStats } from '../game/scorufjaxmfgwjeweblsing';
import { useufjaxmfgwjeweblsPuzzle } from '../hooks/useufjaxmfgwjeweblsPuzzle';
import { PrimaryufjaxmfgwjeweblsButton } from '../components/PrimaryufjaxmfgwjeweblsButton';
import { PuzzleufjaxmfgwjeweblsBoard } from '../components/PuzzleufjaxmfgwjeweblsBoard';
import { ScreenufjaxmfgwjeweblsHeader } from '../components/ScreenufjaxmfgwjeweblsHeader';

type Props = {
  levelIndex: number;
  onExit: () => void;
  onGameOver: (stats: RoundufjaxmfgwjeweblsStats) => void;
};

export function GameufjaxmfgwjeweblsScreen({ levelIndex, onExit, onGameOver }: Props) {
  void ufjaxmfgwjeweblsGameScreenObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGameScreenObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGameScreenObfV5ClampMod(7, 5);

  const puzzle = useufjaxmfgwjeweblsPuzzle(levelIndex, onGameOver);
  const { level, lit, litCount, movesLeft, phase } = puzzle;

  const pips = (
    <View style={styles.pipRow}>
      {level.targets.map((t, i) => (
        <View
          key={`p${i}`}
          style={[
            styles.pip,
            {
              backgroundColor: lit[i] ? t.color : C.ui.dim,
              shadowColor: t.color,
              shadowOpacity: lit[i] ? 0.9 : 0,
              elevation: lit[i] ? 6 : 0,
            },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.root}>
      <ImageBackground source={bgufjaxmfgwjeweblsGame} resizeMode="cover" style={styles.bg}>
        <LinearGradient
          colors={THEME.gradients.gameVeil}
          style={StyleSheet.absoluteFillObject}
        />

        <ScreenufjaxmfgwjeweblsHeader title={`SCHEME ${levelIndex + 1} / ${TOTAL_ufjaxmfgwjeweblsLEVELS}`}
          subtitle={`MOVES ${movesLeft}`}
          onBack={onExit}
          rightSlot={pips}
        />

        <View style={styles.area}>
          <PuzzleufjaxmfgwjeweblsBoard
            grid={puzzle.grid}
            paths={puzzle.paths}
            targets={level.targets}
            lit={lit}
            selected={puzzle.selected}
            highlight={puzzle.highlight}
            beamOpacity={puzzle.beamOpacity}
            shake={puzzle.shake}
            flash={puzzle.flash}
            losing={phase === 'lose'}
            onTapCell={puzzle.onTapCell}
          />
        </View>

        <View style={styles.panel}>
          <View style={styles.panelRow}>
            <View style={styles.panelCell}>
              <Text style={styles.panelLabel}>MOVES LEFT</Text>
              <Text style={[styles.panelValue, styles.gold]}>{movesLeft}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.panelCell}>
              <Text style={styles.panelLabel}>EDGES</Text>
              <Text style={[styles.panelValue, styles.teal]}>
                {litCount}/{level.targets.length}
              </Text>
            </View>
          </View>

          <PrimaryufjaxmfgwjeweblsButton
            label="GO"
            caption="CHECK THE LIGHT PATH"
            onPress={puzzle.onCheck}
            colors={THEME.gradients.gold}
            height={56}
            textColor={C.text.onGold}
            shadowColor={C.accent.gold}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg.primary,
  },
  bg: {
    flex: 1,
  },
  pipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 6,
  },
  pip: {
    width: 14,
    height: 14,
    borderRadius: 3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
  area: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  panel: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 110,
    borderRadius: THEME.radius.xl,
    backgroundColor: C.bg.panel,
    borderWidth: 1,
    borderColor: 'rgba(244,232,216,0.12)',
    padding: 14,
    shadowColor: '#000000',
    shadowOpacity: 0.55,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 10 },
    elevation: 16,
  },
  panelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  panelCell: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(244,232,216,0.12)',
  },
  panelLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
    color: C.text.secondary,
  },
  panelValue: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
    fontVariant: THEME.numeric.fontVariant,
  },
  gold: { color: C.accent.gold },
  teal: { color: C.accent.teal },
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
function ufjaxmfgwjeweblsGameScreenObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsGameScreenObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsGameScreenObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

