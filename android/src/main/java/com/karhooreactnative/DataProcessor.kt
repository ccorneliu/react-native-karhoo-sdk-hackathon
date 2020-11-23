package com.karhooreactnative

interface DataProcessor<DataType> {
    fun process(data: DataType)
    fun login(username: String, password: String, errorCallback: Callback, successCallback: Callbac)
}