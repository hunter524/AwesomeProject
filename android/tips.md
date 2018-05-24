1. 打包bundle react-native bundle --entry-file ./js/index.js --platform android --dev false --bundle-output ./index.android.bundle --sourcemap-output ./index.android.map --assets-dest ./asserts
2. 直接在app module项目内使用gradle 命令需要：
   + 提升 至classpath 'com.android.tools.build:gradle:2.3.3'
     同时需要相应的提高buildToolsVersion 和targetSDKVersion
# RN常用插件
  + React Native Console
  + ReactPropTypes
# 基础注意点
1. package.json 中依赖的管理, 5.0.3 表示安装具体的版本 ~5.0.3 表示安装5.0.X中的最新版本 ^5.0.3 表示安装5.X.X 中的最新版本
2. yarn npm的区别: yarn与npm均为 JS的包管理工具.yarn为google 等开发的更为先进.(目前最为有用的是支持离线安装package.json中的依赖的功能)
3. react-native log-android 可以查看android的实时的logcat,但是无法过滤Tag.

# Flux And Redux AND Mobx
## Flux
1. Flux定义的是一套数据单向流动的，架构思想 ：
                                                    
                     <---------Action<------------^     
                     |                             | 
                     |                             |  
Action------>Dispatcher--------->Store--------->View

Dispatcher中的每一个Register的Action触发的Store更新的回调均会被触发更新。

## Redux
1. React与Redux结合使用的时候要区分：容器组件（负责传递给展示组件一些业务逻辑的交互）与展示组件（单纯进行UI的定义,只负责渲染）
   依赖于容器组件与Redux进行交互。 React展示组件<--->React容器组件<--->Redux状态管理
   展示组件：优先考虑展示组件（React.Component)使用函数的方式进行实现。除非组件自己需要监听生命周期的变化，以及需要state状态维护自己的Component状态）
   才有必要转换成为class。
2. 借助于react_redux的library，可以实现redux状态向组件props state的映射，也可以使用connect实现将组件的dispatch操作下发进入新的组件。
    在redux官方的todos sample中：
    1. TodoList是展示组件 VisibleTodoList是容器组件
    2. Link是展示组件，FilterLink是容器组件
    3. AddTodo没有进行拆分，Footer是对FilterLink组件的封装
    4. 展示组件通过容器组件与Redux状态管理进行交互，Redux也是通过容器组件与展示组件进行交互
3. 借助connect将state dispatch 通过 mapStateToProps 与 mapDispatchToProps 两个方法将组件的属性与Store的Dispatch与State进行关联。
   在mapStateToProps与mapDispatchToProps方法中依旧可以通过ownProps参数，获得组件的自己属性，然后根据自己的属性与State相结合生成新的属性。
   将获取Action的方法进行封装，通过调用相对应的生成Action的方法获得新的Action，然后通过dispatch将Action下发给Store，Store下发给Reducer，Reducer生成新的State之后保存进入Store中，Store再通知相关联的Component进行界面的更新与渲染操作。
   *多个Reducer组装生成一个Reducer之后，通过组合的Reducer生成的Store，再通过Store.dispatch 下发的Action，即使不是Reducer自己该处理的Action，Reducer也可以获取的到，*
   *通常来说不同的Reducer的处理的顺序即为combineReducer时传递的Reducer的参数的顺序*
   
   *为了避免Reducer重名，一个应用的reducers通常放置在一个文件夹下，且通常文件名即为reducer的名字，也即为Store中存储的state对应的字段。*
   *dispatch 操作同时会返回 已经dispatch进入的action*
   
   async的官方sample：
   
   - 通过post的reducer将大的reducer拆分成更小的reducer进行代理和使用，但是并不通过combineReducers将reducer组合进入Store中形成state的状态进行管理。
   - async 中使用了redux-thunk的middle将dispatch进入的方法重新执行了方法返回了一个Promise对象。通过createThunkMiddleware创建的middleware对象进行对action传入的是function类型的引用进行执行操作。
   
4. combineReducers将多个Reducer组合生成一个Reducer，createStore通过Reducer创建Store，Store负责保存State并与容器组件进行交互。Store的跨组件传递通过Provider组件的魔法进行实现
*Provider组件是通过高阶组件的魔法，将store向下层组件进行传递？*

## Mobx

# Others About JAVA
1. java中有没有办法实现检查一下对象是否为空？为空返回一个动态代理过后的空对象，可以正常调用方法，但是不执行任何操作？

目前看动态代理（只能代理接口）无法实现类，因此无法实现类似于Kotlin obj?.method()操作。

# JS Tips
1. 每一个文件夹下的index.js为导入该文件夹时，默认导入的文件。
