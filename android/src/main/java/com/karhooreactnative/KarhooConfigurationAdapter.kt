package com.karhooreactnative

import android.content.Context
import com.facebook.react.bridge.ReadableMap
import com.karhoo.sdk.api.KarhooApi
import com.karhoo.sdk.api.KarhooEnvironment

class KarhooConfigurationAdapter(
        private val context: Context
): DataProcessor<ReadableMap> {

    override fun process(data: ReadableMap) {
        val rawEnvironment = data.getString("environment") ?: return
        val karhooEnvironment = when (rawEnvironment) {
            "sandbox" -> KarhooEnvironment.Sandbox()
            "production" -> KarhooEnvironment.Production()
            else -> KarhooEnvironment.Sandbox()
        }
        val configuration = KarhooConfig(context, karhooEnvironment)
        KarhooApi.setConfiguration(configuration)
    }
}