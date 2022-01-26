package com.weather.ui

import android.app.Application
import dagger.hilt.android.HiltAndroidApp

@HiltAndroidApp
open class AndroidApplication : Application() {

    override fun onCreate() {
        super.onCreate()
    }
}