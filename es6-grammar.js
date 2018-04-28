'use strict';
//1.导入额外的引用包需要在项目外层的package.json文件 dependencies中进行版本的配置与更新
require('xmlhttprequest');


//=====================================class 部分========================//
let getLocation = 'getLocation';

class Point extends Object {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    toString() {
        return `Point:{x:${this.x} y:${this.y}}`;
    }

    //通过变量的方式声明函数名称
    [getLocation]() {
        return `Location is x:${this.x} y:${this.y}`;
    }
}

//表达式定义类 如果class定义了类的名字则该名字便是类的名字
//如果class没有定义类的名字则 该类的名字就是表达式的名字
const OtherClass = class /*InnerName*/
    /*这个名称只有在类内部可以使用*/ {
    getName() {
        return /*InnerName.name*/"NoName";
    }
};


const immediatellyInvokeClass = new class {
    constructor(name) {
        this.name = name;
    }

    innerMethod() {
        console.log(`inner Method: ${this.name}`)
    }

}('BarFoo');


//通过 外部方法调用call传入this 和 symbol方法 外部无法直接调用实现了对象内部的方法的私有化
let privateMethod = Symbol('private method');

class PrivateClass extends Object {
    constructor(name) {
        super();
        this.name = name;
    }

    publicMethod() {
        this[privateMethod]();
        outPrivateMethod.call(this);
    }

    [privateMethod]() {
        console.log('I am Symbol private method!', this.name);
    }
}

function outPrivateMethod() {
    console.log('I am out Private Method!', this.name);
}

//存值函数 与 取值函数 是设置在属性的descriptor上面, 判断只设置set 和 get 是否有该值
class SetterAndGetter {
    get Attribute() {
        return 'getAttribute';
    }

    set Attribute(attribute) {
        console.log('set:', attribute);
    }

    set SecondAtrr(secondAttr) {
        console.log('set second attr:', secondAttr);
    }
}

function mainClass() {
    var point = new Point(20, 20);
    console.log(point.toString());

    var otherClass = new OtherClass();
    console.log(otherClass.getName(), /*InnerName.name,*/OtherClass.name);

    //立即执行类的实例
    immediatellyInvokeClass.innerMethod();

    var privateClass = new PrivateClass('barFoo');
    privateClass.publicMethod();

    console.log('================simple test for map=====================')
    var map = new Map();
    map.set("key", "value");
    var otherClassKey = new OtherClass();
    map.set(otherClassKey, "otherclass");
    console.log(map);
    console.log(map.get(otherClassKey));


    var setterAndGetter = new SetterAndGetter();
    setterAndGetter.Attribute = 'setted attr';
    setterAndGetter.SecondAtrr = "second set attr";
    console.log(setterAndGetter.Attribute);
    //todo:// 属性的descriptor是什么东西?
    var attrDescriptor = Object.getOwnPropertyDescriptor(SetterAndGetter.prototype, 'Attribute');
    console.log('attrDescriptor', attrDescriptor);
    //每一组不同的set key拥有一组不同的descriptor
    var secondAttrDescriptor = Object.getOwnPropertyDescriptor(SetterAndGetter.prototype, 'SecondAtrr');
    console.log('second Descriptor:', secondAttrDescriptor);

    //set get 是不存在属性的 只有Descriptor的存在
    console.log('has properties', setterAndGetter, Object.hasOwnProperty('Attribute'), 'get' in attrDescriptor);

    new Array();
}


//=================================Symbol 部分==================================//

function mainSymbol() {
    let functiona = Symbol('functiona');
    let obj = {
        functiona: function () {
            console.log('I am normal obj function!');
        }
    };
    obj[functiona] = function () {
        console.log('I am symbol obj function!');
    }

    obj.functiona();
    obj[functiona]();
    obj['functiona']();
    /*通过字符串的方式进行数组调用 其实调用的是默认方法(普通定义的方法)*/
}

var readFilePromise = require('fs-readfile-promise');

