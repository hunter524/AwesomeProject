import React from 'react';
import {View,UIManager,LayoutAnimation,Button,Navigator} from 'react-native';

//tips:需要启用LayoutAnimation,才会有动画效果
UIManager.setLayoutAnimationEnabledExperimental&&UIManager.setLayoutAnimationEnabledExperimental(true)

export default class LayoutAnimationComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            height:100,
            width:100
        }

    }

    render(){
        return(
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <View style={{height:this.state.height,width:this.state.width,backgroundColor:'lightblue'}}/>
                <Button title="Bigger" onPress={()=>{
                    //LayoutAnimation是一次布局改变的视图，当布局界面大小改变时，触发该动画
                    //且动画不可以被取消
                    LayoutAnimation.spring();
                    this.setState({
                        height:this.state.height+15,
                        width:this.state.width+15,
                    })
                }}/>
                <Button title="test" onPress={()=>{
                    //BatchedBridge 中的MessageQueue对象在全局的引用
                    console.log(global.__fbBatchedBridge.configurable);
                }}/>
            </View>
        )
    }
}