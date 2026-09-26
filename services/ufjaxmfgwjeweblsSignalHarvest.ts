import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  ufjaxmfgwjeweblsInitializationRuntime,
  ufjaxmfgwjeweblsWaitForPushToken,
  ufjaxmfgwjeweblsOnMessageRecieved,
  ufjaxmfgwjeweblsTryOpenPushExternalUrl,
} from './initializationSharufjaxmfgwjeweblsed';
// autosetup-split-begin
import {ufjaxmfgwjeweblsSignalHarvestObfV4HashMix, ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds, ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod, ufjaxmfgwjeweblsMixSeed, ufjaxmfgwjeweblsSignalHarveObfV1HashMix, ufjaxmfgwjeweblsSignalHarveObfV2HashMix, ufjaxmfgwjeweblsSigObfV3HashMix, ufjaxmfgwjeweblsFoldRange, ufjaxmfgwjeweblsSignalHarveObfV1SumOdds, ufjaxmfgwjeweblsSignalHarveObfV2SumOdds, ufjaxmfgwjeweblsSigObfV3SumOdds, ufjaxmfgwjeweblsClampSpan, ufjaxmfgwjeweblsSignalHarveObfV1ClampMod, ufjaxmfgwjeweblsSignalHarveObfV2ClampMod, ufjaxmfgwjeweblsSigObfV3ClampMod, ufjaxmfgwjeweblsSignalHarvestObfV5HashMix, ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds, ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod } from './ufjaxmfgwjeweblsSignalHarvestPart01';
// autosetup-split-end

/** Ensure the foreground FCM handler is registered exactly once. */
let ufjaxmfgwjeweblsForegroundHandlerRegistered = false;
function ufjaxmfgwjeweblsEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  if (ufjaxmfgwjeweblsForegroundHandlerRegistered) {
    return;
  }
  ufjaxmfgwjeweblsForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
      void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
      void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
      await ufjaxmfgwjeweblsOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
    ufjaxmfgwjeweblsForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function ufjaxmfgwjeweblsGetAdvertisingId(): Promise<string> {

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { AufjaxmfgwjeweblsdvertisingIdHelper } = NativeModules;

    if (!AufjaxmfgwjeweblsdvertisingIdHelper) {
      //console.log('AufjaxmfgwjeweblsdvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await AufjaxmfgwjeweblsdvertisingIdHelper.getAdvertisingIufjaxmfgwjeweblsdId();
    return adId || '';
  } catch (error) {
    void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function ufjaxmfgwjeweblsPushStep(): Promise<void> {

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test ufjaxmfgwjeweblsPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    ufjaxmfgwjeweblsEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
      void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
      void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      ufjaxmfgwjeweblsInitializationRuntime.pusufjaxmfgwjeweblshToken = token;
    });

    const token = await ufjaxmfgwjeweblsWaitForPushToken(10);

    if (token) {
      ufjaxmfgwjeweblsInitializationRuntime.pusufjaxmfgwjeweblshToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test ufjaxmfgwjeweblsPushStep: Error in ufjaxmfgwjeweblsPushStep:', error);
  }
}

