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
   - combineReducers的操作，将多个reducer包含进入一个Object {reducer1,reducer2}作为参数传递给combineReducer，然后combineReducer返回一个function作为新的Reducer以便后续传递给Store。
   - 返回的function(combination)默认把第一个参数当做 旧的state，第二个参数当做action。然后从集合的state中取得对应的Reducer对应的state字段传递给该reducer进行处理返回一个新的state，combination将新的的state返回给store进行保存
   - 每个combineReducer传入的子reducer均会被调用，传入其所关注的state部分，但是一般子reducer需要识别该状态是否是其需要处理的，不是其需要处理的则原样返回传入的state，
   
   同时combination方法也会检查（检查返回的state状态是否为undefined，如果是则抛出异常。）
      
     对应的state字段是否已经有了改变，有了改变则返回新的状态。createStore的Store是通过dispatch下发action的。
5. applyMiddleware 传入middleware数组，middlware的柯里化方法的前面是 store(原始的store)=>next(进过middleware转化过的store)=>action(传入的action动作)
   
   compose(f,g,h) => f(g(h(x))) x代表action，h(x)的返回作为g的next参数
   
   每一个middle的store均为最原始的store
   
   后面next代表reduce时内层传递给外层的包装过的dispatch,第一个middleware接收到的是最原始的dispatch。
   
   普通的reduce操作是从 0=>length 执行合并操作 [1,2,3,4].reduce(function(a,b)=>a+b) ==> 1+2 = 3 3+3=6 6+4=10
   
   next代表列表下一层的方法，最内层传入的next则为原始的dispatch.其余的每一层的next持有的是下一层的方法。如 1持有的next为2，
   
   2持有的next为3,3持有的next为4。
   
   调用compose完成之后的middleware则Action是从1传入4的，每一层均可以选择拦截操作而不再向下一层传递Action操作。
   
   每一层在进行return操作时也可以选择不return或者return调用next返回的相关结果。
   
   applyMiddleware 将待reduce的middleware 不停的reduce操作并返回新的function 直到最内层的function被迭代。返回给最外层调用者。传入的arguments则为action，返回的参数则为上一个的dispatch操作的next参数。
6. createStore 时传入的为(reducers,preloadedState,enhancer),

   enhancer即为applymiddleWare返回的function，通常第二个参数即为middleWare的enhancer。所以createStore中开始便判断了preloadedState
   
   是否是一个function如果是一个function且enhancer没有传入时则将其赋值给enhancer。
   
   reducer则是combineReducer传入的拼装完成的Reducer，dispatch传入的参数则是combineReducer返回的function。combineReducer返回的function Combination调用时
   
   （dispatch Action 时）则调用被combine的所有Reducer并且传入每一个reducer分别关注的部分的数据，并且传入Action。各自Reducer的通常做法只关心自己关心的Action部分，不关心的部分则将数据原样返回。
   
   createStore之后会去调用一次dispatch 传入的type为ActionTypes.INIT，去初始化Store的State状态。
   
7. bindActionCreators 传入ActionCreator(创建Action的方法) 和dispatch。
 
    返回一个包装过的对象key值同传入的ActionCreators，但是实际的方法是被dispatch包装了一层的ActionCreator的调用。
    
    bindActionCreators也可以接收一个function（生成Action的方法),返回一个包装完成的对象。 
## react-redux

## 参考文档

   - redux[使用教程](https://cn.redux.js.org/docs/recipes/MigratingToRedux.html)

   - redux[源码分析](https://github.com/ecmadao/Coding-Guide/blob/master/Notes/React/Redux/Redux%E5%85%A5%E5%9D%91%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90.md#redux%E5%85%A5%E5%9D%91%E8%BF%9B%E9%98%B6-%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90)

   - JS[函数式编程](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch1.html)
## Mobx

# Others About JAVA
1. java中有没有办法实现检查一下对象是否为空？为空返回一个动态代理过后的空对象，可以正常调用方法，但是不执行任何操作？

目前看动态代理（只能代理接口）无法实现类，因此无法实现类似于Kotlin obj?.method()操作。

# JS Tips
1. 每一个文件夹下的index.js为导入该文件夹时，默认导入的文件。
