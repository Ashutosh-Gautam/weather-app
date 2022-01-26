package com.weather.data.repositories

import com.weather.data.model.WeatherDataResponse
import com.weather.data.source.local.WeatherDatabase
import com.weather.data.source.remote.ApiInterface
import com.weather.data.source.remote.ApiRequest
import javax.inject.Inject

class WeatherRepository @Inject constructor(
        private val api: ApiInterface
) : ApiRequest() {

    suspend fun findCityWeather(): WeatherDataResponse {
        return apiRequest { api.findCityWeatherData() }
    }
}