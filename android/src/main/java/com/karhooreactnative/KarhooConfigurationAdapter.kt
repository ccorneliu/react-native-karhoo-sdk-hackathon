package com.karhooreactnative

import android.content.Context
import android.util.Log
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReadableMap
import com.karhoo.sdk.api.KarhooApi
import com.karhoo.sdk.api.KarhooApi.userService
import com.karhoo.sdk.api.KarhooEnvironment
import com.karhoo.sdk.api.network.request.UserLogin
import com.karhoo.sdk.api.network.response.Resource

class KarhooConfigurationAdapter(private val context: Context) : DataProcessor<ReadableMap> {
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

    override fun login(username: String, password: String, errorCallback: Callback, successCallback: Callback) {
        val user = UserLogin(username, password)
        userService.loginUser(user).execute {
            when (it) {
                is Resource.Success -> {
                    Log.d("NSDK", "Login success")
                    successCallback.invoke("Yay! Login succeeded")
                }
                is Resource.Failure -> {
                    errorCallback.invoke("Sorry, failed to login")
                }
            }
        }
    }
}