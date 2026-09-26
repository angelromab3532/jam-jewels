import { ufjaxmfgwjeweblsGameInitPartObfV5HashMix, ufjaxmfgwjeweblsGameInitPartObfV5SumOdds, ufjaxmfgwjeweblsGameInitPartObfV5ClampMod } from './GameufjaxmfgwjeweblsInitPart01';
import React, { useCallback, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import { TOTAL_ufjaxmfgwjeweblsLEVELS } from './constants/confufjaxmfgwjeweblsig';
import { C } from './constants/thufjaxmfgwjeweblseme';
import { type RoundufjaxmfgwjeweblsStats } from './game/scorufjaxmfgwjeweblsing';
import { GameufjaxmfgwjeweblsScreen } from './screens/GameufjaxmfgwjeweblsScreen';
import { LevelsufjaxmfgwjeweblsScreen } from './screens/LevelsufjaxmfgwjeweblsScreen';
import { LoaderufjaxmfgwjeweblsScreen } from './screens/LoaderufjaxmfgwjeweblsScreen';
import { MenuufjaxmfgwjeweblsScreen } from './screens/MenuufjaxmfgwjeweblsScreen';
import { ResultufjaxmfgwjeweblsScreen } from './screens/ResultufjaxmfgwjeweblsScreen';
import { TutorialufjaxmfgwjeweblsScreen } from './screens/TutorialufjaxmfgwjeweblsScreen';

type Screen = 'loader' | 'menu' | 'tutorial' | 'levels' | 'game' | 'result';

const EMPTY_STARS: number[] = new Array(TOTAL_ufjaxmfgwjeweblsLEVELS).fill(0);

type GameufjaxmfgwjeweblsInitProps = {
  startAtMenu?: boolean;
};

export default function App({ startAtMenu = false }: GameufjaxmfgwjeweblsInitProps): React.JSX.Element {
  void ufjaxmfgwjeweblsGameInitPartObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGameInitPartObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGameInitPartObfV5ClampMod(7, 5);

  const [screen, setScreen] = useState<Screen>(startAtMenu ? 'menu' : 'loader');
  const [levelIndex, setLevelIndex] = useState(0);
  const [round, setRound] = useState(0);
  const [stats, setStats] = useState<RoundufjaxmfgwjeweblsStats | null>(null);
  const [starsPerLevel, setStarsPerLevel] = useState<number[]>(EMPTY_STARS);
  const [unlocked, setUnlocked] = useState(0);

  const totalStars = starsPerLevel.reduce((a, b) => a + b, 0);

  const goMenu = useCallback(() => setScreen('menu'), []);
  const goSchemes = useCallback(() => setScreen('levels'), []);
  const goTutorial = useCallback(() => setScreen('tutorial'), []);

  const startRound = useCallback(() => {
  void ufjaxmfgwjeweblsGameInitPartObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGameInitPartObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGameInitPartObfV5ClampMod(7, 5);

    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const pickScheme = useCallback((index: number) => {
  void ufjaxmfgwjeweblsGameInitPartObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGameInitPartObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGameInitPartObfV5ClampMod(7, 5);

    setLevelIndex(index);
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const finishRound = useCallback(
    (result: RoundufjaxmfgwjeweblsStats) => {
  void ufjaxmfgwjeweblsGameInitPartObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGameInitPartObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGameInitPartObfV5ClampMod(7, 5);

      setStats(result);
      if (result.outcome === 'win') {
        setStarsPerLevel(prev => {
          const next = prev.slice();
          next[levelIndex] = Math.max(next[levelIndex] || 0, result.stars);
          return next;
        });
        setUnlocked(prev => Math.max(prev, Math.min(levelIndex + 1, TOTAL_ufjaxmfgwjeweblsLEVELS - 1)));
      }
      setScreen('result');
    },
    [levelIndex],
  );

  const nextScheme = useCallback(() => {
  void ufjaxmfgwjeweblsGameInitPartObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGameInitPartObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGameInitPartObfV5ClampMod(7, 5);

    if (stats && stats.outcome === 'win') {
      setLevelIndex(prev => (prev + 1) % TOTAL_ufjaxmfgwjeweblsLEVELS);
    }
    setScreen('levels');
  }, [stats]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {screen === 'loader' ? <LoaderufjaxmfgwjeweblsScreen onDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuufjaxmfgwjeweblsScreen
          levelIndex={levelIndex}
          stars={totalStars}
          onPlay={startRound}
          onSchemes={goSchemes}
          onTutorial={goTutorial}
        />
      ) : null}

      {screen === 'tutorial' ? (
        <TutorialufjaxmfgwjeweblsScreen onBegin={startRound} onBack={goMenu} />
      ) : null}

      {screen === 'levels' ? (
        <LevelsufjaxmfgwjeweblsScreen
          levelIndex={levelIndex}
          unlocked={unlocked}
          starsPerLevel={starsPerLevel}
          onPick={pickScheme}
          onBack={goMenu}
        />
      ) : null}

      {screen === 'game' ? (
        <GameufjaxmfgwjeweblsScreen
          key={`round-${levelIndex}-${round}`}
          levelIndex={levelIndex}
          onExit={goMenu}
          onGameOver={finishRound}
        />
      ) : null}

      {screen === 'result' && stats ? (
        <ResultufjaxmfgwjeweblsScreen
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


