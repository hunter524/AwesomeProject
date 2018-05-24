import { AppRegistry } from 'react-native';
import HelloWorld from './helloWord/HelloWorld';
import WidgetTest from './widgetTest/widget_test'
import BlinkApp from './widgetTest/BlinkApp'
import FlexLayout from "./widgetTest/LayoutTest";
import FlexBoxLayout from "./widgetTest/LayoutTest"
import HandleTouch from "./widgetTest/LayoutTest"
import ScrollViewLayout from "./widgetTest/LayoutTest"
import AnimatedScrollView from "./Animated/AnimatedScrollView"
import FlexLayoutTest from './widgetTest/FlexLayout'
import TextInputTest from './widgetTest/TextInput'
import ScrollViewTest from './widgetTest/ScrollView'
import ListViewTest from './widgetTest/ListView'
import Fetch from './NetWork/Fetch'
import NavigatorAndScene from './widgetTest/DeprecatedNavigatorAndScene'
import TouchResponder from './TouchResponder/TouchResponder'
import ReactNavigation from'./widgetTest/ReactNavigation'
import ResponderWithAnimated from './TouchResponder/ResponderWithAnimated'
import LayoutAnimationComponent from './TouchResponder/LayoutAnimationComponent'
import TouchableWidgets from './TouchResponder/Touchable'
import SelectAddAccountTypePage from './add_acc_type_selected/SelectAddAccountTypePage'
import AnimatedType from'./Animated/AnimatedType'
import TimerDifference from "./Timer/TimerDifference";
import RNScrollableTabView from "./widgetTest/RNScrollableTabView"

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
AppRegistry.registerComponent('WidgetTest',()=>RNScrollableTabView);


//添加全局的耗时操作 模拟执行耗时任务
global.fakeSleepThreadId = 0;
global.sleep= sleep;
function sleep() {
    var threadId = ++global.fakeSleepThreadId;
    var startTime = new Date().getTime();
    console.log(`start sleep fake Thread id: ${threadId}`);
    var i = 0;
    while (i < 1000000000) {
        i += Math.random() * 10 % 10
    }
    var endTime = new Date().getTime();
    console.log(`out end sleep fake Thread id: ${threadId} sleep time ${endTime - startTime} i: ${i} startTime ${startTime} endTime:${endTime}`);
}

global.stock = require('./add_acc_type_selected/res/add_stock_account.png');