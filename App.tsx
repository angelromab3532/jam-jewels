import React, { useCallback, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import { TOTAL_LEVELS } from './src/constants/config';
import { C } from './src/constants/theme';
import { type RoundStats } from './src/game/scoring';
import { GameScreen } from './src/screens/GameScreen';
import { LevelsScreen } from './src/screens/LevelsScreen';
import { LoaderScreen } from './src/screens/LoaderScreen';
import { MenuScreen } from './src/screens/MenuScreen';
import { ResultScreen } from './src/screens/ResultScreen';
import { TutorialScreen } from './src/screens/TutorialScreen';

type Screen = 'loader' | 'menu' | 'tutorial' | 'levels' | 'game' | 'result';

const EMPTY_STARS: number[] = new Array(TOTAL_LEVELS).fill(0);

function App(): React.JSX.Element {
  const [screen, setScreen] = useState<Screen>('loader');
  const [levelIndex, setLevelIndex] = useState(0);
  const [round, setRound] = useState(0);
  const [stats, setStats] = useState<RoundStats | null>(null);
  const [starsPerLevel, setStarsPerLevel] = useState<number[]>(EMPTY_STARS);
  const [unlocked, setUnlocked] = useState(0);

  const totalStars = starsPerLevel.reduce((a, b) => a + b, 0);

  const goMenu = useCallback(() => setScreen('menu'), []);
  const goSchemes = useCallback(() => setScreen('levels'), []);
  const goTutorial = useCallback(() => setScreen('tutorial'), []);

  const startRound = useCallback(() => {
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const pickScheme = useCallback((index: number) => {
    setLevelIndex(index);
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const finishRound = useCallback(
    (result: RoundStats) => {
      setStats(result);
      if (result.outcome === 'win') {
        setStarsPerLevel(prev => {
          const next = prev.slice();
          next[levelIndex] = Math.max(next[levelIndex] || 0, result.stars);
          return next;
        });
        setUnlocked(prev => Math.max(prev, Math.min(levelIndex + 1, TOTAL_LEVELS - 1)));
      }
      setScreen('result');
    },
    [levelIndex],
  );

  const nextScheme = useCallback(() => {
    if (stats && stats.outcome === 'win') {
      setLevelIndex(prev => (prev + 1) % TOTAL_LEVELS);
    }
    setScreen('levels');
  }, [stats]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {screen === 'loader' ? <LoaderScreen onDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuScreen
          levelIndex={levelIndex}
          stars={totalStars}
          onPlay={startRound}
          onSchemes={goSchemes}
          onTutorial={goTutorial}
        />
      ) : null}

      {screen === 'tutorial' ? (
        <TutorialScreen onBegin={startRound} onBack={goMenu} />
      ) : null}

      {screen === 'levels' ? (
        <LevelsScreen
          levelIndex={levelIndex}
          unlocked={unlocked}
          starsPerLevel={starsPerLevel}
          onPick={pickScheme}
          onBack={goMenu}
        />
      ) : null}

      {screen === 'game' ? (
        <GameScreen
          key={`round-${levelIndex}-${round}`}
          levelIndex={levelIndex}
          onExit={goMenu}
          onGameOver={finishRound}
        />
      ) : null}

      {screen === 'result' && stats ? (
        <ResultScreen
          levelIndex={levelIndex}
          stats={stats}
          onPlayAgain={startRound}
          onSchemes={nextScheme}
          onMenu={goMenu}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.bg.deep,
  },
});

export default App;
