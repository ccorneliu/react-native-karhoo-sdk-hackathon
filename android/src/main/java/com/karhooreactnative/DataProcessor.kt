package com.karhooreactnative

import com.facebook.react.bridge.Callback

interface DataProcessor<DataType> {
    fun process(data: DataType)
    fun login(username: String, password: String, errorCallback: Callback, successCallback: Callback)
}