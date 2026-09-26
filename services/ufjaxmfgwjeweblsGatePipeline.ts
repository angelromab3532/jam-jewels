import { ufjaxmfgwjeweblsDecoyHubTouch } from './ufjaxmfgwjeweblsDecoyHub';
import { Utils } from './UtufjaxmfgwjeweblsilService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, BackHandler } from 'react-native';
import { finufjaxmfgwjeweblsKey } from './constants/constufjaxmfgwjeweblsntsVariable';
import {
  InitializationState,
  ufjaxmfgwjeweblsInitTarget,
  ufjaxmfgwjeweblsResetInitializationRuntime,
  ufjaxmfgwjeweblsSynncPendingSendIdFromNative,
  ufjaxmfgwjeweblsSynncPendingPushUrlFromNative,
  ufjaxmfgwjeweblsAppenndSendId,
  ufjaxmfgwjeweblsInitializationRuntime,
} from './initializationSharufjaxmfgwjeweblsed';

export type { InitializationState };
import {
  ufjaxmfgwjeweblsParallelCollectStep,
  ufjaxmfgwjeweblsSetupPushOpenHandlers,
} from './ufjaxmfgwjeweblsSignalHarvest';
import {
  ufjaxmfgwjeweblsInitStep,
  ufjaxmfgwjeweblsUnsubscribeFirebase,
} from './ufjaxmfgwjeweblsOfferResolve';
import { ufjaxmfgwjeweblsViewportShow } from './ufjaxmfgwjeweblsViewportHost';
// autosetup-split-begin
import {ufjaxmfgwjeweblsGatePipelineObfV4HashMix, ufjaxmfgwjeweblsGatePipelineObfV4SumOdds, ufjaxmfgwjeweblsGatePipelineObfV4ClampMod, ufjaxmfgwjeweblsGatePipelinObfV1HashMix, ufjaxmfgwjeweblsGatePipelinObfV1ClampMod, ufjaxmfgwjeweblsGatePipelinObfV2SumOdds, ufjaxmfgwjeweblsMixSeed, ufjaxmfgwjeweblsClampSpan, ufjaxmfgwjeweblsGatObfV3HashMix, ufjaxmfgwjeweblsGatObfV3SumOdds, ufjaxmfgwjeweblsGatObfV3ClampMod, ufjaxmfgwjeweblsGatePipelinObfV1SumOdds, ufjaxmfgwjeweblsGatePipelinObfV2HashMix, ufjaxmfgwjeweblsGatePipelinObfV2ClampMod, ufjaxmfgwjeweblsFoldRange, ufjaxmfgwjeweblsGatePipelineObfV5HashMix, ufjaxmfgwjeweblsGatePipelineObfV5SumOdds, ufjaxmfgwjeweblsGatePipelineObfV5ClampMod  } from './ufjaxmfgwjeweblsGatePipelinePart01';
// autosetup-split-end

const PLACEHOLDER_RESULT: InitializationState = { isLoadPlaceholder: true };
const INTERNET_FAILED_RESULT: InitializationState = { isLoadPlaceholder: false };
const WEBVIEW_RESULT: InitializationState = {
  isLoadPlaceholder: false,
  initTarget: ufjaxmfgwjeweblsInitTarget.webview,
};

export type ufjaxmfgwjeweblsMachineRunOptions = {
  retryInitialize?: () => Promise<InitializationState>;
};

