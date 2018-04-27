import React from 'react'
import {TextInput, Text, View, ToastAndroid} from 'react-native'

function showToast(text) {
    ToastAndroid.show(text, ToastAndroid.SHORT)
}

//underlineColorAndroid 设置TextInput的输入框下划线样式

//defaultValue 输入框输入默认值 placeholder 输入框提示问题
//editable 是否可以编辑
//keyboardType 设置键盘种类
//selectionColor 光标颜色

export default class TextInputTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput style={{height: 50}} placeholder={"Hint text!"}

                    // underlineColorAndroid={"transparent"}

                    // defaultValue={"DefaultValue"}

                    // editable={false}

                    // keyboardType={'numeric'}

                           selectionColor={"red"}

                           onChangeText={(text) => {
                               showToast(text);
                               this.setState({input: text})
                           }}
                           onFocus={(param) => {
                               showToast('focus' + param.toString())
                           }}

                />

                <Text style={{
                    height: 50,
                    backgroundColor: 'lightblue',
                    overflow: 'scroll'
                }}>{this.state.input.split(' ').map((input) => {
                    return input && "🍕"
                }).join(' ')}</Text>

            </View>
        )
    }
}