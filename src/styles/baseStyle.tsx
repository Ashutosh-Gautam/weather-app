import {StatusBarStyle, StyleSheet} from "react-native";
import {ApplicationTheme} from "./theme/ApplicationTheme";
import {ThemeConstants} from "./theme/ThemeConstants";

export const baseStyles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
        backgroundColor: ApplicationTheme.SafeAreaViewStyle.backgroundColor
    },
    safeAreaNavigationViewStyle: {
        flex: 1,
        backgroundColor: ThemeConstants.colors.navigationColor
    },
    rootViewStyle: {
        flex: 1,
        backgroundColor: ApplicationTheme.RootViewStyle.backgroundColor
    },
    shadow: {
        backgroundColor: ThemeConstants.colors.white,
        shadowColor: ThemeConstants.colors.grey2,
        height: 40,
        width: 40,
        borderRadius: ThemeConstants.dimension.border.extraMedium,
        shadowRadius: ThemeConstants.dimension.border.normal,
        shadowOpacity: 0.5,
        elevation: 5,
        shadowOffset: {width: 4, height: 4},
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempScale: {
        backgroundColor: ThemeConstants.colors.white,
        shadowColor: ThemeConstants.colors.grey2,
        height: 40,
        width: 100,
        borderRadius: ThemeConstants.dimension.border.extraMedium,
        shadowRadius: ThemeConstants.dimension.border.normal,
        shadowOpacity: 0.5,
        elevation: 5,
        shadowOffset: {width: 4, height: 4},
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom:60,
        left: (ThemeConstants.dimension.window.width/2) - 50,
        flexDirection: 'row',
        paddingHorizontal: ThemeConstants.dimension.horizontalDefault
    }
});

export const baseStatusBarStyle = ApplicationTheme.StatusBar.style as StatusBarStyle;
