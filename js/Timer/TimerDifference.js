import React from 'react';
import {View, Button, Animated, InteractionManager,Text} from 'react-native';

export default class TimerDifference extends React.Component {
    constructor(props) {
        super(props);
        this._animatedValue = new Animated.Value(0);
        this._rotate = this._animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
    }

    componentDidMount() {
        this.startRotate();
    }


    startRotate() {
        this._animatedValue.setValue(0);
        this._timing = Animated.timing(this._animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        });
        this._timing.start((finished) => {
            if (finished.finished) {
                this.startRotate()
            }
        })
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Animated.Text
                    style={{backgroundColor: 'lightblue', transform: [{rotate: this._rotate}]}}>Rotate</Animated.Text>
                <Button title='requestAnimationFrame' onPress={() => {
                    //验证requestAnimationFrame是在下一帧进行执行任务操作的
                    //而且JS是单线程的，当下一帧执行一个非常耗时的操作的时候，会导致动画卡顿
                    console.log(`current press time is ${new Date().getTime()}`);
                    requestAnimationFrame(() => {
                        console.log(`current animationFrameTime time is ${new Date().getTime()}`)
                        global.sleep();
                    })
                }}/>

                {/*在动画执行结束之后执行相关代码，如果动画一直执行则相关代码会一直无法执行*/}
                {/*点了该按钮 再点击stop该出的任务才会执行 然后sleep导致界面卡死*/}
                {/*交互包括点击 按钮和执行动画*/}
                <Button title='InteractionManager' onPress={() => {
                    console.log(`current press time is ${new Date().getTime()}`);
                    InteractionManager.runAfterInteractions(() => {
                        console.log(`current InteractionManager time is ${new Date().getTime()}`)
                        global.sleep();
                    })
                }}/>

                {/*查看stop源码 stop为调用cancelAnimationFrame*/}
                <Button title='stop' onPress={() => {
                    this._timing.stop();
                }}/>

                <Button title='start' onPress={() => {
                    this.startRotate();
                }}/>

                <TimerAfterUnMountComponent></TimerAfterUnMountComponent>
            </View>
        );
    }
}

//使用react-timer-mixin 避免组件被卸载时Timer没有被卸载导致的错误
//todo: 暂时未实现通过refs模拟Timer未被清除导致的崩溃问题
class TimerAfterUnMountComponent extends React.Component{
        constructor(props){
        super(props);
        this.refText = React.createRef();
        this.state={
            time:new Date().toLocaleTimeString(),
        };
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleTimeString(),
            });
            // this.refText.current.title=new Date().toLocaleTimeString();
        },1000)
    }

    render(){
        return(
            <Text ref={this.refText}>{this.state.time}</Text>
        );
    }
}