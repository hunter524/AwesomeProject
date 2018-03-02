import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    AsyncStorage
} from 'react-native';

type Props = {};
export default class WidgetTest extends Component<Props> {
    render() {
        return (
            <View style={{height:500,width:500}}>
                <Text style={{position:'absolute',width:250,height:250,fontSize:30,bottom:5,right:5}}> widget test log log!</Text>
            </View>
        );
    }
}

function allFunc():string {
    var size = Dimensions.get('window');
    AsyncStorage.setItem('asynckey','asynValue',(error)=>{

    })
    AsyncStorage.setItem('asyncKeyThen','asyncKeyThen').then((error)=>{

    })
    return "hello from all Func!"
}