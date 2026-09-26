import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ufjaxmfgwjeweblsDecrypt } from './CrypufjaxmfgwjeweblstoService';
import { finufjaxmfgwjeweblsKey } from './constants/constufjaxmfgwjeweblsntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  ufjaxmfgwjeweblsViewportGetState,
  ufjaxmfgwjeweblsViewportShow,
} from './ufjaxmfgwjeweblsViewportHost';
import { Utils } from './UtufjaxmfgwjeweblsilService';

let ufjaxmfgwjeweblsLastOpenedPushExternalUrl = '';
let ufjaxmfgwjeweblsLastOpenedPushExternalAt = 0;

export const ufjaxmfgwjeweblsInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof ufjaxmfgwjeweblsInitTarget)[keyof typeof ufjaxmfgwjeweblsInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface ufjaxmfgwjeweblsInitializationRuntime {
  pusufjaxmfgwjeweblshToken: string;
  instufjaxmfgwjeweblsallRef: string;
  DevufjaxmfgwjeweblsiceId: string;
  FinufjaxmfgwjeweblslOneLink: string;
  FinufjaxmfgwjeweblslNaming: string;
  adufjaxmfgwjeweblsId: string;
  firsufjaxmfgwjeweblstParameterReceived: boolean;
  orufjaxmfgwjeweblsanicWaiting: boolean;
  orgufjaxmfgwjeweblsnicWaitResolve: (() => void) | null;
  penufjaxmfgwjeweblsdingSendId: string;
}

export const ufjaxmfgwjeweblsInitializationRuntime: ufjaxmfgwjeweblsInitializationRuntime = {
  pusufjaxmfgwjeweblshToken: '',
  instufjaxmfgwjeweblsallRef: '',
  DevufjaxmfgwjeweblsiceId: '',
  FinufjaxmfgwjeweblslOneLink: '',
  FinufjaxmfgwjeweblslNaming: '',
  adufjaxmfgwjeweblsId: '',
  firsufjaxmfgwjeweblstParameterReceived: false,
  orufjaxmfgwjeweblsanicWaiting: false,
  orgufjaxmfgwjeweblsnicWaitResolve: null,
  penufjaxmfgwjeweblsdingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function ufjaxmfgwjeweblsResetInitializationRuntime(): void {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  ufjaxmfgwjeweblsInitializationRuntime.pusufjaxmfgwjeweblshToken = '';
  ufjaxmfgwjeweblsInitializationRuntime.instufjaxmfgwjeweblsallRef = '';
  ufjaxmfgwjeweblsInitializationRuntime.DevufjaxmfgwjeweblsiceId = '';
  ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslOneLink = '';
  ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslNaming = '';
  ufjaxmfgwjeweblsInitializationRuntime.adufjaxmfgwjeweblsId = '';
  ufjaxmfgwjeweblsInitializationRuntime.firsufjaxmfgwjeweblstParameterReceived = false;
  ufjaxmfgwjeweblsInitializationRuntime.orufjaxmfgwjeweblsanicWaiting = false;
  ufjaxmfgwjeweblsInitializationRuntime.orgufjaxmfgwjeweblsnicWaitResolve = null;
}

export function ufjaxmfgwjeweblsAppenndSendId(url: string, sendId: string): string {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function ufjaxmfgwjeweblsSynncPendingSendIdFromNative(): Promise<void> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AufjaxmfgwjeweblsppInfoModule } = NativeModules;
    if (!AufjaxmfgwjeweblsppInfoModule || typeof AufjaxmfgwjeweblsppInfoModule.getAndClearPendingSenufjaxmfgwjeweblsdId !== 'function') {
      return;
    }
    const sendId = await AufjaxmfgwjeweblsppInfoModule.getAndClearPendingSenufjaxmfgwjeweblsdId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      ufjaxmfgwjeweblsInitializationRuntime.penufjaxmfgwjeweblsdingSendId = sendId.trim();
    }
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function ufjaxmfgwjeweblsTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === ufjaxmfgwjeweblsLastOpenedPushExternalUrl &&
    now - ufjaxmfgwjeweblsLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    ufjaxmfgwjeweblsLastOpenedPushExternalUrl = url;
    ufjaxmfgwjeweblsLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    ufjaxmfgwjeweblsLastOpenedPushExternalUrl = '';
    ufjaxmfgwjeweblsLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function ufjaxmfgwjeweblsSynncPendingPushUrlFromNative(): Promise<void> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AufjaxmfgwjeweblsppInfoModule } = NativeModules;
    if (
      !AufjaxmfgwjeweblsppInfoModule ||
      typeof AufjaxmfgwjeweblsppInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await AufjaxmfgwjeweblsppInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await ufjaxmfgwjeweblsTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function ufjaxmfgwjeweblsGetAppIdenier(): Promise<string> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { AufjaxmfgwjeweblsppInfoModule } = NativeModules;

    if (!AufjaxmfgwjeweblsppInfoModule) {
      //console.log('AufjaxmfgwjeweblsppInfoModule module not found');
      return '';
    }

    const packageName = await AufjaxmfgwjeweblsppInfoModule.getPacufjaxmfgwjeweblskageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function ufjaxmfgwjeweblsGetAppVersion(): Promise<string> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function ufjaxmfgwjeweblsGetAndroidId(): Promise<string> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function ufjaxmfgwjeweblsGetAndroidUserAAgent(): Promise<string> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAufjaxmfgwjeweblsper } = NativeModules;

    if (!UserAufjaxmfgwjeweblsper) {
      //console.log('UserAufjaxmfgwjeweblsper module not found');
      return '';
    }

    const userAgent: string = await UserAufjaxmfgwjeweblsper.getAndrufjaxmfgwjeweblsoidUserAgent();
    return userAgent || '';
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const ufjaxmfgwjeweblsINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let ufjaxmfgwjeweblsInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function ufjaxmfgwjeweblsWaitForInitPush(timeoutMs: number): Promise<string | null> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
    void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void ufjaxmfgwjeweblsMixSeed(3, 7);
    void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
    void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

      void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (ufjaxmfgwjeweblsInitPushResolver === deliver) {
        ufjaxmfgwjeweblsInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

      void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {
      void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    ufjaxmfgwjeweblsInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function ufjaxmfgwjeweblsDeliverInitPush(encryptedBody: string): boolean {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!ufjaxmfgwjeweblsInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = ufjaxmfgwjeweblsInitPushResolver;
  ufjaxmfgwjeweblsInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function ufjaxmfgwjeweblsHandleInitPushBackground(encryptedBody: string): Promise<void> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = ufjaxmfgwjeweblsDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = ufjaxmfgwjeweblsAppenndSendId(
        redirectUrlInitial,
        ufjaxmfgwjeweblsInitializationRuntime.penufjaxmfgwjeweblsdingSendId,
      );
      await AsyncStorage.setItem(finufjaxmfgwjeweblsKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = ufjaxmfgwjeweblsViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await ufjaxmfgwjeweblsViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.ufjaxmfgwjeweblsSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function ufjaxmfgwjeweblsExtractInitPushBody(data: Record<string, any>): string {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of ufjaxmfgwjeweblsINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function ufjaxmfgwjeweblsWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
    void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
      void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await ufjaxmfgwjeweblsOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function ufjaxmfgwjeweblsOnTokenReceived(token: string): Promise<void> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    ufjaxmfgwjeweblsInitializationRuntime.pusufjaxmfgwjeweblshToken = token;
  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function ufjaxmfgwjeweblsOnMessageRecieved(remoteMessage: any): Promise<void> {
  void ufjaxmfgwjeweblsinitializationSharufObfV5HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsinitializationSharObfV3HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationShObfV4HashMix('xy');
  void ufjaxmfgwjeweblsinitializationShObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationShObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);


  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = ufjaxmfgwjeweblsExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = ufjaxmfgwjeweblsDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await ufjaxmfgwjeweblsHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      ufjaxmfgwjeweblsInitializationRuntime.penufjaxmfgwjeweblsdingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finufjaxmfgwjeweblsKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = ufjaxmfgwjeweblsAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = ufjaxmfgwjeweblsViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await ufjaxmfgwjeweblsViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix('xy');
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const ufjaxmfgwjeweblsabppOnMessageRecieved = ufjaxmfgwjeweblsOnMessageRecieved;

function ufjaxmfgwjeweblsMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function ufjaxmfgwjeweblsFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function ufjaxmfgwjeweblsClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function ufjaxmfgwjeweblsinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function ufjaxmfgwjeweblsinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function ufjaxmfgwjeweblsinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function ufjaxmfgwjeweblsinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function ufjaxmfgwjeweblsinitializationShObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function ufjaxmfgwjeweblsinitializationShObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function ufjaxmfgwjeweblsinitializationShObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsinitializationSharufObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsinitializationSharufObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsinitializationSharufObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

