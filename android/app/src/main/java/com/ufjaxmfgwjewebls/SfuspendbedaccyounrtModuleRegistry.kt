package com.ufjaxmfgwjewebls

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

/**
 * Single host package for all app native modules.
 * Module getName() values must match JS NativeModules lookups.
 */
class SfuspendbedaccyounrtModuleRegistry : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(
            AufjaxmfgwjeweblsdvertisingIdHelper(reactContext),
            UufjaxmfgwjeweblsserAgentModule(reactContext),
            AufjaxmfgwjeweblsppInfoModule(reactContext),
            VufjaxmfgwjeweblsiewportReactModule(reactContext),
        )
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }
}
