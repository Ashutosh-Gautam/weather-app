package com.weather.data.model

import androidx.annotation.Keep
import com.google.gson.annotations.SerializedName

@Keep
data class WeatherDataResponse(
    @SerializedName("temperatureF")
    val temperatureF: String,
    @SerializedName("temperatureC")
    val temperatureC: String,
    @SerializedName("country")
    val country: String,
    @SerializedName("state")
    val state: String,
    @SerializedName("precipitation")
    val precipitation: String,
    @SerializedName("wind")
    val wind: String,
    @SerializedName("rainPred")
    val rainPred: String,
    @SerializedName("weeklyData")
    val weather: List<Weather>
    ) {
        @Keep
        data class Weather(
                @SerializedName("temperatureF")
                val temperatureF: String,
                @SerializedName("temperatureC")
                val temperatureC: String,
                @SerializedName("state")
                val state: String,
                @SerializedName("day")
                val day: String,
                @SerializedName("date")
                val date: String
        )
}