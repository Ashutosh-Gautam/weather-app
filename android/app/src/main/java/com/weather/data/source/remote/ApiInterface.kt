package com.weather.data.source.remote

import com.weather.BuildConfig
import com.weather.data.model.WeatherDataResponse
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import retrofit2.http.Query
import java.util.concurrent.TimeUnit

interface ApiInterface {

    @GET("weather")
    suspend fun findCityWeatherData(
            @Query("q") q: String = "california",
            @Query("units") units: String = "metric",
            @Query("appid") appid: String = BuildConfig.weather_api_key
    ): Response<WeatherDataResponse>
}