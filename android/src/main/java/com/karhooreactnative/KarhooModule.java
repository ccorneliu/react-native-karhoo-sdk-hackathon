
package com.karhooreactnative;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.karhoo.sdk.api.KarhooApi;
import com.karhoo.sdk.api.network.request.UserLogin;

import java.util.Collections;
import java.util.Map;

import javax.annotation.Nullable;

public class KarhooModule extends ReactContextBaseJavaModule {

    private final DataProcessor<ReadableMap> configurationProcessor;

    public KarhooModule(ReactApplicationContext reactContext,
                        DataProcessor<ReadableMap> configurationProcessor) {
        super(reactContext);
        this.configurationProcessor = configurationProcessor;
    }

    @Override
    public String getName() {
        return "NativeKarhooBridge";
    }

    @ReactMethod
    public void setConfiguration(ReadableMap map) {
        Log.d("NSDK", "setConfiguration");
        configurationProcessor.process(map);
    }

    @ReactMethod
    public void login(String username, String password, Callback errorCallback, Callback successCallback) {
        Log.d("NSDK", "Login success");
        configurationProcessor.login(username, password, errorCallback, successCallback);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return Collections.emptyMap();
    }
}