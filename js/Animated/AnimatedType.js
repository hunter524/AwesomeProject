import React from 'react';
import {View,Dimensions,Animated} from 'react-native'

export default class AnimatedType extends React.Component{
    constructor(props){
        super(props);
        this._height = Dimensions.get('window').height;
        this._animatedValue = new Animated.Value(0)
    }

    componentDidMount(){
        this.start();
    }

    start(){
        Animated.spring(this._animatedValue,{
            toValue:this._height,
            friction:1,
        }).start()
    }

    render(){
        console.log(this._animatedValue)

        return(
            <View style={{flexDirection:'row',backgroundColor:'lightblue',flex:1}}>
                <Animated.View style={{height:this._animatedValue,width:20,backgroundColor:'black'}}/>
            </View>
        )
    }
}