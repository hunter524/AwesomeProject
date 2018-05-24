import React from 'react'
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {Text,View,ART} from 'react-native'
const {Surface,Shape,Path} = ART;

export default class RNScrollableTabView extends React.Component{

    constructor(props){
        super(props);
        this.state={
            i:0
        };


    }

    componentDidMount(){
        setInterval(()=>{
            console.log("setState:"+new Date().getMilliseconds());
            this.setState(
            (preState)=>{
                return {i:++preState.i}
            }
        )},16)
    }



    render(){
        let  line = Path().moveTo(250,0).lineTo(250,this.state.i) ;
        return(
            <ScrollableTabView renderTabBar={(props)=>{
                //打印传入的Scrolltable的属性
                console.log(props.tabs[props.activeTab]);
                return <DefaultTabBar/>}}>
                <View tabLabel="娱乐0" style={{width:500,height:500,backgroundColor:"lightblue"}}>
                    <Surface width={500} height={500}>
                        <Shape d={line} stroke="black" strokeWidth={2}/>
                    </Surface>
                </View>


                <Text tabLabel="娱乐1">娱乐1</Text>
                <Text tabLabel="娱乐2">娱乐2</Text>
                <Text tabLabel="娱乐3">娱乐3</Text>
                <Text tabLabel="娱乐4">娱乐4</Text>
                <Text tabLabel="娱乐4">娱乐4</Text>
                <Text tabLabel="娱乐4">娱乐4</Text>
                <Text tabLabel="娱乐4">娱乐4</Text>
                <Text tabLabel="娱乐4">娱乐4</Text>
                <Text tabLabel="娱乐4">娱乐4</Text>

            </ScrollableTabView>
        )
    }
}