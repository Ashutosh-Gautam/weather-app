package com.weather.data.source.remote

import com.weather.data.model.WeatherDataResponse
import retrofit2.Response

abstract class ApiRequest {
    suspend fun <T : Any> apiRequest(call: suspend () -> Response<T>): MutableList<WeatherDataResponse> {
        // val response = call.invoke()
        val weather = mutableListOf(WeatherDataResponse.Weather("37°", "24°",
                "Rainy", "SUN", "17"),
                WeatherDataResponse.Weather("37°", "24°",
                        "Rainy", "MON", "18"),
                WeatherDataResponse.Weather("37°", "24°",
                        "Rainy", "TUE", "19"),
                WeatherDataResponse.Weather("37°", "24°",
                        "Rainy", "WED", "20"),
                WeatherDataResponse.Weather("37°", "24°",
                        "Rainy", "THU", "21"))

        return mutableListOf(WeatherDataResponse("37°", "24°", "New York",
                "Rainy", "60%", "10 mph", "100%", weather),
                WeatherDataResponse("38°", "26°", "Budapest",
                        "Snow", "10%", "1 mph", "10%", weather),
                WeatherDataResponse("32°", "22°", "Miami",
                        "Rainy", "60%", "6 mph", "100%", weather),
                WeatherDataResponse("26°", "18°", "Hungry",
                        "Sunny", "6%", "6 mph", "5%", weather));
    }
}