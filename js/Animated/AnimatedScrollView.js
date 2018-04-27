import React from 'react'
import {Animated,Easing, View, Dimensions,StyleSheet} from 'react-native'

export default class AnimatedScrollView extends React.Component {
    constructor(props) {
        super(props);
        let {height} = Dimensions.get('window');
        this.state = {
            translateY: new Animated.Value(height),
            alpha:new Animated.Value(0),
        }

    }

    componentDidMount() {
        console.log(`translateY:${this.state.translateY._value}`);
        var translate = Animated.timing(this.state.translateY,
            {
                toValue: 0,
                duration: 200,
                useNativeDriver:true,
            });
        var alpha = Animated.timing(this.state.alpha,
            {
                toValue:1,
                duration:200,
                useNativeDriver:true,
            });
        Animated.parallel([alpha,translate]).start();
    }

    componentWillUnmount() {

    }

    componentWillUpdate(nextProps, nextState) {
        // if (this.state.height === 0) {
        //
        // }

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 50, backgroundColor: 'blue'}}>
                </View>
                <Animated.ScrollView style = {{opacity:this.state.alpha,transform:[{translateY: this.state.translateY}]}}
                                     onLayout={(event) => {
                                         // var {height} = event.nativeEvent.layout;
                                         // this.setState({translateY: new Animated.Value(height)})
                                     }}
                >
                    <View style={{height: 200, marginTop: 10, backgroundColor: 'gray'}}/>
                    <View style={{height: 200, marginTop: 10, backgroundColor: 'gray'}}/>
                    <View style={{height: 200, marginTop: 10, backgroundColor: 'gray'}}/>
                    <View style={{height: 200, marginTop: 10, backgroundColor: 'gray'}}/>
                    <View style={{height: 200, marginTop: 10, backgroundColor: 'gray'}}/>
                    <View style={{height: 200, marginTop: 10, backgroundColor: 'gray'}}/>
                    <View style={{height: 200, marginTop: 10, backgroundColor: 'gray'}}/>
                </Animated.ScrollView>
            </View>
        );
    }


}