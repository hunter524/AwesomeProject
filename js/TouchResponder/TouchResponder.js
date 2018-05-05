import React from 'react';
import {View, PanResponder, Text} from 'react-native'


export default class TouchResponder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: `position is x:null y:null`
        }
    }

    render() {
        return (<View style={{flex: 1}}>
            <Text style={{height: '10%'}}>{this.state.position}</Text>
            <View style={{height: '80%', backgroundColor: 'lightblue'}}

                  onStartShouldSetResponder={(event) => true}
                  onStartShouldSetResponderCapture={(event) => true}
                  onMoveShouldSetResponder={(event) => true}
                  onMoveShouldSetResponderCapture={(event) => true}
                  onResponderMove={(event) => {
                      event = event.nativeEvent;
                      var e = `onResponderMove position is move x:${event.locationX} y:${event.pageY}`;
                      console.log(e);
                      this.setState({
                          position: e
                      })
                  }}
                  onResponderGrant={(event) => {
                      event = event.nativeEvent;
                      var e = `onResponderGrant position is move x:${event.loactionX} y:${event.pageY}`;
                      console.log(e);
                      this.setState({
                          position: e
                      })
                  }}
                  onResponderReject={(event) => {
                      event = event.nativeEvent;
                      var e = `onResponderReject position is move x:${event.loactionX} y:${event.pageY}`;
                      console.log(e);
                      this.setState({
                          position: e
                      })
                  }}
                  onResponderTerminationRequest={(event) => false}
            />
        </View>)
    }
}