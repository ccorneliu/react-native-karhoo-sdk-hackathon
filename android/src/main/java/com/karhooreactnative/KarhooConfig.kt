package com.karhooreactnative

import android.content.Context
import com.karhoo.sdk.analytics.AnalyticProvider
import com.karhoo.sdk.api.KarhooEnvironment
import com.karhoo.sdk.api.KarhooSDKConfiguration
import com.karhoo.sdk.api.model.AuthenticationMethod

class KarhooConfig(
        private val context: Context,
        private val karhooEnvironment: KarhooEnvironment,
        private val authMethod: AuthenticationMethod = AuthenticationMethod.KarhooUser()) : KarhooSDKConfiguration {
    override fun context(): Context {
        return context
    }
    override fun environment(): KarhooEnvironment {
        return karhooEnvironment
    }
    override fun analyticsProvider(): AnalyticProvider? {
        return null
    }
    override fun authenticationMethod(): AuthenticationMethod {
        return authMethod
    }
}