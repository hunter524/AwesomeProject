# RN初窥

## RN涉及的技术栈
- JavaScript
    - 基础语法:http://javascript.ruanyifeng.com/
    - ES6 语法:http://es6.ruanyifeng.com/


- React/Redux/JSX
    - node安装:https://nodejs.org/en/download/
    
        - Ubuntu下面可以直接执行下面的命令下载脚本执行脚本添加源和证书新人:
        
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
      
    - JSX (JavaScript XML)
      在JS代码中使用XML构建布局样式,同样在XML中嵌入JS代码.需要JSXTransformer转换成原生的JS语法.如Babel.
      
    - Redux
      
      其实我也不知道是啥,好像是一个很牛逼的应用状态管理库.
      
      
- JS构建流程 Flow/Babel

flowTest文件

  Node NPM yarn 工具的使用
  JS依赖配置
  JS代码编译


-  native构建集成流程

   Android:gradle构建集成 (集成添加aar依赖,位于/node_modules/react-native/android/ 文件夹下)
   IOS:xscScheme?(配置在 ../node_modules/react-native/React/React.xcodeproj ?)
   
- React-Native相关组件使用方法

- React Native native提供功能组件封装和视图组件封装

- Android 中的React-Native 与 native交互流程