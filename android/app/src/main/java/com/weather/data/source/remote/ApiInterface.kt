package com.weather.data.source.remote

import com.weather.data.model.WeatherDataResponse
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import java.util.concurrent.TimeUnit

interface ApiInterface {

    @GET("weather")
    suspend fun findCityWeatherData(): Response<WeatherDataResponse>

    // </editor-fold>

    companion object {
        operator fun invoke(
                networkConnectionInterceptor: NetworkConnectionInterceptor
        ): ApiInterface {

            val WS_SERVER_URL = "https://"
            val okkHttpclient = OkHttpClient.Builder()
                    .addInterceptor(networkConnectionInterceptor)
                    .addInterceptor(HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY))
                    .connectTimeout(1, TimeUnit.MINUTES)
                    .readTimeout(60, TimeUnit.SECONDS)
                    .writeTimeout(60, TimeUnit.SECONDS)
                    .build()

            return Retrofit.Builder()
                    .client(okkHttpclient)
                    .baseUrl(WS_SERVER_URL)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build()
                    .create(ApiInterface::class.java)
        }
    }
}