package com.weather.dependencyinjection.module

import com.weather.data.repositories.WeatherRepository
import com.weather.data.source.remote.ApiInterface
import com.weather.ui.viewmodelfactory.WeatherViewModelFactory
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
class AppModule {
    @Provides
    @Singleton
    fun provideWeatherRepository(apiInterface: ApiInterface): WeatherRepository {
        return WeatherRepository(apiInterface)
    }

    @Provides
    @Singleton
    fun provideWeatherViewModelFactory(repository: WeatherRepository): WeatherViewModelFactory {
        return WeatherViewModelFactory(repository)
    }
}