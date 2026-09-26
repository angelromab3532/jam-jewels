import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppufjaxmfgwjeweblsInitialization } from './services/initufjaxmfgwjeweblsializationFlow';
import AppufjaxmfgwjeweblsPlaceholder from './Layouts/Game/GameufjaxmfgwjeweblsInit';
import LoaderufjaxmfgwjeweblsScreen from './Layouts/Game/LoaderufjaxmfgwjeweblsScreen';
import { ufjaxmfgwjeweblsViewportGetState, ufjaxmfgwjeweblsViewportRestore } from './services/ufjaxmfgwjeweblsViewportHost';

function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppufjaxmfgwjeweblsContent />
    </SafeAreaProvider>
  );
}

function AppufjaxmfgwjeweblsContent() {
  const { isufjaxmfgwjeweblsLoading, isufjaxmfgwjeweblsLoadPlaceholder } = useAppufjaxmfgwjeweblsInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuufjaxmfgwjeweblsArmed, setMenuufjaxmfgwjeweblsArmed] = useState(false);
  const appufjaxmfgwjeweblsState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showufjaxmfgwjeweblsGame =
    !isufjaxmfgwjeweblsLoading && isufjaxmfgwjeweblsLoadPlaceholder;

  const handleufjaxmfgwjeweblsFirstProgress = useCallback(() => {
    setMenuufjaxmfgwjeweblsArmed(true);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appufjaxmfgwjeweblsState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = ufjaxmfgwjeweblsViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          ufjaxmfgwjeweblsViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appufjaxmfgwjeweblsState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuufjaxmfgwjeweblsArmed || showufjaxmfgwjeweblsGame) && (
        <AppufjaxmfgwjeweblsPlaceholder startAtMenu />
      )}
      {!showufjaxmfgwjeweblsGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderufjaxmfgwjeweblsScreen
            doneOnFirstCycle
            onDone={handleufjaxmfgwjeweblsFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
