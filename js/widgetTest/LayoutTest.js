import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    Alert,
    ScrollView,
    Image,

    FlatList,
    SectionList,
    ToastAndroid,

    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Touchable
} from 'react-native';

//一个文件 只能有一个export default class
//需要显示不同的效果时需要更改此处 index.js 导入一个文件只是导入文件中的默认的class并且进行重命名操作
export class FlexLayout extends Component {
    render() {
        //父布局设置为1 占满屏幕的剩余空间
        //子布局 分别按照 1/6 2/6 3/6 平分该父布局空间

        //先平分再平分的操作
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>
            </View>
        );
    }
}

export class FlexBoxLayout extends Component {
    //justifyContent 内容的对齐模式，剩余空间的填充模式
    //flexDirection代表主轴，剩下的一个轴则代表副轴
    //alignItems是指副轴的对齐方式
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'red',
                justifyContent: 'space-between',
                alignItems: 'stretch'
            }}>
                <View style={{width: 50, marginLeft: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        )
    }
}

export class PizaaTranslate extends Component {
    constructor(props) {
        super(props)
        this.state = {text: ''}
    }

    render() {
        return (
            <View>
                <TextInput style={{height: 40}} placeholder="Type Here to TransLate!" onChangeText={(text) => {
                    this.setState({text})
                }}/>
                <Text style={{
                    fontSize: 42,
                    padding: 10
                }}> {this.state.text.split(" ").map((word) => word && ' 🍕').join(' ')}</Text>
            </View>
        )
    }
}

//TODO:// 每次reload均会弹出一次弹窗，目前尚不明白为什么
export class HandleTouch extends Component {


    _onLongPressButton() {
        Alert.alert('you pressed Long!')
    }

    //Button 和 TouchableXXX  最后都会被翻译成原生的控件 ReactViewGroup 和 ReactTextView
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                <Button onPress={() => {
                    Alert.alert("you tapped the Button!？？")
                }} title="Press Me!"/>
                <TouchableHighlight onPress={this._onPressButton}>
                    <View>
                        <Text style={{fontSize: 50, backgroundColor: 'blue'}}>I am Touchable Highlight!</Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback onPress={this._onPressButton}>
                    <View>
                        <Text style={{fontSize: 50, backgroundColor: 'skyblue'}}>I am Touchable Native Feedback!</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View>
                        <Text style={{fontSize: 50, backgroundColor: 'skyblue'}}>I am Touchable Opacity!</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={this._onPressButton()}>
                    <View>
                        <Text style={{fontSize: 50, backgroundColor: 'skyblue'}}>I am Touchable With out Feed Back With
                            Long Press!</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        )
    }

    _onPressButton() {
        Alert.alert('you tapped the Button!')
    }
}

export class ScrollViewLayout extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: 'skyblue'}} horizontal={true}>
                <Text style={{fontSize: 50}}>I am a Scroll Text 1</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 2</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 3</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 4</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 5</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 6</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 7</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 8</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 9</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>


            </ScrollView>
        )
    }
}

// ScrollView 嵌入ScrollView 默认效果为内层ScrollView默认展开
// 限制内层ScrollView 大小时,内层的ScrollView无法滑动 且内容会出现显示不全
export class ScrollViewInScrollView extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: 'skyblue'}}>
                <Text style={{fontSize: 50}}>I am a Scroll Text 1</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 2</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <ScrollView style={{height: 500}}>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 3___InnerScrollViewStart</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 4</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 5</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 6</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 4</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 5</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 6</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 4</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 5</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 6</Text>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Text style={{fontSize: 50}}>I am a Scroll Text 7___InnerScrollViewEnd</Text>
                </ScrollView>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 8</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                <Text style={{fontSize: 50}}>I am a Scroll Text 9</Text>
                <Image style={{height: 100, width: 200}}
                       source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>

            </ScrollView>
        )
    }
}

//第一个ScrollView实现了横向的scroll page分页滑动功能 且目前只能支持横向的滑动功能 需要Item占满一屏之后才可以进行横向的滑动
export class ScrollView2Zoom extends Component {
    render() {
        return (
            <View>
                <ScrollView pagingEnabled={true} style={{backgroundColor: 'skyblue', height: 100}} horizontal={true}>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>

                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                    <Image style={{height: 100, width: 200}}
                           source={{uri: 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'}}/>
                </ScrollView></View>

        )
    }
}

function generateNormalListData() {
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array[i] = {key: `Hello I am ${i}`}
    }
    return array;
}
let normalListData = generateNormalListData();

function generatSectionListData() {
    let array = [];
    for (let i = 0;i<100;i++){
        let item =[];
        for (let j=0;j<10;j++){
            item[j] = {key:`I am Child i: ${i} j:${j}`}
        }
        array[i] = {title:`I am title: ${i}`,data:item}
    }
    return array;
}

let sectionListData = generatSectionListData();
//每次滑动到底部只渲染一屏元素 然后就不能滑动(卡顿）需要再次触发滑动才可以滑动
//向反方向fling的时候会出现白屏的现象，等fling停止之后才开始渲染元素
export class FlatListComponent extends Component {


    render() {
        return (
            <View>
                <FlatList data={normalListData}
                          style={{height: 400, backgroundColor: 'skyblue'}}
                          renderItem={
                              ({item, index}) => {
                                  if (index % 5 === 0) {
                                      return <Text style={{height: 20,backgroundColor:'yellow'}}> ${item.key} index is ${index} type =0</Text>
                                  }
                                  else if (index % 5 === 1) {
                                      return <Text style={{height: 40,backgroundColor:'red'}}> ${item.key} index is ${index} type=1</Text>

                                  }
                                  else {
                                      return <Text style={{height: 40,backgroundColor:'blue'}}> ${item.key} index is ${index} type=others</Text>

                                  }
                              }
                          }
                />
            </View>
        )
    }
}
//分组列表也会出现卡顿的问题
export default class SectionListComponent extends Component{
    render(){
        var content = <View>
            <SectionList style={{height:400}}
                         sections={sectionListData}
                         renderItem={({item,index})=>{
                             return <Text>I am child ${item.key} index:${index}</Text>
                         }}
                         renderSectionHeader={({section})=>{
                             return <Text>I am Section ${section.title}</Text>
                         }}
            />
        </View>;
        return content;
    }
}