//构建的时候执行 但是并没有发现异步执行的特征
//难道只是所在同一个线程的异步？首先本轮主流程 Promise中的函数均执行完毕之后才会调用then中的方法
function PromiseFunction() {
    var promise1 = new Promise(function (resolve, reject) {
        console.log("start Promise1");
        var i = 0;
        while (i < 10000000000000000) {
            i += Math.random() * 10 % 10
        }
        resolve("Promise1" + i);
        console.log("Promise1 finish!");

    });
    //
    // var promise2 = new Promise(function (resolve, reject) {
    //     console.log("start Promise2");
    //     var i=0;
    //     while (i<1000000000){
    //         i+= Math.random()*10%10
    //     }
    //     resolve("Promise2"+i);
    //     console.log("Promise2 finish!");
    //
    // });
    promise1.then((result => {
        console.log('resolved' + result)
    }));
    // promise2.then((result=>{console.log('resolved'+result)}));
    //
    // console.log('call then!');

    //promise catch 掉的异常 下面的then方法还是会被调用，只是没有结果参数传递（也可以在catch的方法里面返回一个值，then之后便可以得到这个值）
    //没有抛出异常则不会进入catch字段
    // var catchPromise = new Promise(((resolve, reject) => {
    //     // throw Error("test Error");
    //     resolve('resolved value' + new Date().getTime());
    // })).catch((error) => {
    //     console.log("Error:" + error);
    //     return "catch error" + new Date().getTime();
    // }).then((result) => {
    //     console.log(result);
    //     return result;
    // });

    //验证了Promise被构造出来之后，便会被执行。执行结果会被缓存。
    //后面多次调用then的时候可以得到之前相同的结果
    //调用then之后时间为之前catch设置的时间，而不是当前立即设置的时间
    // catchPromise.then((result) => {
    //     console.log("result from end then:" + result);
    // });

    //p1 p2 抛出的异常只要有一个被catch了下面的异常便不会再被收到
    var p1 = new Promise(function (resolve, reject) {
        throw new Error("first throw!");
    }).catch((error) => {
        console.log('p1 catch:' + error);
    }).then(() => {
        return "p1 resolved!";
    });
    var p2 = new Promise(function (resolve, reject) {
        resolve("p2 resolved!");
    });

    Promise.all([p1, p2]).then(([v1, v2]) => {
        console.log(`v1: ${v1} v2: ${v2}`)
    }).catch((error) => {
        console.log(error);
    });

    console.log('======================promise resolve========================');
    setTimeout(function () {
        console.log('three');
    }, 0);

    Promise.resolve().then(function () {
        console.log('two');
    });

    console.log('one');

    //promise 读取文件的操作
    // readFilePromise('./es6-grammar.js',null).then((data)=>{
    //     console.log(data.toString());
    // })
}

var thunkify = require('thunkify');

function GeneratorFunction() {
    function add2(x) {
        console.log("add:" + x)
        return x + 2;
    }

    function* gene1(x) {
        var y = yield add2(x);
        console.log("y:" + y);
        y = yield add2(y);
        return y;
    }

    var gene = gene1(1);
    console.log('start next!');
    var step1 = gene.next().value;
    console.log(step1);
    //表示使用step1的执行结果 去执行step2
    console.log(gene.next(step1).value);

    //thunk 原为传名调用 在javascript中实际为传值调用
    //thunkify模块实际为封装方法调用参数，使其只暴露一个callback的方法
    function willThunkify(a, b, callback) {
        console.log("call willThunkify");
        callback(a + b);
    }

    var thunked = thunkify(willThunkify);
    thunked(1, 2)(console.log);

}

//探究javaScript是否整的可以支持并发调用
var fs = require('fs');
var co = require('co')
function concurrentFunction() {
    // fs.readFile('./es6-grammar.js',null,function (error, data) {
    //     console.log(data.toString());
    // });
    // //先执行该console再执行 输出文件内容
    // console.log("end read!");

    //==============================并发执行模块的测试========================
    // function* concurrentgenetor() {
    //     var res = yield [
    //         new Promise(function (resolve, reject) {
    //             console.log("start Promise1");
    //             var i = 0;
    //             while (i < 1000000000) {
    //                 i += Math.random() * 10 % 10
    //             }
    //             resolve("Promise1" + i);
    //             console.log("Promise1 finish!");
    //         }),
    //         new Promise(function (resolve, reject) {
    //             console.log("start Promise2");
    //             var i = 0;
    //             while (i < 1000000000) {
    //                 i += Math.random() * 10 % 10
    //             }
    //             resolve("Promise2" + i);
    //             console.log("Promise2 finish!");
    //         })];
    //
    //     console.log("res:"+res);
    // }
    //
    // var concurrentgenetor1 = concurrentgenetor();
    // //单次循环4s
    // console.log("start time"+new Date().toLocaleTimeString());
    // var i = 0;
    // while (i < 1000000000) {
    //     i += Math.random() * 10 % 10
    // }
    // console.log("end time"+new Date().toLocaleTimeString());
    //
    // //用yield让出执行权 再去执行还是需要8s
    // console.log("start time"+new Date().toLocaleTimeString());
    // var value = concurrentgenetor1.next().value;
    // console.log("end time"+new Date().toLocaleTimeString());
    //
    // console.log(value)


//    ============================Stream 模块的测试==================================
    var readStream = fs.createReadStream('./LesMiserables.txt');
    let valjeanCount = 0;
    let loopCount = 0;
    co(function* () {
        while (true) {
            const res = yield Promise.race([
                new Promise(resolve => readStream.once('data',resolve)),
                new Promise(resolve => readStream.once('end',resolve)),
                new Promise((resolve,reject)=> readStream.once('error',reject)),
            ]);
            loopCount++;
            if (!res){
                break;
            };
            readStream.removeAllListeners('data');
            readStream.removeAllListeners('end');
            readStream.removeAllListeners('error');
            valjeanCount += (res.toString().match(/valjean/ig) || []).length;
        }
        //累计1119个字符 读取该文件进行了52次 循环
        console.log('count:'+valjeanCount + 'loopCount:'+loopCount);

    });
    //js 只有一个线程 读取主线程 优先完成任务
    console.log("main loop end!")


}


//=====================================Main部分================================//
function main() {
    // mainSymbol();
    // mainClass();
    // PromiseFunction();
    // GeneratorFunction();
    concurrentFunction();
}

main();