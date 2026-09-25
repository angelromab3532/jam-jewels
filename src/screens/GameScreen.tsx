import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { bgGame } from '../assets';
import { TOTAL_LEVELS } from '../constants/config';
import { C, THEME } from '../constants/theme';
import { type RoundStats } from '../game/scoring';
import { usePuzzle } from '../hooks/usePuzzle';
import { PrimaryButton } from '../components/PrimaryButton';
import { PuzzleBoard } from '../components/PuzzleBoard';
import { ScreenHeader } from '../components/ScreenHeader';

type Props = {
  levelIndex: number;
  onExit: () => void;
  onGameOver: (stats: RoundStats) => void;
};

export function GameScreen({ levelIndex, onExit, onGameOver }: Props) {
  const puzzle = usePuzzle(levelIndex, onGameOver);
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
      <ImageBackground source={bgGame} resizeMode="cover" style={styles.bg}>
        <LinearGradient
          colors={THEME.gradients.gameVeil}
          style={StyleSheet.absoluteFillObject}
        />

        <ScreenHeader title={`SCHEME ${levelIndex + 1} / ${TOTAL_LEVELS}`}
          subtitle={`MOVES ${movesLeft}`}
          onBack={onExit}
          rightSlot={pips}
        />

        <View style={styles.area}>
          <PuzzleBoard
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

          <PrimaryButton
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
