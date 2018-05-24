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
class TimerAfterUnMountComponent extends React.PureComponent{
        constructor(props){
        super(props);
        this.refText = React.createRef();
        this.state={
            time:new Date().toLocaleTimeString(),
        };
    }

    componentDidMount(){
        this.interval = setInterval(this.updateTimer.bind(this),1000);
    }

    componentWillUnmount(){
            clearInterval(this.interval);
    }

    //setInterval 传入的function需要绑定this对象，用()=>{}语法生成的function无法绑定this对象
    updateTimer(){
        //    如果不使用React.PureComponent 则即使每次setState没有改变属性值也会导致页面被重新渲染了
        //    如果使用PureComponent则State未发生改变 则不会调用render方法
        this.setState({
            // time:new Date().toLocaleTimeString(),
        });
        // todo://会报错is not a function
        // this.refText.setNativeProps({
        //     title:new Date().toLocaleTimeString(),
        // })

        this.refText.getDOMNode()
    }

    render(){
        return(
            <Button ref={this.refText} title={new Date().toLocaleTimeString()}/>
        );
    }
}