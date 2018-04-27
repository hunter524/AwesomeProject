import React from 'react'
import {View,ScrollView}from 'react-native'

export default class FlexLayoutTest extends React.Component{

    constructor(props){
        super(props);
    }
    //todo://tips:LogicDensity 2.7的手机上 横向 400DP 纵向却只有688DP
    //flexLayout 布局默认direction的方向为Column(竖直方向布局） 根据Flex平分等 如果未设置flex且未设置高度则数值方向无法实现布局（不显示）
    //flexDirection 可以为属性值(column，row，column-reverse，row-reverse)


    render(){
        return(
            <View>
                <ScrollView>
                    <View style={{height:100,width:400}}>
                        <View style={{flex:1,backgroundColor:'blue'}}/>
                        <View style={{flex:1,backgroundColor:'yellow'}}/>
                        <View style={{flex:1,backgroundColor:'green'}}/>
                    </View>

                    {/*justifyContent 的几种布局样式 justify辩解 解释 内容*/}
                    <View style={{height:50,width:400,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'flex-start'}}>
                        <View style={{width:50,height:50,backgroundColor:'blue'}}/>
                        <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
                        <View style={{width:50,height:50,backgroundColor:'green'}}/>
                    </View>
                    <View style={{height:50,width:400,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'flex-end'}}>
                        <View style={{width:50,height:50,backgroundColor:'blue'}}/>
                        <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
                        <View style={{width:50,height:50,backgroundColor:'green'}}/>
                    </View>

                    <View style={{height:50,width:400,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'space-around'}}>
                        <View style={{width:50,height:50,backgroundColor:'blue'}}/>
                        <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
                        <View style={{width:50,height:50,backgroundColor:'green'}}/>
                    </View>

                    <View style={{height:50,width:400,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'space-between'}}>
                        <View style={{width:50,height:50,backgroundColor:'blue'}}/>
                        <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
                        <View style={{width:50,height:50,backgroundColor:'green'}}/>
                    </View>

                    <View style={{height:50,width:400,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'center'}}>
                        <View style={{width:50,height:50,backgroundColor:'blue'}}/>
                        <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
                        <View style={{width:50,height:50,backgroundColor:'green'}}/>
                    </View>


                    {/*alignItem 属性 有flex-start flex-end center stretch(内容不能在次轴上有大小设置）定义Content 在次轴上的布局属性*/}
                    {/*alignSelf 属性 决定了子元素自己的在父元素次轴方向上的排列方式，可以覆盖父元素的alignItem属性*/}
                    <View style={{height:150,width:400,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'center',alignItems:'flex-start'}}>
                        <View style={{width:50,height:50,backgroundColor:'blue',alignSelf:'flex-end'}}/>
                        <View style={{width:50,height:50,backgroundColor:'yellow',alignSelf:'center'}}/>
                        <View style={{width:50,height:50,backgroundColor:'green'}}/>
                    </View>

                    {/*alignItem 属性 有flex-start flex-end center stretch(内容不能在次轴上有大小设置）定义Content 在次轴上的布局属性*/}
                    <View style={{height:150,width:400,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'center',alignItems:'stretch'}}>
                        <View style={{width:50,backgroundColor:'blue'}}/>
                        <View style={{width:50,backgroundColor:'yellow'}}/>
                        <View style={{width:50,backgroundColor:'green'}}/>
                    </View>

                    {/*width height 等的大小可以 百分比多少父容器进行定义*/}
                    <View style={{height:150,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'center',alignItems:'stretch'}}>
                        <View style={{width:'20%',backgroundColor:'blue'}}/>
                        <View style={{width:'20%',backgroundColor:'yellow'}}/>
                        <View style={{width:'60%',backgroundColor:'green'}}/>
                    </View>

                    {/*overflow属性 todo://看起来好像没啥用*/}
                    <View style={{overflow:'scroll',height:150,flexDirection:'row',marginTop:10,backgroundColor:'gray',justifyContent:'center',alignItems:'stretch'}}>
                        <View style={{width:200,backgroundColor:'blue'}}/>
                        <View style={{width:150,backgroundColor:'yellow'}}/>
                        <View style={{width:50,backgroundColor:'green'}}/>
                        <View style={{width:100,backgroundColor:'lightblue'}}/>
                    </View>

                    {/*borderColor borderWidth border<direction>Color border<Direction>Width 控制特定位置上的边框线的宽度*/}
                    <View style={{height:50,width:50,marginTop:10,borderColor:"red",backgroundColor:'lightblue',borderWidth:0.5}}/>
                </ScrollView>

            </View>



        );
    }

}