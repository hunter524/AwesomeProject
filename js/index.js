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


AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
AppRegistry.registerComponent('WidgetTest',()=>LayoutAnimationComponent);
