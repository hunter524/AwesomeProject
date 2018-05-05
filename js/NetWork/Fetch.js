import React from 'react';
import {Text,Button,View} from 'react-native';

export default class FetchNet extends React.Component{

    constructor(props){
        super(props);
        this.state={
            content:""
        };
        //fetch发送请求
        // this.click = fetchGitHubApi.bind(this);
        //xmlHttpRequest发送请求
        // this.click = xmlHttpRequestApi.bind(this);
        //使用WebSocket创建请求
        this.click = webSocketRequestApi.bind(this);
    }

    render(){
        return <View style={{flex:1,flexDirection:'column'}}>
            <Text>{this.state.content}</Text>
            <Button title="Fetch Me" onPress={this.click}/>
        </View>
    }
}

//fetch来自Module whatwg-fetch组件，封装XmlHttpRequest
//fetch封装的XmlHttpRequest /home/hunter/AwesomeProject/node_modules/react-native/Libraries/Network
//使用fetch获取github api 接口

//RN中的Fetch调用流程：
// 1.fetch获得一个Promise
// 2.Promise中封装XmlHttpRequest的调用逻辑进行请求的发送
// 3.RN中的XmlHttpRequest封装在/home/hunter/AwesomeProject/node_modules/react-native/Libraries/Network/XMLHttpRequest.js
// 4.XmlHttpRequest调用的是RCTNetWorking模块（对于Native网络请求模块的封装)
// 5.RCTNetWorking调用Native封装的代码，即本地的require('NativeModules').Networking （OkHttpClient的封装进行请求的发送）

function fetchGitHubApi() {
    fetch("https://api.github.com/")
        .then((response) => response.json())
        .then((jsonResp)=>{
            var time = new Date().getTime();
            var result = jsonResp.current_user_url+time;
            this.setState({content:result})
        })

}

//使用Xml请求数据
//参见 文档https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState



function xmlHttpRequestApi() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = (e)=>{
        if (xmlHttpRequest.readyState !== 4){
            console.log(`onreadystatechanged: ${xmlHttpRequest.readyState}`);
            return;
        }

        if (xmlHttpRequest.status === 200){
            console.log(`success: ${xmlHttpRequest.responseText}`);
            var time = new Date().getTime();
            var result = xmlHttpRequest.responseText+time;
            this.setState({content:result});
        }
        else {
            console.log("error")
        }
    };
    xmlHttpRequest.open('GET','https://api.github.com/');
    console.log('open');
    xmlHttpRequest.send();
    console.log('send')
}

function webSocketRequestApi() {
    var webSocket = new WebSocket('wss://echo.websocket.org');
    webSocket.onopen=()=>{
        console.log(`webSocket on open`)
        webSocket.send(`Web Socket Open Say Hello: ${new Date().getTime()}`)
    };
    webSocket.onmessage = (e)=>{
        var message = `receive: ${e.data} ${new Date().getTime()}`;
        console.log(message);
        this.setState({content:message});

    };
    webSocket.onerror = (e)=>{
        console.log(`error: ${e.message}`);
    }
}