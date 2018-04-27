import React from 'react'
import {ScrollView,View,Image,Text,ImageBackground} from 'react-native'

//Image 组件属性 borderTopRightRadius border<direction>Radius设置四角的圆角属性（ios上无效）


export default class ScrollViewTest extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View>
                <ScrollView style={{backgroundColor:'gray'}}>
                    {/*使用图片作为背景 文字作为前景的做法 !!老版本的RN教程 Image可以包含 children组件，新版的Image不可以包含children组件。
                    需要使用ImageBackground组件*/}
                    <ImageBackground resizeMode={'center'} style= {{width:200,height:100,backgroundColor:'lightblue',borderTopRightRadius:5}} source={{uri:"https://www.baidu.com/img/baidu_jgylogo3.gif"}}>
                        <Text style={{fontSize:15,color:'darkblue'}}>I am front Text!</Text>
                    </ImageBackground>
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