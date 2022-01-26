package com.weather.ui.viewmodelfactory

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.weather.data.repositories.WeatherRepository
import com.weather.ui.viewmodels.WeatherViewModel

class WeatherViewModelFactory(private val weatherRepository: WeatherRepository): ViewModelProvider.NewInstanceFactory() {

    override fun <T : ViewModel?> create(modeClass: Class<T>): T {
        return WeatherViewModel(weatherRepository) as T
    }
}