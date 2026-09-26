import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_ufjaxmfgwjeweblsKEY,
  STORAGE_ufjaxmfgwjeweblsKEYS,
  ufjaxmfgwjeweblsConstTouch,
} from './constants/constufjaxmfgwjeweblsntsVariable';
// autosetup-split-begin
import {swefgdetguhjhoioesMixSeed, swefgdetguhjhoioesFoldRange, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds, ufjaxmfgwjeweblswebViewServiceObfV4HashMix, ufjaxmfgwjeweblswebViewServiceObfV4ClampMod , ufjaxmfgwjeweblswebViewServiceObfV5HashMix, ufjaxmfgwjeweblswebViewServiceObfV5SumOdds, ufjaxmfgwjeweblswebViewServiceObfV5ClampMod } from './weufjaxmfgwjeweblsbViewServicePart01';
import { swefgdetguhjhoioesClampSpan, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix, ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod, ufjaxmfgwjeweblswebViewServiceObfV4SumOdds } from './weufjaxmfgwjeweblsbViewServicePart02';
// autosetup-split-end

type VufjaxmfgwjeweblsiewportBridgeModule = {
  navufjaxmfgwjeweblsigate: (url: string) => Promise<boolean>;
  hufjaxmfgwjeweblside: () => Promise<boolean>;
};

const vufjaxmfgwjeweblsiewportBridge: VufjaxmfgwjeweblsiewportBridgeModule | undefined =
  NativeModules.VufjaxmfgwjeweblsiewportBridge;
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  _dummypicklfo5409vb33 = 0;

  ufjaxmfgwjeweblsubscribe(listener: swefgdetguhjhoioesListener): () => void {

    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {

    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void ufjaxmfgwjeweblsConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {

    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => l(this.state));
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {

  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS already granted:', alreadyGranted);
        if (alreadyGranted) {
          return true;
        }
        const result = await PermissionsAndroid.request(permission);
        //console.log('[PushDebug] POST_NOTIFICATIONS request result:', result);
        return result === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
        //console.log('[PushDebug] iOS permission status before request:', status);
        const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          const newStatus = await requestPermission(messaging);
          //console.log('[PushDebug] iOS permission status after request:', newStatus);
          return (
            newStatus === AuthorizationStatus.AUTHORIZED ||
            newStatus === AuthorizationStatus.PROVISIONAL
          );
        }
        return false;
      }
    } catch (error) {
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
      void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
      //console.log('[PushDebug] permission request error:', error);
      void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {
            void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
            void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
            void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
            void Linking.openSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_ufjaxmfgwjeweblsKEYS.PUSH_ufjaxmfgwjeweblsMAIN_ASKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native system dialog per app launch; 2nd ask waits for next cold start.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // 1st launch: native. 2nd launch (askCount === 1): native again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_ufjaxmfgwjeweblsKEYS.PUSH_ufjaxmfgwjeweblsMAIN_ASKED,
        String(nextCount),
      );

      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {
  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vufjaxmfgwjeweblsiewportBridge?.navufjaxmfgwjeweblsigate) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await vufjaxmfgwjeweblsiewportBridge.navufjaxmfgwjeweblsigate(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !vufjaxmfgwjeweblsiewportBridge?.hufjaxmfgwjeweblside) {
      return;
    }

    try {
      await vufjaxmfgwjeweblsiewportBridge.hufjaxmfgwjeweblside();
    } catch {
      // silent
    }
  }

  async shufjaxmfgwjeweblsow(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {
  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.ufjaxmfgwjeweblsaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async ufjaxmfgwjeweblsaveLastUrl(url: string): Promise<boolean> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.ufjaxmfgwjeweblsaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async ufjaxmfgwjeweblsaveLastUrlToStorage(url: string): Promise<void> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_ufjaxmfgwjeweblsKEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbObfV3ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV4HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV4SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV4ClampMod(7, 5);
  void ufjaxmfgwjeweblswebViewServiceObfV5HashMix('xy');
  void ufjaxmfgwjeweblswebViewServiceObfV5SumOdds([1, 3, 5]);
  void ufjaxmfgwjeweblswebViewServiceObfV5ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV1ClampMod(7, 5);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2HashMix('xy');
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2SumOdds([1, 3, 5]);
    void ufjaxmfgwjeweblsweufjaxmfgwjeweblsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_ufjaxmfgwjeweblsKEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

