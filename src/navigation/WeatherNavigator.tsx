import {createStackNavigator} from "react-navigation-stack";
import {WeatherDashboard} from "../feature/weather/ui/WeatherDashboard";
import {WeatherDetailPage} from "../feature/weather/ui/WeatherDetailPage";

export const WeatherStack = createStackNavigator({
        WeatherDashboard: WeatherDashboard,
        WeatherDetailPage: WeatherDetailPage
    },
    {
        initialRouteName: 'WeatherDetailPage',
        initialRouteParams: {
            title: 'WeatherDetailPage',
        },
        navigationOptions: {
            headerShown: false,
        },
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
)
