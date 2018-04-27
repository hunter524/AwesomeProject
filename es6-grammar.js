'use strict';
//1.导入额外的引用包需要在项目外层的package.json文件 dependencies中进行版本的配置与更新
require('xmlhttprequest');


//=====================================class 部分========================//
let getLocation = 'getLocation';
class Point extends Object{
    constructor(x,y){
        super();
        this.x = x;
        this.y = y;
    }

    toString(){
        return`Point:{x:${this.x} y:${this.y}}`;
    }

    //通过变量的方式声明函数名称
    [getLocation](){
        return `Location is x:${this.x} y:${this.y}`;
    }
}

//表达式定义类 如果class定义了类的名字则该名字便是类的名字
//如果class没有定义类的名字则 该类的名字就是表达式的名字
const OtherClass = class /*InnerName*//*这个名称只有在类内部可以使用*/{
    getName(){
        return /*InnerName.name*/"NoName";
    }
};


const immediatellyInvokeClass = new class {
    constructor(name){
        this.name = name;
    }
    innerMethod(){
        console.log(`inner Method: ${this.name}`)
    }

}('BarFoo');


//通过 外部方法调用call传入this 和 symbol方法 外部无法直接调用实现了对象内部的方法的私有化
let privateMethod = Symbol('private method');
class PrivateClass extends Object{
    constructor(name){
        super();
        this.name = name;
    }

    publicMethod(){
        this[privateMethod]();
        outPrivateMethod.call(this);
    }
    [privateMethod](){
        console.log('I am Symbol private method!',this.name);
    }
}

function outPrivateMethod() {
    console.log('I am out Private Method!',this.name);
}

//存值函数 与 取值函数 是设置在属性的descriptor上面, 判断只设置set 和 get 是否有该值
class SetterAndGetter{
    get Attribute(){
        return 'getAttribute';
    }

    set Attribute(attribute){
        console.log('set:',attribute);
    }

    set SecondAtrr(secondAttr){
        console.log('set second attr:',secondAttr);
    }
}

function mainClass() {
    var point = new Point(20,20);
    console.log(point.toString());

    var otherClass = new OtherClass();
    console.log(otherClass.getName(),/*InnerName.name,*/OtherClass.name);

    //立即执行类的实例
    immediatellyInvokeClass.innerMethod();

    var privateClass = new PrivateClass('barFoo');
    privateClass.publicMethod();

    console.log('================simple test for map=====================')
    var map = new Map();
    map.set("key","value");
    var otherClassKey = new OtherClass();
    map.set(otherClassKey,"otherclass");
    console.log(map);
    console.log(map.get(otherClassKey));


    var setterAndGetter = new SetterAndGetter();
    setterAndGetter.Attribute = 'setted attr';
    setterAndGetter.SecondAtrr = "second set attr";
    console.log(setterAndGetter.Attribute);
    //todo:// 属性的descriptor是什么东西?
    var attrDescriptor = Object.getOwnPropertyDescriptor(SetterAndGetter.prototype,'Attribute');
    console.log('attrDescriptor',attrDescriptor);
    //每一组不同的set key拥有一组不同的descriptor
    var secondAttrDescriptor = Object.getOwnPropertyDescriptor(SetterAndGetter.prototype,'SecondAtrr');
    console.log('second Descriptor:',secondAttrDescriptor);

    //set get 是不存在属性的 只有Descriptor的存在
    console.log('has properties',setterAndGetter,Object.hasOwnProperty('Attribute'),'get' in attrDescriptor);

    new Array();
}


//=================================Symbol 部分==================================//

function mainSymbol() {
    let functiona = Symbol('functiona');
    let obj = {
        functiona:function () {
            console.log('I am normal obj function!');
        }
    };
    obj[functiona] = function () {
        console.log('I am symbol obj function!');
    }

    obj.functiona();
    obj[functiona]();
    obj['functiona']();/*通过字符串的方式进行数组调用 其实调用的是默认方法(普通定义的方法)*/
}



//=====================================Main部分================================//
function main() {
    // mainSymbol();
    mainClass();
}

main();