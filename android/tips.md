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
