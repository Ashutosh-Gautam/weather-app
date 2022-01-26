import * as React from 'react';
import {createContext, createRef, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
    Animated,
    FlatList,
    Image,
    ImageBackground,
    NativeEventEmitter,
    NativeModules,
    SafeAreaView,
    Text,
    View,
    Platform
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {ThemeConstants} from "../../../styles/theme/ThemeConstants";
import {AppTitleBar} from "../../../component/AppTitleBar";
import Icon from 'react-native-vector-icons/Ionicons';
import {WeatherDashboard} from "./WeatherDashboard";
import {styles} from "./Weather.Style";
import {getWeatherDataForIos} from "../../../utilities/Utility";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export const AppContext = createContext(null)

export function WeatherDetailPage(props) {

    let NO_OF_CHARS = 256;
    const ref = React.useRef<PagerView>(null);
    let eventSub
    const eventEmitter = useRef(Platform.OS === 'android' ? new NativeEventEmitter() : null)
    const [sourceCountryImage, setSourceCountryImage] = useState(require('../../../assets/city/budapest.png'))
    const [drawer, showDrawer] = useState(false)
    const [initialIndex, setInitialIndex] = useState(0)

    useEffect(() => {
        if (Platform.OS === 'android'){
            NativeModules.ReactBridgeManager.getWeather();
            eventSub = eventEmitter.current.addListener('WeatherResponse', callback, callback)
            return () => eventSub?.remove()
        } else {
            let weatherList = getWeatherDataForIos();
           // setWeatherData(weatherList)
        }

    }, [])

    const weatherData = useMemo(() => getWeatherDataForIos(), [])
    const callback = useCallback((event) => {
        let weather = JSON.parse(event.weatherResponse)
       // setWeatherData(weather)
    }, [])

    function areAnagram(str1, str2)
    {

        // Create a count array and initialize
        // all values as 0
        let count = new Array(NO_OF_CHARS);
        for(let i = 0; i < NO_OF_CHARS; i++)
        {
            count[i] = 0;
        }
        let i;

        // For each character in input strings,
        // increment count in the corresponding
        // count array
        for(i = 0; i < str1.length; i++)
        {
            console.log(str1[i].charCodeAt(0))
            console.log(str2[i].charCodeAt(0))
            console.log('a'.charCodeAt(0))
            count[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            count[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            console.log(JSON.stringify(count))
        }

        // If both strings are of different
        // length. Removing this condition
        // will make the program fail for
        // strings like "aaca" and "aca"
        if (str1.length != str2.length)
            return false;

        // See if there is any non-zero
        // value in count array
        for(i = 0; i < NO_OF_CHARS; i++)
            if (count[i] != 0)
            {
                return false;
            }
        return true;
    }


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

    function getCountryImage(state) {
        switch (state) {
            case 'Hungry':
                return require('../../../assets/city/budapest.png');
            case 'Miami':
                return require('../../../assets/city/new_york.jpeg');
            case 'Budapest':
                return require('../../../assets/city/budapest.png');
            case 'New York':
                return require('../../../assets/city/new_york.jpeg');
        }
        return require('../../../assets/city/new_york.jpeg');
    }

    const getWeatherPredView = (data, icon) => {
        return <View style={{alignItems: 'center', width: '33%'}}>
            <Icon name={icon} size={24}/>
            <Text style={[styles.title, {paddingVertical: ThemeConstants.dimension.verticalSmall}]}>{data}</Text>
        </View>
    }

    const renderItem = (item, index) => {
        return <View style={styles.dayWiseContainer}>
            <Image style={{height: 32, width: 32}}
                   source={getSource(item.state)}
            />
            <View>
                <Text style={{fontWeight: '800'}}>{item.day}</Text>
                <Text>{item.date}</Text>
            </View>
            <View>
                <Text>{item.temperatureF}</Text>
                <Text>{item.temperatureC}</Text>
            </View>
        </View>
    }

    return (
        <AppContext.Provider value={{weatherData}}>
        <SafeAreaView style={styles.container}>
            {<ImageBackground
                key={initialIndex}
                imageStyle={{opacity: 0.5}}
                source={sourceCountryImage}
                style={{width: '100%', height: '100%'}}>
                <AppTitleBar color={'white'} Opendrawer={() => {
                    showDrawer(true)
                }}/>
                <AnimatedPagerView
                    ref={ref}
                    onPageSelected={(data) => {
                        console.log(data.nativeEvent.position)
                        setSourceCountryImage(getCountryImage(weatherData[data.nativeEvent.position].country))
                    }}
                    style={styles.PagerView}
                    initialPage={initialIndex}
                    layoutDirection="ltr"
                    pageMargin={0}
                    orientation="vertical"
                    setScrollEnabled={true}
                    transitionStyle="scroll">
                    {weatherData.map(((value, index) =>
                        <View key={index} style={{backgroundColor: ThemeConstants.colors.white}}>
                            <View style={styles.previewContainer}>
                                <Text style={{fontSize: ThemeConstants.fontSizes.extraLarge}}>{value.country}</Text>
                                <AnimatedPagerView
                                    key={index}
                                    style={{flex: 1, width: ThemeConstants.dimension.window.width, marginTop: 70}}
                                    initialPage={0}
                                    orientation="horizontal"
                                    transitionStyle="scroll">
                                    <View style={{flex: 1, justifyContent: 'space-between',}}>
                                        <View style={{alignItems: 'center'}}>
                                            <Image style={{height: 40, width: 40}}
                                                   source={getSource(value.state)}
                                            />
                                            <Text style={{
                                                fontSize: 50,
                                                fontWeight: '200',
                                                paddingVertical: ThemeConstants.dimension.verticalLarge
                                            }}>{value.temperatureF}</Text>
                                            <Text style={styles.title}>{value.state}</Text>
                                            <View style={{
                                                flexDirection: 'row',
                                                paddingVertical: ThemeConstants.dimension.verticalSmall
                                            }}>
                                                <Text
                                                    style={[styles.titleBold, {marginHorizontal: ThemeConstants.dimension.horizontalExtraSmall}]}>{value.temperatureF}</Text>
                                                <Text style={styles.title}>{value.temperatureC}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.predictionContainer}>
                                            {getWeatherPredView(value.precipitation, 'umbrella-outline')}
                                            {getWeatherPredView(value.rainPred, 'water-outline')}
                                            {getWeatherPredView(value.wind, 'radio-outline')}
                                        </View>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                                        <FlatList key={index}
                                                  data={value.weeklyData}
                                                  keyExtractor={(item, index) => index.toString()}
                                                  renderItem={({item, index}) => (
                                                      renderItem(item, index)
                                                  )}
                                        />
                                    </View>
                                </AnimatedPagerView>
                            </View>
                        </View>))}
                </AnimatedPagerView>
                <View style={styles.circularImageShadow}>
                    <Image style={styles.circularImage}
                           source={sourceCountryImage}/>
                </View>
            </ImageBackground>}
            {drawer && <WeatherDashboard navigation={props.navigation}
                                         alertVisibility={drawer}
                                         weatherList={[]}
                                         hideAlert={(index) => {
                                             setInitialIndex(index)
                                             showDrawer(false)
                                         }}/>}
        </SafeAreaView>
        </AppContext.Provider>
    );
}
