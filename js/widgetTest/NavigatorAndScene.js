import React from 'react'
import {Text,Button,View,StyleSheet} from 'react-native';
//Navigator 已经被遗弃的组件
import {Navigator} from 'react-native-deprecated-custom-components'

//奇数场景
class OddNumberScene extends React.Component{
    constructor(props){
        super(props);
        //todo://用于观察场景切换的时候是否复用了Component
        this.state={
            createTime:new Date().getTime()
        }
    }

    render(){
        return (
            <View style = {{flexDirection:'column'}}>
                <Text>I am Odd number: {this.props.number} time: {this.state.createTime}</Text>
                <Button title="Forward Scene" onPress={()=>{this.props.forward.call(++this.props.number)}}/>
                <Button title="Backward Scene" onPress={()=>{this.props.backWard()}}/>

            </View>
        )
    }
}

//偶数的场景
class EvenNumberScene extends React.Component{
    constructor(props){
        super(props);
        //todo://用于观察场景切换的时候是否复用了Component
        this.state={
            createTime:new Date().getTime()
        }
    }

    render(){
        return (
            <View style = {{flexDirection:'column'}}>
                <Text>I am even number: {this.props.number} time: {this.state.createTime}</Text>
                <Button title="Forward" onPress={()=>{this.props.forward.call(++this.props.number)}}/>
                <Button title="Backward" onPress={()=>{this.props.backWard()}}/>
                <Button title = "Alert" onPress={()=>{alert("test alert!")}}></Button>
            </View>
        )
    }
}

export default class SceneComponent extends React.Component<Props>{

    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <Navigator initialRoute={{number:0}} renderScene={(route,navigator) =>{

                function forward(num) {
                    navigator.push({number:num,index:num})
                }
                
                function backward() {
                    if (route.number > 0) {
                        navigator.pop();
                    }
                }
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

StyleSheet.create({

});



