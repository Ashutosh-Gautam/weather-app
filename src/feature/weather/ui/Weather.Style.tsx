import {ThemeConstants} from "../../../styles/theme/ThemeConstants";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeConstants.colors.white,
    },
    PagerView: {
        flex: 1,
        marginTop: (ThemeConstants.dimension.window.height / 6)
    },
    dayWiseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: ThemeConstants.dimension.horizontalLarge,
        marginBottom: ThemeConstants.dimension.verticalExtraLarge
    },
    previewContainer: {
        marginTop: 70,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: ThemeConstants.dimension.horizontalMedium
    },
    predictionContainer: {
        alignItems: 'center', flexDirection: 'row', width: '100%', justifyContent: 'space-between',
        marginBottom: ThemeConstants.dimension.verticalLarge
    },
    circularImageShadow: {
        shadowRadius: ThemeConstants.dimension.border.normal,
        shadowOpacity: 0.5,
        elevation: 5,
        shadowColor: ThemeConstants.colors.grey2,
        shadowOffset: {width: 4, height: 4},
        marginTop: (ThemeConstants.dimension.window.height / 6) + 15,
        position: 'absolute',
        left: (ThemeConstants.dimension.window.width / 2) - 35
    },
    title: {fontSize: 20, fontWeight: '400', color: ThemeConstants.colors.black},
    titleBold: {fontSize: 20, fontWeight: '600', color: ThemeConstants.colors.black},
    circularImage: {height: 80, width: 80, borderRadius: ThemeConstants.dimension.border.extraLarge},
    drawerCountryDetail: {
        flexDirection: 'column',
        marginHorizontal: ThemeConstants.dimension.padding,
        marginTop: ThemeConstants.dimension.verticalSmall
    },
    drawerItem: {flexDirection: 'row', flex: 1, margin: ThemeConstants.dimension.horizontalMedium, alignItems: 'center'}
});
