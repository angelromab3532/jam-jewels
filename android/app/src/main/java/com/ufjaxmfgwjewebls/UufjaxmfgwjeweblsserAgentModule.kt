package com.ufjaxmfgwjewebls

import android.webkit.WebSettings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class UufjaxmfgwjeweblsserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UserAufjaxmfgwjeweblsper"
    }

    @ReactMethod
    fun getAndrufjaxmfgwjeweblsoidUserAgent(promise: Promise) {
        try {
            val contextIufjaxmfgwjewebls = reactApplicationContext.applicationContext
            val userAgentIufjaxmfgwjewebls = WebSettings.getDefaultUserAgent(contextIufjaxmfgwjewebls)
            promise.resolve(userAgentIufjaxmfgwjewebls ?: "")
        } catch (eIufjaxmfgwjewebls: Exception) {
            // android.util.Log.e("UserAufjaxmfgwjeweblsperModule", "Error getting UserAgent: ${eIufjaxmfgwjewebls.message}")
            promise.resolve("")
        }
    }
}
