import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

type Props = {};
export default class HelloWorld extends Component<Props> {
    render() {
        return (
            <Text style={{height:400,fontSize:30}}> widget test log log!</Text>
        );
    }


}