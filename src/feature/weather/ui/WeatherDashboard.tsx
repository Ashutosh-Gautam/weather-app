import * as React from 'react';
import {useEffect, useState} from 'react';
import {Image, Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {baseStyles} from "../../../styles/baseStyle";
import {ThemeConstants} from "../../../styles/theme/ThemeConstants";
import SlideInFlatList from "../../../component/SlideInFlatList";
import {AppTitleBar} from "../../../component/AppTitleBar";
import {styles} from "./Weather.Style";

export function WeatherDashboard(props) {

    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        setWeatherData(props.weatherList)
    }, [])

    function getSource(state) {
        switch (state) {
            case 'Sunny':
                return require('../../../assets/weather/sun.png');
            case 'Snow':
                return require('../../../assets/weather/snow.png');
            case 'Rainy':
                return require('../../../assets/weather/rain.png');
        }
        return require('../../../assets/weather/snow.png');
    }

    const floatingTempScale = () => {
        return <View style={[baseStyles.tempScale]}>
            <Text style={{
                fontWeight: '800',
                marginHorizontal: ThemeConstants.dimension.horizontalExtraSmall
            }}>{'°F'}</Text>
            <Text style={{marginHorizontal: ThemeConstants.dimension.horizontalExtraSmall}}>{'°C'}</Text>
        </View>
    }

    const renderItem = (item, index) =>
        <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
                props.hideAlert(index)
            }}>
            <Text
                style={{fontSize: 50, color: ThemeConstants.colors.black, fontWeight: '200'}}>{item.temperatureF}</Text>
            <View style={styles.drawerCountryDetail}>
                <Text style={styles.titleBold}>{item.country}</Text>
                <Text>{item.state}</Text>
            </View>
            <View style={{alignSelf: 'center', alignItems: 'flex-end', flex: 1}}>
                <View style={baseStyles.shadow}>
                    <Image style={{height: 24, width: 24}}
                           source={getSource(item.state)}
                    />
                </View>
            </View>

        </TouchableOpacity>

    const weatherList = () => <SlideInFlatList
        initialDelay={0}
        durationPerItem={400}
        parallelItems={1}
        itemsToFadeIn={10}
        data={weatherData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
            renderItem(item, index)
        )}
    />

    return (
        <Modal animationType={"slide"} visible={props.alertVisibility} onRequestClose={() => {
        }}>
            <View style={baseStyles.rootViewStyle}>
                <SafeAreaView style={[baseStyles.safeAreaViewStyle]}>
                    <AppTitleBar color={'black'} Opendrawer={() => {
                    }}/>
                    {weatherList()}
                    {floatingTempScale()}
                </SafeAreaView>
            </View>
        </Modal>
    )

}
