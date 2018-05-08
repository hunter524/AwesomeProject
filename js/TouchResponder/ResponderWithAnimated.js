import React from 'react'
import {Animated, View, PanResponder,Dimensions,TouchableHighlight} from 'react-native';

const {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class ResponderWithAnimated extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this._animatedValue = new Animated.ValueXY();
        this._value = {x: 0, y: 0};
        this._animatedValue.addListener((value) => {
            this._value = value
        })
        this._panresponder = PanResponder.create({
            //不拦截事件则子View可以响应事件,拦截事件之后则子View无法响应事件
            onStartShouldSetPanResponder: (evt, getstureState) => true,
            onStartShouldSetPanResponderCapture: (evt, getstureState) => true,
            onMoveShouldSetPanResponder: (evt, getstureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, getstureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                console.log('onPanResponderGrant');
                this._animatedValue.setOffset({x: this._value.x, y: this._value.y})
            },
            onPanResponderMove: (event, gestureState) => {
                console.log('onPanResponderMove');
                this._animatedValue.setValue({x:gestureState.dx,y:gestureState.dy})
            },
            // 下面只是一种简单的解构语法,语义同上面的代码
            // onPanResponderMove:Animated.event([null, {dx: this._animatedValue.x, dy: this._animatedValue.y}]),
            onPanResponderRelease: () => {
                console.log('onPanResponderRelease');
                this._animatedValue.flattenOffset();
            }

        });

        //颜色插值器根据纵向的移动进行进行颜色的变换
        this._interpolatedColor = this._animatedValue.y.interpolate({
            inputRange: [0, deviceHeight - 100],
            outputRange: ['rgba(229, 27, 66, 1)', 'rgba(90, 146, 253, 1)'],
            extrapolate: 'clamp'
        });
        this._interpolatedRotation = this._animatedValue.x.interpolate({
            inputRange: [0, deviceWidth / 2, deviceHeight],
            //deg => degree 度数
            outputRange: ['-360deg', '0deg', '360deg']
        });

    }

    render() {
        return (
            <View style={{flex:1,flexDirection: 'column', backgroundColor: 'gray', justifyContent: 'center',alignItems:'center'}}>

                <Animated.View style={
                    {
                        height: 100, width: 100, backgroundColor: 'lightblue',
                        transform: [
                            {translateY: this._animatedValue.y},
                            {translateX: this._animatedValue.x},
                            {rotate: this._interpolatedRotation}
                        ], backgroundColor: this._interpolatedColor
                    }} {...this._panresponder.panHandlers}>
                    <TouchableHighlight onPress={()=>{
                        console.log("click!")
                        alert("click!")}} >
                        <View style={{height: 50, width: 50,backgroundColor:'lightgreen'}}/>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }

}