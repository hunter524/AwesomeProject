import React from 'react'
import {Text, Button, View, StyleSheet} from 'react-native';
//Navigator 已经被遗弃的组件
import {Navigator} from 'react-native-deprecated-custom-components'

//奇数场景
class OddNumberScene extends React.Component {
    constructor(props) {
        super(props);
        //todo://用于观察场景切换的时候是否复用了Component
        this.state = {
            createTime: new Date().getTime()
        }
    }

    render() {
        return (
            <View style={{flexDirection: 'column'}}>
                <Text>I am Odd number: {this.props.number} time: {this.state.createTime}</Text>
                <Button title="Forward Scene" onPress={() => {
                    this.props.forward.call(null,++this.props.number)
                }}/>
                <Button title="Backward Scene" onPress={() => {
                    this.props.backWard.call()
                }}/>

            </View>
        )
    }
}

//偶数的场景
class EvenNumberScene extends React.Component {
    constructor(props) {
        super(props);
        //todo://用于观察场景切换的时候是否复用了Component
        //实际上每一个场景的状态会被缓存，出栈的时候只是恢复上一个场景的Component
        this.state = {
            createTime: new Date().getTime()
        }
    }

    render() {
        return (
            <View style={{flexDirection: 'column'}}>
                <Text>I am even number: {this.props.number} time: {this.state.createTime}</Text>
                <Button title="Forward" onPress={() => {
                    this.props.forward.call(null,++this.props.number)
                }}/>
                <Button title="Backward" onPress={() => {
                    this.props.backWard.call()
                }}/>
                <Button title="Alert" onPress={() => {
                    alert("test alert!")
                }}></Button>
            </View>
        )
    }
}

export default class SceneComponent extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Navigator initialRoute={{number: 0,index:0}} renderScene={(route, navigator) => {

                var forward = (num) => {
                    console.log(`forward num: ${num}`)
                    navigator.push({number: num, index: num})
                };

                var backward = () => {
                    console.log(`back ward: ${route.index}`)
                    if (route.number > 0) {
                        navigator.pop();
                    }
                };
                console.log(`router num: ${route.number}`)
                if (route.number % 2 === 0) {
                    return <EvenNumberScene number={route.number} forward={forward} backWard={backward}/>
                }
                else {
                    return <OddNumberScene number={route.number} forward={forward} backWard={backward}/>
                }
            }}/>
        )
    }

}

StyleSheet.create({});



