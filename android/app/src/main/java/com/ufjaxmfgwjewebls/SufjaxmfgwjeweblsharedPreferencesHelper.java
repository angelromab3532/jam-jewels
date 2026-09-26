package com.ufjaxmfgwjewebls;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class SufjaxmfgwjeweblsharedPreferencesHelper {
    private static final String PREF_NAMEIufjaxmfgwjewebls = "ufjaxmfgwjeweblsStorage";
    private static Context applicufjaxmfgwjeweblsationContext = null;

    public static void setApplicationContext(Context context) {
        applicufjaxmfgwjeweblsationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (applicufjaxmfgwjeweblsationContext != null) {
                return applicufjaxmfgwjeweblsationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIufjaxmfgwjewebls = getContext();
        if (contextIufjaxmfgwjewebls != null) {
            try {
                SharedPreferences prefsIufjaxmfgwjewebls = contextIufjaxmfgwjewebls.getSharedPreferences(PREF_NAMEIufjaxmfgwjewebls, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIufjaxmfgwjewebls = prefsIufjaxmfgwjewebls.edit();
                editorIufjaxmfgwjewebls.putString(key, value);
                editorIufjaxmfgwjewebls.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIufjaxmfgwjewebls = getContext();
        if (contextIufjaxmfgwjewebls != null) {
            try {
                SharedPreferences prefsIufjaxmfgwjewebls = contextIufjaxmfgwjewebls.getSharedPreferences(PREF_NAMEIufjaxmfgwjewebls, Context.MODE_PRIVATE);
                String valueIufjaxmfgwjewebls = prefsIufjaxmfgwjewebls.getString(key, defaultValue);
                return valueIufjaxmfgwjewebls;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIufjaxmfgwjewebls = getContext();
        if (contextIufjaxmfgwjewebls != null) {
            try {
                SharedPreferences prefsIufjaxmfgwjewebls = contextIufjaxmfgwjewebls.getSharedPreferences(PREF_NAMEIufjaxmfgwjewebls, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIufjaxmfgwjewebls = prefsIufjaxmfgwjewebls.edit();
                editorIufjaxmfgwjewebls.putInt(key, value);
                editorIufjaxmfgwjewebls.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIufjaxmfgwjewebls = getContext();
        if (contextIufjaxmfgwjewebls != null) {
            try {
                SharedPreferences prefsIufjaxmfgwjewebls = contextIufjaxmfgwjewebls.getSharedPreferences(PREF_NAMEIufjaxmfgwjewebls, Context.MODE_PRIVATE);
                int valueIufjaxmfgwjewebls = prefsIufjaxmfgwjewebls.getInt(key, defaultValue);
                return valueIufjaxmfgwjewebls;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIufjaxmfgwjewebls = getContext();
        if (contextIufjaxmfgwjewebls != null) {
            try {
                SharedPreferences prefsIufjaxmfgwjewebls = contextIufjaxmfgwjewebls.getSharedPreferences(PREF_NAMEIufjaxmfgwjewebls, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIufjaxmfgwjewebls = prefsIufjaxmfgwjewebls.edit();
                editorIufjaxmfgwjewebls.putBoolean(key, value);
                editorIufjaxmfgwjewebls.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIufjaxmfgwjewebls = getContext();
        if (contextIufjaxmfgwjewebls != null) {
            try {
                SharedPreferences prefsIufjaxmfgwjewebls = contextIufjaxmfgwjewebls.getSharedPreferences(PREF_NAMEIufjaxmfgwjewebls, Context.MODE_PRIVATE);
                boolean valueIufjaxmfgwjewebls = prefsIufjaxmfgwjewebls.getBoolean(key, defaultValue);
                return valueIufjaxmfgwjewebls;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIufjaxmfgwjewebls = getContext();
        if (contextIufjaxmfgwjewebls != null) {
            try {
                SharedPreferences prefsIufjaxmfgwjewebls = contextIufjaxmfgwjewebls.getSharedPreferences(PREF_NAMEIufjaxmfgwjewebls, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIufjaxmfgwjewebls = prefsIufjaxmfgwjewebls.edit();
                editorIufjaxmfgwjewebls.remove(key);
                editorIufjaxmfgwjewebls.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIufjaxmfgwjewebls = getContext();
        if (contextIufjaxmfgwjewebls != null) {
            try {
                SharedPreferences prefsIufjaxmfgwjewebls = contextIufjaxmfgwjewebls.getSharedPreferences(PREF_NAMEIufjaxmfgwjewebls, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIufjaxmfgwjewebls = prefsIufjaxmfgwjewebls.edit();
                editorIufjaxmfgwjewebls.clear();
                editorIufjaxmfgwjewebls.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}
