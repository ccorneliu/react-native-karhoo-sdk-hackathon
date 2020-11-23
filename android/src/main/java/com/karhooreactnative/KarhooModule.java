
package com.karhooreactnative;

import com.facebook.react.bridge.ReactApplicationContext;;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

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
    configurationProcessor.process(map);
  }

  @Nullable
  @Override
  public Map<String, Object> getConstants() {
    return Collections.emptyMap();
  }
}