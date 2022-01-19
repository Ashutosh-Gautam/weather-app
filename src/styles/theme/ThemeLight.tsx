import {ThemeConstants} from "./ThemeConstants";

export const ThemeLight = {
  primary: ThemeConstants.colors.white,
  secondary: ThemeConstants.colors.secondaryColor,
  success: ThemeConstants.colors.blue,
  error: ThemeConstants.colors.red,
  warning: ThemeConstants.colors.yellow,
  highlighted: ThemeConstants.colors.blue,
  grey: ThemeConstants.colors.grey3,
  textSecondary: ThemeConstants.colors.secondaryTextColor,
  textPrimary: ThemeConstants.colors.primaryTextColor,
  navigationColor: ThemeConstants.colors.navigationColor,
  SafeAreaViewStyle: {
    backgroundColor: ThemeConstants.colors.white,
  },
  RootViewStyle: {
    backgroundColor: ThemeConstants.colors.grey5,
    horizontalPadding: ThemeConstants.dimension.horizontalDefault,
    verticalPadding: ThemeConstants.dimension.verticalDefault
  },
  RootViewStylePlain: {
    backgroundColor: ThemeConstants.colors.white,
    horizontalPadding: ThemeConstants.dimension.horizontalDefault,
    verticalPadding: ThemeConstants.dimension.verticalDefault
  },
  Header: {
    backgroundColor: ThemeConstants.colors.white
  },
  StatusBar: {
    style: "dark-content",
    backgroundColor:ThemeConstants.colors.white,
    translucent:false
  },
  Navigation: {
    primary: {
      backgroundColor: "#d8dfea"
    }
  },
  SearchBar: {
    containerStyle: {
      backgroundColor: ThemeConstants.colors.white
    }
  },
  ListItem: {
    titleStyle: {
      color: ThemeConstants.colors.primaryTextColor,
    },
    subtitleStyle: {
      color: ThemeConstants.colors.grey0,
    }
  },
  Input: {
    containerStyle: {
      paddingHorizontal: 0
    },
    inputContainerStyle: {
      borderBottomWidth: 0.5
    },
    inputStyle: {
      fontSize: ThemeConstants.fontSizes.regular,
      color: ThemeConstants.colors.black,
      errorColor: ThemeConstants.colors.red
    }
  },
  Text: {
    style: {
      fontSize: ThemeConstants.fontSizes.regular,
      color: ThemeConstants.colors.primaryTextColor,
      errorColor: ThemeConstants.colors.red
    },
    Highlighted: {
      primary: ThemeConstants.colors.blue,
      secondary: ThemeConstants.colors.darkBlue,
      tertiary: ThemeConstants.colors.orange,
    },
    primary: ThemeConstants.colors.primaryTextColor,
    secondary: ThemeConstants.colors.secondaryTextColor,
    tertiary: ThemeConstants.colors.grey6
  },
  Button: {
    style: {
      fontSize: ThemeConstants.fontSizes.regular,
      backgroundColor: ThemeConstants.colors.red,
      color: ThemeConstants.colors.white,
      borderRadius: ThemeConstants.dimension.border.small
    },
    Background: {
      primary: ThemeConstants.colors.buttonColor,
      primaryDisabled: ThemeConstants.colors.grey3,
    },
    Text: {
      primary: ThemeConstants.colors.white
    }
  },
  Divider: {
    primary: ThemeConstants.colors.navigationColor
  },
  Card: {
    style: {
      padding: 12,
      margin: 12,
      borderRadius: 8
    }
  },
  Loader: {
    FullScreen: {
      color: ThemeConstants.colors.grey2
    }
  }
}
