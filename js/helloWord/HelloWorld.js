// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// // var a = "aaa"
//
// type Props = {};
// export default class HelloWorld extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}{justforDebug("hunter")}
//         </Text>
//         <Text>test</Text>
//         <Image source={{uri:'https://www.baidu.com/img/baidu_jgylogo3.gif'}} style={{height:100,width:200}} resizeMode='cover'></Image>
//       </View>
//     );
//   }
// }
//
// /**
//  * WebStorm test break point =====> ok
//  * @param name
//  * @returns {string}
//  */
// function justforDebug(name:string):string {
//     var number = Date.now().toString(10);
//     return '\n hello current is :'.concat(number,name)
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
