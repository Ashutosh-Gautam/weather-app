package com.weather.ui.viewmodels

import androidx.lifecycle.*
import com.weather.data.model.WeatherDataResponse
import com.weather.data.model.WeatherDetail
import com.weather.data.repositories.WeatherRepository
import com.weather.data.source.remote.exceptions.ApiException
import com.weather.data.source.remote.exceptions.NoInternetException
import com.weather.util.State
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import javax.inject.Inject

@HiltViewModel
class WeatherViewModel @Inject constructor(private val repository: WeatherRepository): ViewModel() {

    private val _weatherLiveData = MutableLiveData<State<WeatherDetail>>()
    val weatherLiveData: LiveData<State<WeatherDetail>>
        get() = _weatherLiveData

    private lateinit var weatherResponse: WeatherDataResponse

    fun findCityWeather() {
        _weatherLiveData.postValue(State.loading())
        viewModelScope.launch(Dispatchers.IO) {
            try {
                weatherResponse = repository.findCityWeather()
                withContext(Dispatchers.Main) {
                    val weatherDetail = WeatherDetail()
                    weatherDetail.icon = weatherResponse.weather.first().icon
                    weatherDetail.cityName = weatherResponse.name
                    weatherDetail.countryName = weatherResponse.sys.country
                    weatherDetail.temp = weatherResponse.main.temp
                    _weatherLiveData.postValue(
                            State.success(
                                    weatherDetail
                            )
                    )
                }
            } catch (e: ApiException) {
                withContext(Dispatchers.Main) {
                    _weatherLiveData.postValue(State.error(e.message ?: ""))
                }
            } catch (e: NoInternetException) {
                withContext(Dispatchers.Main) {
                    _weatherLiveData.postValue(State.error(e.message ?: ""))
                }
            } catch (e: Exception) {
                withContext(Dispatchers.Main) {
                    _weatherLiveData.postValue(
                            State.error(
                                    e.message ?: ""
                            )
                    )
                }
            }
        }
    }
}