package com.weather.ui

import android.app.Activity
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.weather.R
import com.weather.data.model.WeatherDetail
import com.weather.data.repositories.WeatherRepository
import com.weather.databinding.ActivityWeatherBinding
import com.weather.ui.viewmodelfactory.WeatherViewModelFactory
import com.weather.ui.viewmodels.WeatherViewModel
import com.weather.util.State
import dagger.hilt.android.AndroidEntryPoint
import javax.inject.Inject

@AndroidEntryPoint
class AndroidActivity: AppCompatActivity(){

    private lateinit var dataBinding : ActivityWeatherBinding
    @Inject lateinit var factory: WeatherViewModelFactory
    private lateinit var viewModel: WeatherViewModel
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        dataBinding = DataBindingUtil.setContentView(this, R.layout.activity_weather)
        viewModel = ViewModelProvider(this, factory).get(WeatherViewModel::class.java)
        observeApiCall()
    }

    private fun observeApiCall() {
        viewModel.findCityWeather()
        viewModel.weatherLiveData.observe(this, { state ->
            when(state){
                is State.Loading -> {
                    println("loading ho gawa")
                }
                is State.Success -> {
                    println("pass ho gawa")
                    state.data.let { weatherDetail ->
                        dataBinding.textLabelSearchForCity.text= weatherDetail.cityName
                    }
                }
            }
        })
    }

    companion object {

    }
}