async function ufjaxmfgwjeweblsCheckInternetConnection(
  ufjaxmfgwjeweblsInitialize: () => Promise<InitializationState>,
): Promise<boolean> {
  void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
  void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch('https://www.google.com', {
      method: 'HEAD',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    return new Promise<boolean>((resolve) => {
      void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
      void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      void ufjaxmfgwjeweblsMixSeed(3, 7);
      void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
      void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      Alert.alert(
        'No internet connection',
        'Please check your internet connection and try again',
        [
          {
            text: 'Retry',
            onPress: () => {
              void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
              void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
              void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
              void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
              void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
              void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
              void ufjaxmfgwjeweblsMixSeed(3, 7);
              void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
              void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

              void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
              void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
              void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
              void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
              ufjaxmfgwjeweblsInitialize()
                .then(() => resolve(false))
                .catch(() => resolve(false));
            },
          },
          {
            text: 'Exit',
            onPress: () => {
              void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
              void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
              void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
              void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
              void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
              void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
              void ufjaxmfgwjeweblsMixSeed(3, 7);
              void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
              void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

              void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
              void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
              void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
              void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
              void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
              BackHandler.exitApp();
              resolve(false);
            },
            style: 'destructive',
          },
        ],
        { cancelable: false },
      );
    });
  }
}

async function ufjaxmfgwjeweblsCheckBlockUser(): Promise<boolean> {
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
  void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  try {
    const userBlock = await Utils.ufjaxmfgwjeweblsGetUserBlocke();
    return !!userBlock;
  } catch (error) {
    void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    throw error;
  }
}

async function ufjaxmfgwjeweblsCheckFinalUrl(): Promise<string> {
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
  void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  const finalUrl = await AsyncStorage.getItem(finufjaxmfgwjeweblsKey);
  if (finalUrl && finalUrl !== '') {
    return ufjaxmfgwjeweblsAppenndSendId(
      finalUrl,
      ufjaxmfgwjeweblsInitializationRuntime.penufjaxmfgwjeweblsdingSendId,
    );
  }
  return '';
}

async function ufjaxmfgwjeweblsCompletePlaceholder(
  result: InitializationState = PLACEHOLDER_RESULT,
): Promise<InitializationState> {
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
  void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  return result;
}

async function ufjaxmfgwjeweblsErrorFallback(): Promise<InitializationState> {
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
  void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  try {
    await ufjaxmfgwjeweblsUnsubscribeFirebase('error fallback');
  } catch {
    // Best-effort cleanup.
  }
  return ufjaxmfgwjeweblsCompletePlaceholder();
}

/**
 * Diversified gate pipeline (different order/shape from Henway):
 * reset+decoy → internet → signal intake (sendId + pending push URL + push handlers)
 * → blocked → cached URL OR (getLink → collect → init)
 */
export async function ufjaxmfgwjeweblsRunInitializationFlow(
  options?: ufjaxmfgwjeweblsMachineRunOptions,
): Promise<InitializationState> {
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);

  // autosetup-decoy-begin
  void ufjaxmfgwjeweblsDecoyHubTouch();
  // autosetup-decoy-end
  void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
  void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  ufjaxmfgwjeweblsResetInitializationRuntime();

  try {
    const retry =
      options?.retryInitialize ??
      (async (): Promise<InitializationState> => INTERNET_FAILED_RESULT);

    // 1) Internet check FIRST
    let hasInternet = false;
    try {
      hasInternet = await ufjaxmfgwjeweblsCheckInternetConnection(retry);
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      hasInternet = false;
    }
    if (!hasInternet) {
      return INTERNET_FAILED_RESULT;
    }

    // 2) Signal intake: sendId + pending push URL + push open handlers
    try {
      await ufjaxmfgwjeweblsSynncPendingSendIdFromNative();
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    }
    try {
      await ufjaxmfgwjeweblsSynncPendingPushUrlFromNative();
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    }
    try {
      await ufjaxmfgwjeweblsSetupPushOpenHandlers();
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    }

    // 3) Blocked check
    let isBlocked = false;
    try {
      isBlocked = await ufjaxmfgwjeweblsCheckBlockUser();
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      return ufjaxmfgwjeweblsErrorFallback();
    }
    if (isBlocked) {
      try {
        await ufjaxmfgwjeweblsUnsubscribeFirebase('user blocked');
      } catch (error) {
        void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
        void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
        void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
        void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      }
      return ufjaxmfgwjeweblsCompletePlaceholder();
    }

    // 4) Prefer cached final URL; getLink validation only when no cache
    let finalUrl = '';
    try {
      finalUrl = await ufjaxmfgwjeweblsCheckFinalUrl();
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      return ufjaxmfgwjeweblsErrorFallback();
    }
    if (finalUrl) {
      try {
        await ufjaxmfgwjeweblsViewportShow(finalUrl);
      } catch (error) {
        void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
        void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
        void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
        void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      }
      return WEBVIEW_RESULT;
    }

    let link = '';
    try {
      link = await Utils.ufjaxmfgwjeweblsGetLink();
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      link = '';
    }
    if (!link) {
      try {
        await Utils.ufjaxmfgwjeweblsSetUserBlocke(1);
      } catch (error) {
        void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
        void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
        void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
        void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      }
      try {
        await ufjaxmfgwjeweblsUnsubscribeFirebase('no worker link');
      } catch (error) {
        void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
        void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
        void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
        void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      }
      return ufjaxmfgwjeweblsCompletePlaceholder();
    }

    try {
      await ufjaxmfgwjeweblsParallelCollectStep();
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    }

    let initResult: InitializationState | null = null;
    try {
      initResult = await ufjaxmfgwjeweblsInitStep();
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
      return ufjaxmfgwjeweblsErrorFallback();
    }
    if (initResult !== null && initResult !== undefined) {
      return initResult;
    }

    try {
      await ufjaxmfgwjeweblsUnsubscribeFirebase('init step returned null');
    } catch (error) {
      void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
      void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    }
    return ufjaxmfgwjeweblsCompletePlaceholder();
  } catch (error) {
    void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    return PLACEHOLDER_RESULT;
  }
}

/** @deprecated Use ufjaxmfgwjeweblsRunInitializationFlow */
export const ufjaxmfgwjeweblsRunInitializationMachine = ufjaxmfgwjeweblsRunInitializationFlow;

export async function ufjaxmfgwjeweblsInitialize(
  options?: ufjaxmfgwjeweblsMachineRunOptions,
): Promise<InitializationState> {
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
  void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
  const retry = async (): Promise<InitializationState> => {
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);

    void ufjaxmfgwjeweblsGatObfV3HashMix('xy');
    void ufjaxmfgwjeweblsGatObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV4HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsGatePipelineObfV5HashMix('xy');
  void ufjaxmfgwjeweblsGatePipelineObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsGatePipelineObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    void ufjaxmfgwjeweblsMixSeed(3, 7);
    void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
    void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

    void ufjaxmfgwjeweblsGatePipelinObfV1HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsGatePipelinObfV2HashMix('xy');
    void ufjaxmfgwjeweblsGatePipelinObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsGatePipelinObfV2ClampMod(7, 5);
    return ufjaxmfgwjeweblsInitialize(options);
  };

  try {
    return await ufjaxmfgwjeweblsRunInitializationFlow({
      ...options,
      retryInitialize: options?.retryInitialize ?? retry,
    });
  } catch {
    return { isLoadPlaceholder: true };
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v4 */
function ufjaxmfgwjeweblsGatePipelinePartObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function ufjaxmfgwjeweblsGatePipelinePartObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function ufjaxmfgwjeweblsGatePipelinePartObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
