import React, {Component} from 'react'
import {Text, View} from 'react-native'

class BlinkComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true}

        // setInterval(() => {
        //     this.setState(previousState => {
        //         return {isShowingText: !previousState.isShowingText}
        //     })
        // }, 1000)
    }

    render() {
        let disPlay = this.state.isShowingText ? this.props.text : '';
        return (
            <Text style={{width:360,backgroundColor:'red'}}>{disPlay}</Text>
        )
        //1080*1920 2.8*5.0英寸 5.7英寸的屏幕是2.4X 横向有450dp占满屏幕 3X则横向360占满屏幕？

    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <BlinkComponet text="blink first" />
                <BlinkComponet text="blink second"/>
            </View>)

    }
}