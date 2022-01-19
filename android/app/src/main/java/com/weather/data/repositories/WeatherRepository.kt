package com.weather.data.repositories

import com.weather.data.model.WeatherDataResponse
import com.weather.data.source.local.WeatherDatabase
import com.weather.data.source.remote.ApiInterface
import com.weather.data.source.remote.ApiRequest

class WeatherRepository(
        private val api: ApiInterface
) : ApiRequest() {

    suspend fun findCityWeather(): MutableList<WeatherDataResponse> = apiRequest {
        api.findCityWeatherData()
    }
}