import React from 'react'
import {ListView, Text, Dimensions, FlatList} from 'react-native'
//todo：//极限连续向下快速滚动的情况下ListView存在卡顿的性能平均
//初步判断认为是JS的主线程一直在被用于执行相关的滚动动画，而没有空闲时间被利用于创建新的View添加进入布局
// （同时滚动到最底部时，反向再向上随意滚动并不存在卡顿的现象）证明了ListView底层可能使用的是ScrollView的实现方式
//dev下 可以通过performance monitor查看，JS线程的fps 一直处于 4-5的卡帧状态


var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => {
        return r1 !== r2
    }
});
var data = function () {
    let array = [];
    let i = 0;
    while (i < 1000) {
        array.push(i);
        i++;
    }
    return array;
};
var flatdata = function () {
    let array = [];
    let i = 0;
    while (i < 1000) {
        array.push({key:'test'});
        i++;
    }
    return array;
};
ds = ds.cloneWithRows(data());

//对比FlatList 与 普通ListView的性能
class ListViewTest extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListView style={{flex: 1, backgroundColor: 'lightblue'}}
                      initialListSize={100/*设置初始显示List的大小 为List的大小时滚动不会出现卡顿，但是会影响ListView初始展示在界面上的需要的时间*/}
                      dataSource={ds}
                      scrollRenderAheadDistance={Dimensions.get('window').height * 100}
                      onChangeVisibleRows={(visibleRows, changedRows) => {
                          console.log(visibleRows)
                      }}
                      renderRow={(rowData) => {
                          return <Text style={{
                              height: 200,
                              width: 400,
                              backgroundColor: 'yellow',
                              marginTop: 20
                          }}>{rowData}</Text>
                      }}>

            </ListView>
        );
    }

}

//flatList会出现大面积白屏的现象
export default class FlatListTest extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <FlatList style={{flex: 1, backgroundColor: 'lightblue'}}
                      data={flatdata()}
                      renderItem={(rowData) => {
                          return <Text style={{
                              height: 200,
                              width: 400,
                              backgroundColor: 'yellow',
                              marginTop: 20
                          }}>{rowData.key}</Text>
                      }}/>)
    }
}