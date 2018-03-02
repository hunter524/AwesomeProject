import { AppRegistry } from 'react-native';
import HelloWorld from './helloWord/HelloWorld';
import WidgetTest from './widgetTest/widget_test'
import BlinkApp from './widgetTest/BlinkApp'
import FlexLayout from "./widgetTest/LayoutTest";
import FlexBoxLayout from "./widgetTest/LayoutTest"
import HandleTouch from "./widgetTest/LayoutTest"
import ScrollViewLayout from "./widgetTest/LayoutTest"


AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
AppRegistry.registerComponent('WidgetTest',()=>ScrollViewLayout);
