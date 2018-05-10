import React from 'react';
import {View,TouchableHighlight,TouchableOpacity,
        TouchableNativeFeedback,Text,AppRegistry,
        Button,StyleSheet,
        AppState} from 'react-native';

export default  class TouchableWidgets extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <TouchableHighlight underlayColor="lightblue" activeOpacity={0.2} onPress={()=>{
                    // alert('TouchableHighlight');
                }} onHideUnderlay={()=>{
                    alert("onHideUnderlay")
                }}
                onShowUnderlay={
                    ()=>{
                        alert("onShowUnderlay");
                    }
                }>
                    <Text style={{backgroundColor:'lightgreen',height:50}}>TouchableHighlight</Text>
                </TouchableHighlight>

                <TouchableOpacity  activeOpacity={0.1} onPress={()=>{
                    // alert('TouchableHighlight');
                }} onHideUnderlay={()=>{
                    alert("onHideUnderlay")
                }}
                                    onShowUnderlay={
                                        ()=>{
                                            alert("onShowUnderlay");
                                        }
                                    }>
                    <Text style={{backgroundColor:'lightblue',height:50}}>TouchableHighlight</Text>
                </TouchableOpacity>
                <Button title="Register" onPress={()=>{
                    console.log("Register");
                    AppRegistry.registerRunnable("regggg",()=>{
                        alert('regggg');
                    })
                }}/>
                <Button title="Run Register" onPress={()=>{
                    console.log("Run Register");
                    AppRegistry.runApplication("regggg",null);
                }}/>
                <Button title="Run Component" onPress={()=>{
                    // console.log("Run Component");
                    // AppRegistry.runApplication("HelloWorld",null);
                    alert(AppRegistry.getAppKeys())
                }}/>
            </View>
        )
    }
}