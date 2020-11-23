package com.karhooreactnative

interface DataProcessor<DataType> {
    fun process(data: DataType)
}