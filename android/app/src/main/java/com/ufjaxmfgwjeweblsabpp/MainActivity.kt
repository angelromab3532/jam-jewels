package com.ufjaxmfgwjeweblsabpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.ufjaxmfgwjewebls.VufjaxmfgwjeweblsiewportBridge
import com.ufjaxmfgwjewebls.SufjaxmfgwjeweblsharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "ufjaxmfgwjeweblsabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cacheufjaxmfgwjeweblsPendingSendId(intent)
    cacheufjaxmfgwjeweblsPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cacheufjaxmfgwjeweblsPendingSendId(intent)
    cacheufjaxmfgwjeweblsPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (VufjaxmfgwjeweblsiewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    VufjaxmfgwjeweblsiewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cacheufjaxmfgwjeweblsPendingSendId(intent: Intent?) {
    val sendIufjaxmfgwjeweblsd = intent?.getStringExtra("sendid")
    if (!sendIufjaxmfgwjeweblsd.isNullOrEmpty()) {
      SufjaxmfgwjeweblsharedPreferencesHelper.saveString("pendingSendId", sendIufjaxmfgwjeweblsd)
    }
  }

  private fun cacheufjaxmfgwjeweblsPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      SufjaxmfgwjeweblsharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