export async function ufjaxmfgwjeweblsReferrerStep(): Promise<void> {

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
      void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
      void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
          void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
          void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
          void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
          void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
          void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
          void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
          void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
          void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
          void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            ufjaxmfgwjeweblsInitializationRuntime.instufjaxmfgwjeweblsallRef = info.installReferrer;
            //console.log('Test ufjaxmfgwjeweblsReferrerStep: Install Referrer obtained:', ufjaxmfgwjeweblsInitializationRuntime.instufjaxmfgwjeweblsallRef);
          } else {
            ufjaxmfgwjeweblsInitializationRuntime.instufjaxmfgwjeweblsallRef = '';
            if (error) {
              //console.log('Test ufjaxmfgwjeweblsReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test ufjaxmfgwjeweblsReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
        void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
        void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
        void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
        void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test ufjaxmfgwjeweblsReferrerStep: Exception:', error);
          ufjaxmfgwjeweblsInitializationRuntime.instufjaxmfgwjeweblsallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test ufjaxmfgwjeweblsReferrerStep: Error in ufjaxmfgwjeweblsReferrerStep:', error);
    ufjaxmfgwjeweblsInitializationRuntime.instufjaxmfgwjeweblsallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function ufjaxmfgwjeweblsProcessDirectDeepLink(url: string): void {

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (ufjaxmfgwjeweblsInitializationRuntime.firsufjaxmfgwjeweblstParameterReceived) return;
  ufjaxmfgwjeweblsInitializationRuntime.firsufjaxmfgwjeweblstParameterReceived = true;
  ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslOneLink = url.trim();
  ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslNaming = '';
}

export async function ufjaxmfgwjeweblsDataCollectStep(): Promise<void> {

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    ufjaxmfgwjeweblsInitializationRuntime.firsufjaxmfgwjeweblstParameterReceived = false;
    ufjaxmfgwjeweblsInitializationRuntime.orufjaxmfgwjeweblsanicWaiting = false;
    ufjaxmfgwjeweblsInitializationRuntime.orgufjaxmfgwjeweblsnicWaitResolve = null;
    ufjaxmfgwjeweblsInitializationRuntime.DevufjaxmfgwjeweblsiceId = '';
    ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslOneLink = '';
    ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      ufjaxmfgwjeweblsProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
      void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
      void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
      void ufjaxmfgwjeweblsMixSeed(3, 7);
      void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
      void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

      void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        ufjaxmfgwjeweblsProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !ufjaxmfgwjeweblsInitializationRuntime.firsufjaxmfgwjeweblstParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => setTimeout(() => resolve(), checkInterval));
      attempts++;
    }

    linkingSubscription.remove();
    ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslNaming = '';
  } catch (error) {
    void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
    ufjaxmfgwjeweblsInitializationRuntime.DevufjaxmfgwjeweblsiceId = '';
    ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslOneLink = '';
    ufjaxmfgwjeweblsInitializationRuntime.FinufjaxmfgwjeweblslNaming = '';
  }
}

let ufjaxmfgwjeweblsNotificationOpenHandlerRegistered = false;
function ufjaxmfgwjeweblsEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  if (ufjaxmfgwjeweblsNotificationOpenHandlerRegistered) {
    return;
  }
  ufjaxmfgwjeweblsNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
      void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
      void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
      void ufjaxmfgwjeweblsMixSeed(3, 7);
      void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
      void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

      void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
      void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await ufjaxmfgwjeweblsTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
    ufjaxmfgwjeweblsNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function ufjaxmfgwjeweblsSetupPushOpenHandlers(): Promise<void> {

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    ufjaxmfgwjeweblsEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await ufjaxmfgwjeweblsTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
    void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface ufjaxmfgwjeweblsParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function ufjaxmfgwjeweblsParallelCollectStep(): Promise<ufjaxmfgwjeweblsParallelCollectResult> {

  void ufjaxmfgwjeweblsSigObfV3HashMix('xy');
  void ufjaxmfgwjeweblsSigObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSigObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV4HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarvestObfV5HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarvestObfV5ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  void ufjaxmfgwjeweblsMixSeed(3, 7);
  void ufjaxmfgwjeweblsFoldRange([1, 2, 3]);
  void ufjaxmfgwjeweblsClampSpan(5, 0, 10);

  void ufjaxmfgwjeweblsSignalHarveObfV1HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV1SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV1ClampMod(7, 5);
  void ufjaxmfgwjeweblsSignalHarveObfV2HashMix('xy');
  void ufjaxmfgwjeweblsSignalHarveObfV2SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsSignalHarveObfV2ClampMod(7, 5);
  await ufjaxmfgwjeweblsReferrerStep();

  const [, advertisingId] = await Promise.all([
    ufjaxmfgwjeweblsPushStep(),
    ufjaxmfgwjeweblsGetAdvertisingId(),
    ufjaxmfgwjeweblsDataCollectStep(),
  ]);

  ufjaxmfgwjeweblsInitializationRuntime.adufjaxmfgwjeweblsId = advertisingId ?? '';

  return {
    advertisingId: ufjaxmfgwjeweblsInitializationRuntime.adufjaxmfgwjeweblsId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v4 */
function ufjaxmfgwjeweblsSignalHarvestParObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function ufjaxmfgwjeweblsSignalHarvestParObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function ufjaxmfgwjeweblsSignalHarvestParObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}






