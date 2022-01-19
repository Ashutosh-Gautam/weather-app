import * as React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {ThemeConstants} from "../styles/theme/ThemeConstants";
import Icon from 'react-native-vector-icons/MaterialIcons';

export function AppTitleBar(props) {
    return (<View style={{
        flexDirection: 'row', justifyContent: 'space-between', height: 52,
        padding: ThemeConstants.dimension.horizontalDefault, alignItems: 'center'
    }}>
        <TouchableOpacity onPress={() => {props.Opendrawer()}}>
            <Icon size={24} name={'menu'} color={props.color}/>
        </TouchableOpacity>
        <Text style={{fontWeight: '600', color: props.color}}>{'Weather'}</Text>
        <Icon size={24} name={'search'} color={props.color}/>
    </View>)
}
