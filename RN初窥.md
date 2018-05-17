# RN初窥

## RN涉及的技术栈
- JavaScript
    - 基础语法:http://javascript.ruanyifeng.com/
    - ES6 语法:http://es6.ruanyifeng.com/


- React/Redux/JSX/Babel/Flow
    - node安装:https://nodejs.org/en/download/
    
        - Ubuntu下面可以直接执行下面的命令下载脚本执行脚本添加源和证书信任:
        
            node 8:
            
            curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
            
            sudo apt-get install -y nodejs
            
            node 10:
            
            curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
            
            sudo apt-get install -y nodejs
            
        - 其他版本的安装参照上面的教程
        - 安装完成node之后怎么更新node? 
        
            Ubuntu可以直接使用:
             sudo npm install -g npm 
             sudo npm install -g node
            利用刚刚安装的npm既可以自己更新自己,也可以更新node.
            其他平台没试过,应该目测也是可以这么操作的.
    - 创建react项目:
   
       Nuclide Atom
        
       利用npm install -g create-react-app安装依赖包
       使用create-react-app my-react-app 即可以完成一个React Web项目的创建.
       
       create-react-app 实际运行的是位于:../lib/node_modules/create-react-app/index.js下的JS脚本.
       
       后面讲的 react-native 命令初始化react-native项目脚本也是这么一个原理:
       
       react-native init AwesomeProject
       
       cd AwesomeProject
       
       react-native run-android
       
       react-native --help 
       
       https://facebook.github.io/react-native/docs/getting-started.html
       
    - React文档:https://reactjs.org/docs/hello-world.html
        - 基本内容:
    
            Component 组件
            
            组件生命周期
            
            组件属性
            
            组件状态
            
            JSX
            
        - 其他内容:
        
          属性默认值
          
          属性类型检查
          
          高阶组件
          
          上下文传递 等等
      
    - JSX (JavaScript XML)/Babel/Flow
    
      JSX:在JS代码中使用XML构建布局样式,同样在XML中嵌入JS代码.需要JSXTransformer转换成原生的JS语法.如Babel.
      在线转换网页: https://babeljs.io/repl/ 参考BlinkApp.js的转换代码
      
      flow:标记有类型的JS代码,一种静态类型检查工具.(react-native的JS代码目前看均是由flow语法写的)https://flow.org/en/docs/usage/
      
      Babel:编译工具,将不符合JS的语法,编译成JS语法.(为什么要写不符合JS语法的JS?减少错误(flow),方便编码(JSX),兼容性提供(ES6=>ES5))
      
    - Redux
      
      其实我也不知道是啥,好像是一个很牛逼的应用状态管理库.好像是当组件状态已经复杂到,用状态提升已经无法完成代码简化的任务了,就该学习使用他了.
      
      状态提升:一个子组件的状态变化会导致其上级组件的状态变化 或者 相同级别的组件的变化,就应该把该状态提升到他们共同的父组件上,状态值作为属性传递给子组件.
    - yarn 和 npm区别：  
        yarn：https://yarnpkg.com/zh-Hans/
        npm：https://www.npmjs.com/
        
        淘宝的 npm与yarn 镜像:https://npm.taobao.org/
        解决国内访问npm yarn官方的包管理服务器过慢的问题。
        
        IE 和 Chrome的关系
        package.json :
        5.0.3 表示安装具体的版本 ~5.0.3 表示安装5.0.X中的最新版本 ^5.0.3 表示安装5.X.X 中的最新版本
        
-  React Native构建集成流程
   - JS代码的打包和构建
    react-native命令所在的目录: /usr/local/bin/react-native 指向的react-native-cli下面的index.js文件
    
                   打包命令:
                   react-native bundle --entry-file ./js/index.js --bundle-output ./bundle/android/index.android.bundle --platform android --assets-dest ./bundle/android/ --dev false
                   react-native bundle --entry-file ./js/index.js --bundle-output ./bundle/ios/index.ios.bundle --platform ios --assets-dest ./bundle/ios --dev false
                   
                   require 加载图片不能拼接字符串的原因.
                   
                   文件打包分为bundle(代码) 和 图片资源文件:
          
                   Android中:默认的发布包 bundle(js源码文件在assets目录下) 图片被拷贝的res目录下
                   图片文件由哪儿加载是由/node_modules/react-native/Libraries/Image/AssetSourceResolver.js文件控制的
                   
                   打包流程:执行的代码 /node_modules/react-native/local-cli/runAndroid/runAndroid.js
                   
                   热更新和热修复:通过https://github.com/google/diff-match-patch 生成补丁包合并变成完整的文件,分别更新bundle和图片资源文件.

   Android:gradle构建集成 (集成添加aar依赖,位于/node_modules/react-native/android/ 文件夹下)
   
   IOS:xscScheme?(配置在 ../node_modules/react-native/React/React.xcodeproj ?)
   
- React-Native相关组件使用方法
    https://summarychm.gitbooks.io/reactnative-api/
- React Native native提供功能组件封装和视图组件封装

- React-Native 与 Native交互流程
  java <--> C++(WebKit) <--> JS
  
  fb：官方示例：https://github.com/fbsamples/f8app
  react-native大杂烩:https://github.com/jondot/awesome-react-native
  react社区开源组件:https://github.com/react-native-community