import React from 'react'
import {ScrollView,View,Image} from 'react-native'


export default class ScrollViewTest extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <ScrollView>
                    <Image resizeMode={'center'} style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}} />
                    <Image style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}/>
                    <Image style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}/>
                    <Image style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}/>
                    <Image style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}/>
                    <Image style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}/>
                    <Image style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}/>
                    <Image style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}/>
                    <Image style= {{width:200,height:100}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}/>


                </ScrollView>
            </View>
        );
    }

}