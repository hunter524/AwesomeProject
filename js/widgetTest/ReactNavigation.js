import React from 'react'
import {View,Text,Button,WebView} from 'react-native'
import {StackNavigator} from 'react-navigation'

class HomeComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }

    render(){
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <Text>I am Home Page! {this.state.time}</Text>
                <Button title="Go to Home" onPress={()=>{
                    this.props.navigation.navigate("Home")
                }}/>
                <Button title="Go to Detail" onPress={()=>{
                    this.props.navigation.navigate("Detail",{name:'Home Sub Detail'})
                }}/>
            </View>
        )
    }
}
//声明static 参数的另外一种形式,直接在类上声明参数
HomeComponent.navigationOptions={
    title:'Home'
};

class DetailComponent extends React.Component{

    // static navigationOptions={
    //     title:'Detail'
    // };

    static navigationOptions=({navigation})=>{
        var {params} = navigation.state;
        return {
            title:params.name?params.name:'with'
        }
    }

    constructor(props){
        super(props);
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }

    render(){
        let {params} = this.props.navigation.state;


        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <Text>I am Detail Page! {this.state.time}</Text>
                <Text>Detail Product Name:{params.name?params.name:"WithOut Name"}</Text>
                <Button title="Go to Home" onPress={()=>{
                    this.props.navigation.navigate("Home")
                }}/>

                <Button title="Go to Detail" onPress={()=>{
                    this.props.navigation.navigate("Detail")
                }}/>
            </View>
        )
    }
}

const RootStack = StackNavigator({
    Home:{
        screen:HomeComponent,
    },
    Detail:{
        screen:DetailComponent,
    }
});

// const RootStack2 = StackNavigator({
//     Home:{
//         screen:HomeComponent,
//     },
// });

//StackNavigator 高度设置无效,默认会占满当前View中剩余的空间
//StackNavigator可以设置外面包装其的View的大小,从而控制StackNavigator的大小,不能直接设置StackNavigator的大小
//一个页面只能设置一个StackNavigator
export default class RootComponent extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style={{flex:1,backgroundColor:'yellow'}}>
                <Text>Stack Content!</Text>
                {/*<RootStack2 style={{height:100,width:200}}/>*/}
                <Text>Stack Content!</Text>
                <RootStack/>
                <View style={{height:200,width:200}}>
                </View>
            </View>
        )
    }
}