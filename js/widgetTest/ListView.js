import React from 'react'
import {ListView, Text} from 'react-native'

var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => {
        return r1 !== r2
    }
});
ds = ds.cloneWithRows(['1', '2', '3', '4', '5', '7', '8', '9', '10', '11', '11', '12', '13', '14', '15', '17', '18', '19', '110', '111',
    '1', '2', '3', '4', '5', '7', '8', '9', '10', '11', '11', '12', '13', '14', '15', '17', '18', '19', '110', '111'
]);

export default class ListViewTest extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListView style={{flex: 1, backgroundColor: 'lightblue'}}
                      dataSource={ds}
                      onChangeVisibleRows={(visibleRows,changedRows)=>{
                          console.log(visibleRows)
                      }}
                      renderRow={(rowData) => {
                          return <Text style={{height: 200, width: 400, backgroundColor: 'yellow',marginTop:20}}>{rowData}</Text>
                      }}>

            </ListView>
        );
    }

}