package com.weather.reactBridge

import android.app.Activity
import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.weather.data.model.WeatherDataResponse
import com.weather.data.repositories.WeatherRepository
import com.weather.data.source.remote.ApiInterface
import com.weather.data.source.remote.ApiRequest
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import retrofit2.Response
import kotlin.math.log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.DeviceEventManagerModule

import com.facebook.react.bridge.WritableMap
import com.google.gson.Gson

class ReactModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext){

    private val weatherRepo = WeatherRepository(object: ApiInterface{
        override suspend fun findCityWeatherData(): Response<WeatherDataResponse> {
            TODO("Not Required Since we are returning the mock data")
        }
    })


    override fun initialize() {
        super.initialize()
    }

    override fun getName(): String {
        return "ReactBridgeManager"
    }

    private fun sendEvent(eventName: String, params: WritableMap) {
        reactApplicationContext
                .getJSModule(RCTDeviceEventEmitter::class.java)
                .emit(eventName, params)
    }

    @DelicateCoroutinesApi
    @ReactMethod
    fun getWeather() {
        GlobalScope.launch(Dispatchers.IO) {
            val response = weatherRepo.findCityWeather()
            val writableMap = Arguments.createMap()
            writableMap.putString("weatherResponse", Gson().toJson(response))
            sendEvent("WeatherResponse", writableMap)
            Log.d("aaya", "response")
        }
    }

}