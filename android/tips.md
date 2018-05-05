1. 打包bundle react-native bundle --entry-file ./js/index.js --platform android --dev false --bundle-output ./index.android.bundle --sourcemap-output ./index.android.map --assets-dest ./asserts
2. 直接在app module项目内使用gradle 命令需要：
   + 提升 至classpath 'com.android.tools.build:gradle:2.3.3'
     同时需要相应的提高buildToolsVersion 和targetSDKVersion
# RN常用插件
  + React Native Console
  + ReactPropTypes
