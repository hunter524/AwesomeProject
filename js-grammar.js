
var fs = require("fs");
var btoa = require("buffer");
var atob = require("buffer");

a = 2;
function hello(name) {
  console.log('hello'+name);
  var cls = new Class();
  var sum = cls.add(10,10);
  console.log('sum:'+sum.toString(10));

  var content = fs.readFileSync('/home/hunter/a8temp.properties').toString();
  console.log(content);
}

function letfunc() {
    var al = [];
    var av = [];
    for (let i = 0;i<10;i++){
      al[i] =function () {
          console.log('al i is:'+i.toString(10))
      };
    }

    for (var i=0;i<10;i++){
        av[i] = function () {
            console.log('av i is:'+i.toString(10))
        }
    }

    console.log('start print al[]')/*expect print 0 to 9*/
    for (let i = 0;i<10;i++){
        al[i]();
    }

    console.log('start print av[]')/*expect just print 9*/
    for (let i = 0;i<10;i++){
        av[i]();
    }


    for (let v of av){/*for in 则是 string类型 for of 则是function类型 grammar*/
        console.log(typeof v);
    }

    // console.log(letvarbefore);/*let 声明的变量无法在声明之前使用,运行使报错*/
    // let letvarbefore = 5;

    console.log(varbefore);/*var 声明的变量可以在var声明前使用，只是输出undefined（变量提升）*/
    var varbefore = 6;
    console.log(varbefore);

//    temporal dead zone 暂时性死区
    function tdz(x = y, y = 2) {
        console.log('x:'+x.toString(10)+'y:'+y.toString(10));
    }
    // tdz(1,3);
    // tdz()/*y在声明之前使用了,形成了暂时性的死区*/

    function notTDZ(x = 2, y = x) {
        console.log('x:'+x.toString(10)+'y:'+y.toString(10));
        //var a 可以重复声明 多次 但是 let 变量即不可以重复声明
        // let a = 1;
        // var a = 2;

        // var a = 1;/*ok var重复声明*/
        // var a = 2;

        //let 与 const 一样不可以重复声明
        // var a;
        // const a = 2;

        console.log('a is :'+a.toString(10));
    }
    console.log('top variable a:'+a);
    global.a = 1;
    console.log('global variable a:'+a);

    notTDZ();

}

function destructuringFunc() {
    let [a,b,c] = [1,2,3];
    let array = [1,2,3,4];
    console.log('a:'+a+'b:'+b+'c:'+c);
    // Todo://什么是[1]/*[1,2,3] 代表 数组*/[0]
    console.log('type of [1][0]:'+typeof [1,2,3,4][3]+"[1][0]:"+[1,2,3,4][5]);

    let obj = {first: '1',second: '2'};
    let{first,second} = obj;
    console.log('first:'+first+' second:'+second);
    let{first:f,second:s} = obj;
    console.log('f:'+f+' s:'+s);
    //嵌套解构操作
    let deepDestruc = {first:{second:'2'}};
    let {first:df,first:{second:ds}} = deepDestruc;
    console.log(`df : ${df} ds : ${ds}`);
    //解构时的默认值 只有当值严格等于 undefined时才会生效
    let {defautlDesturct=3} = {defautlDesturct:4};
    console.log(`defautlDesturct: ${defautlDesturct}`);
    let {defautlDesturct2 = 3} = {defautlDesturct2:undefined};
    console.log(`defautlDesturct: ${defautlDesturct2}`);
    //先声明后解构 需要用小括号包裹起来，避免被识别为代码块
    let destructAfterDecalar;
    ({destructAfterDecalar} = {destructAfterDecalar:2});
    console.log(`destructAfterDecalar ${destructAfterDecalar}`);
    //
    let[arr1,arr2] = 'he';
    console.log(`arr1: ${arr1} arr2: ${arr2}`);


    var beforeMap = [[1,2],[3,4]];
    var afterMap = beforeMap.map(([a,b])=>a+b);
    console.log(`beforeMap: ${beforeMap} ${typeof beforeMap} afterMap: ${afterMap} ${typeof afterMap}`);



    var jsonObject = {a:1,b:2};
    console.log(`json : ${jsonObject} json string ${JSON.stringify(jsonObject)}`);


    var undefinedVar = undefined;
    console.log("undefined typeof:"+typeof undefinedVar);
    console.log("typeof \"string\""+typeof "string ");
    //字符串模板
    var s2 = `string ${obj.second}`;
    console.log(`s2 is :${s2}`)
    console.log("typeof \'string\'"+typeof s2)
    var infinity = -Infinity;
    console.log(`type of Infinity: ${typeof infinity} infinity is ${infinity}`)
    var s123 = "123";
    var number = parseInt(s,10);
    console.log(`number typeof: ${typeof number}`);
    console.log("123"*2)
    var newVar = null;

    var arrayc = [0,1,2,3];
    array[5] = 6;
    console.log(array);
    delete array[0];
    console.log(array);
    array[6] = [7,7,7];
    console.log(array);
}

function stringTemplate() {
    // //写法一 通过一个字符串转换成一个方法
    // let str = 'return'+'`Hello ${name}!`';
    // let func = new Function('name',str);
    // var result = func('jack');
    // console.log(`result : ${result}`)

    //写法二 将一个字符串转换成一个方法
    let str ='(name)=>`Hello ${name}!`';
    let func = eval.call(null,str);
    console.log(func('jack'));

    let a = 5;
    let b = 10;
    tag `Hello ${a+b} World ${a*b}`
    function tag(stringArray,...value) {
        for (let v of stringArray){
            console.log(v)
        }

        for (let v of value){
            console.log(v)
        }
    }

    let totalName = 'TOTAL';
    let total = 30;
    var s = `${totalName} The total is ${total} (${total*1.05} total with tax)`;
    console.log(typeof  s);

    //传入的是string类型
    let msg = passthru (s);
    //传入的是object类型
    let msg2 = passthru`${totalName} The total is ${total} (${total*1.05} total with tax)`;

    // function passthru(literals) {
    //     console.log('typeof literals :'+typeof literals);
    //     let result = '';
    //     let i = 0;
    //     while (i<literals.length){
    //         var literal = literals[i++];
    //         console.log('literal:'+literal);
    //         result += literal;
    //         if (i<arguments.length){
    //             var arg = arguments[i];
    //             console.log('arg:'+arg);
    //             result += arg;
    //         }
    //     }
    //     return result;
    // }

    //字符串模板进入解析 会被区分成 字符串数组 和 值数组 （字符串常量进入字符串数组，${}表达式部分进入值数组）
    function passthru(literals, ...values) {
        let result = '';
        for (let v of literals){
            console.log(v)
            result += v;
        }

        for (let v of values){
            console.log(v)
            result+=v;
        }
        return result;
    }

    console.log('msg: '+msg);

    console.log('msg2: '+msg2);

    console.log('==========raw===========');
    var afterRaw = String.raw({raw:'test'},0,1,2);
    console.log(`after Raw: ${afterRaw}`);

    console.log`123 ${totalName}`
    console.log('123')

    var number = parseInt("1000",10);
    console.log(number);

    var fixed = number.toFixed(5);
    console.log(`number fixed: ${fixed}`)

    console.log(Number.EPSILON)


}

function numberFeature() {
    Math.trunc()
    Math.ceil()
}
global.id = 'global id!';

function functionFeature() {
    var func2ArgsNoDef = (function firstfunc(x, y) {});
    //默认参数要加载函数参数列表尾部，否则会影响function对象的length方法对参数个数的判断
    var func2Args1Def = (function firstfunc(/*x=1, */y,x=1) {});
    //throw error
    // var funcArgs =func.arguments.toString();
    // console.log(`function args: ${funcArgs}`)


    console.log(`func2ArgsNoDef args length: ${func2ArgsNoDef.length}`);
    console.log(`func2Args1Def args length: ${func2Args1Def.length}`);

    //方法传入函数
    let func = "outer statements";
    function funcVar(funVar = () =>func) {
        var result = funVar();
        console.log(result);
    }

    funcVar();


    funcVar(()=>"inner statements")
    funcVar("error inner statements")/*这一句抛错 Why？*/
    //匿名函数 以及 非匿名函数 名称和参数的变化
    //类似JAVA的反射？。。。。。
    let funName = function /*funcOtherName*/ (/*name*/) {
        console.log("anonymous function");
    };
    //两个toString返回的方法参数不同
    //bind方法是重新定义函数的作用域,同时返回一个新的方法
    var bind = funName.bind({});
    console.log(`funName fuc args length ${funName.length} func name: ${funName.name} func toString :${funName.toString()}`);

    funName.call();
    //toString 返回的方法体是native Code
    console.log(`bind fuc args length ${bind.length} bind name: ${bind.name} bind toString :${bind.toString()}`);
    bind.call();

    //apply 和 call 均是调用方法 返回值即是方法的返回值
    var apply = funName.apply();
    console.log(`apply typeof return ${typeof apply}`);


    // this 关键字 在 => 表达式中的引用
    function thisKeyWords() {
        setTimeout(()=>{
            console.log(`this id is: ${this.id}`)
        },100);

        setTimeout(function () {
            //todo:// 该出的this.id指向了何处？
            console.log(`this id is: ${this.id} global id is ${global.id}`)
        },101)
    }
    thisKeyWords.call({id:'object id'})
// 只是一个提案 不支持双引号的对象引用 改变方法的对象范围
//    kotlin中双引号 代表方法引用
//     {id:"key id"}::thisKeyWords();
    // var hasOwnPropety = Object.prototype.hasOwnPropety;
    // function hasOwn(obj, key){
    //     return obj::hasOwnPropety(key);
    // }
    // var bHasOwn = hasOwn({id:'object id'},'id');
    // console.log(`has own: ${bHasOwn}`)

}

function arrayFeature() {
    //参数序列<==>数组 可以相互转换
    function arrayParam(...params) {
        console.log(`param array rest ${params} typeof ${typeof params}`);/*数组的形式输出*/

        console.log("param array spread:",...params)/*转换为参数序列 */
    }
    arrayParam('H','E','L','L','O');


    let array = [1,2];
    console.log("array:",array);
    // 只是指针的引用
    // let arrayCopy =array;
    //数组的拷贝
    let arrayCopy = array.concat();
    arrayCopy[1] = 3;
    console.log(`array: ${array} arrayCopy: ${arrayCopy}`);

    console.log(` array type ${Array.prototype}`)
}

function booleanFeature() {
    var varUndefined = undefined;
    var varNull = null;
    var varEmptyStr1 ='';
    var varEmptyStr2 ="";
    var varZero = 0;
    var varNan = Number.NaN;
    if (!varEmptyStr1){
        console.log(`varEmptyStr1 is false`)
    }
    if (!varEmptyStr2){
        console.log(`varEmptyStr2 is false`)
    }
    if (!varUndefined){
        console.log(`varUndefined is false`)
    }
    if (!varNull){
        console.log(`varNull is false`)
    }
    if (!varZero){
        console.log(`varZero is false`)
    }
    if (!varNan){
        console.log(`varNan is false`)
    }
    if ([]){
        console.log(`empty array is true!`)
    }

    if ({}){
        console.log(`empty object is true!`)
    }

}

function numberFeature() {
    var number= 0.0000005;
    console.log(number)
}

function stringFeature() {
    var str1 = 'I am a String " \'\'';
    var str2 = "I am a String ' \"\"";
    var str3 = 'I \
am \
a \
String ';
    console.log(`str1 ${str1}`);
    console.log(`str2 ${str2}`);
    console.log(`str3 ${str3}`);

    //字符串可以使用数组下标取值，但是无法执行数组删除删除操作
    var str = String("array like!");
    var deletedStr = delete str[0];
    console.log(typeof deletedStr ,deletedStr);
    //执行删除操作 delete关键字返回一个删除的状态
    var charArray = ['a','b','c'];
    var deletedArray = delete charArray[0];
    console.log(typeof deletedArray,deletedArray,charArray)

    var wrongLengthString1 = '\uD834\uDF06';/*𝌆*/
    var wrongLengthString2 = '𝌆';
    console.log(`wrongLengthString1 length: ${wrongLengthString1.length} wrongLengthString2 length: ${wrongLengthString2.length}`)
    console.log(`wrong str1 is ${wrongLengthString1} wrong str2 is${wrongLengthString2}`)

    //btoa atob 只能在命令行中使用 实际中并无法使用
    // var afterBase64 = btoa("base64");
    // console.log(`after base64 ${afterBase64}`);
    // var decodeBase64 = atob(afterBase64);
    // console.log(`decode base64 ${decodeBase64}`);
    var base64Encode = Buffer.from("hello").toString("base64");
    var decodeBase64 = Buffer.from(base64Encode,'base64').toString();
    console.log(`encode ${base64Encode} decode ${decodeBase64}`)
}

function objectFeature() {
    var o1 = {'123k':'123v','1 2k':'1 2v',fun:function () {
            console.log('I am a fun in o1');
        }};
    var o2 = {bar:"is a bar!"};
    o1.foo = o2;
    var bar = o1.foo.bar;
    console.log(`bar is : ${bar}`);
    //数字变量对象不能使用.运算符号
    console.log(o1[123],o1['1 2']/*,o1.123*/);

    console.log(`o1 property : ${Object.keys(o1)}`);
    //删除对象属性 也可以用来删除数组元素（数组也是对象啊）
    delete o1.foo;
    console.log(`o1 property : ${Object.keys(o1)}`);
    //for in 遍历对象的属性值
    for(let v in o1){
        console.log(`v is ${v} type of v ${typeof  v}`);
        if(typeof v === "function"){
            v.apply();
        }
    }

}

function arrayFeature() {
    let firstArray = ['a',['b','c'],'d',100];

    firstArray[1000]='I am 1000';/*中间会空出996个元素*/

    console.log(`first array: ${firstArray}`);
    console.log('first array',firstArray);

    //数组的key是以 1 2 3 4 开头的
    for (let field in firstArray){
        console.log(`iterator array key ${field}`)
    }

    //set array length to delete
    firstArray.length = 2;
    console.log('first array after set length to 2:',firstArray);
    //set length to 0 is means remove all elements in array
    firstArray.length = 0;
    console.log('first array after set length to 2:',firstArray);

    //set array length to max
    firstArray.length = Math.pow(2,32)-1;
    firstArray[0] = 1;
    firstArray[firstArray.length-1]=2;
    console.log('first array after set length to max:',firstArray);

    firstArray.p = 'I am a Property Not a Elements';
    for (let v in firstArray){
        console.log('property in array is:',v);
    }
    //for each 遍历数组
    firstArray.length = 0;
    firstArray.length = 10;
    firstArray[0] =0;
    firstArray[1] = 1;

    firstArray.forEach((v,i,array)=>{
        console.log(`for each is:'v is ${v} index is ${i} array is ${array}`)
    });

    //数组的空位在 forEach 遍历元素 for in 遍历key时是无法遍历到的
    let blankArray = [1,,,];
    blankArray.forEach((v)=>{
        console.log(`blank array: ${v}`)
    });
    //undefined 是可以遍历到的
    let undefinedArray = [undefined,undefined,undefined];
    undefinedArray.forEach((v)=>{
        console.log(`undefined Array: ${v}`)
    })



}

function functionFeatureBase() {
    var addFunc = new Function('x','y','return x+y;');
    var sum = addFunc(2,3);
    console.log(`call addFunc sum is ${sum}`);
    //由于函数名的提升作用 函数的第一次声明 无论何时都是无效的 只有第二次声明才是有效的
    //函数也是变量 函数的声明 也如同变量声明一样 有提升的作用
    function f() {
        console.log('I am first f');
    }
    f();
    function f() {
        console.log('I am second f');
    }
    f();

    //声明被提升 但是赋值并不会被提升
    //因此调用fv 时 fv只是被声明了，并没有被赋值成函数的引用
    // fv();
    // var fv = function () {
    //     console.log('I am a fv')
    // }

    //上下的写法等价
    // var fv;
    // fv();
    // fv = function () {
    //     console.log('I am fv');
    // };

    var sliceArray = [1,2,3,4,5,6,7];
    //将数组中的元素通过 | 链接成为字符串
    var sliced = sliceArray.slice(0,2).join('|');
    console.log(sliced);

    function localvar() {
        var localvar = 'functionlocal';
        //if 等内部声明的变量可以读取
        if (true){
            var localvarFake = 'fake local var';
        }
        console.log(localvarFake);
    }
    localvar();

    function paramOverLoadFund(a,b) {
        console.log(a,b,'arguments length',arguments.length);
    }
    //无法省略 前面的参数 只可以省略后面的参数，省略前面的参数只能显示的传入undefined
    paramOverLoadFund();
    // paramOverLoadFund(,2);
    paramOverLoadFund(undefined,2)
    paramOverLoadFund(3);
    paramOverLoadFund(1,3);

    //闭包记住start 返回内部的increaser
    //类似于java的非静态内部类持有外部类的引用
    function increaseClosure(start) {
        return function increaser() {
            start ++;
            console.log(start);
        }
    }
    var increacement = increaseClosure(6);
    increacement();
    increacement();
    increacement();

    //返回函数 使变量私有化
    function Person(name) {
        var _name = name;
        var _age = 0;
        function getAge() {
            return _age;
        }

        function setAge(age) {
            _age = age;
        }

        return{
            name:_name,
            setAge:setAge,
            getAge:getAge
        }
    }

    var person = Person("cant change name");
    console.log(person,person.getAge());

    person.setAge(25);
    console.log(person,person.getAge());

    //无法返回person的age变量 类似于java中的私有变量的功能的实现
    console.log(person.age);


    //定义方法之后立即调用的语法
    (function immediatelyInvokeFunctionExpression() {
        console.log('call funtion immediately after definition!');
    }());
    //通过eval 执行js定义变量
    eval("var evalvar = 'evalvar';");
    console.log('evalvar by eval:',evalvar);
    var jsonString = JSON.stringify({name:'name',age:25,sex:1},(key,value)=>{
        console.log("replacer",key,value);
    },"==");
    console.log(jsonString);

}

function operatorFeature() {
    // var obj = [1];
    var  obj = {name:'hunter'};
    var s = obj.valueOf().toString();
    console.log(s);

    //对象操作符的运算 先执行 valueOf操作，如果valueOf返回的是原始类型（基础类型）则不再调用toString方法
    //否则一般需要先调用valueOf方法 再调用 toString方法 然后执行 +等操作
    var operatorObj = {
        name:"hunter",
        valueOf:function () {
            return 2;
        }
    }

    var objAddResult = 2+operatorObj;
    console.log("objAddResult is 2+2=4",objAddResult);

    var dateObj = Date.now();
    //todo:://无法调用date的该方法，为什么？
    // console.log(dateObj.toISOString());

    var v2squ4 = 2**4;
    console.log(v2squ4)
    var num = Number('525');

//    == (不严格相等） 与 ===（严格相等）的区别
    console.log(1==='1');
    console.log(1=='1');

    console.log(undefined === null);// false
    console.log(undefined == null);//true

    console.log(!undefined,!null,!0,!'',!NaN,!false);//just this return true others return false
    console.log(!{},![]);//return false

    var andAfter = '1'&&'after and';
    console.log(andAfter);

    var andBefore = (1-1)&&'after and';
    console.log(andBefore);

    var orAfter = ''||'or After';/*false 取后面的值 与 &&相反*/
    console.log(orAfter);

    var orBefore ='true'||'or After';/*true 则取前面的值*/
    console.log(orBefore);

    var v2squ32 = 2**32;
    console.log(v2squ32.toString(2))/*33位*/
    console.log((v2squ32-1).toString(2),'',((v2squ32-1)|0).toString(2),(-1).toString(2));/*负数的表示 为原码 +1 取反 =>补码  补码-1 取反得到原码*/
    console.log((v2squ32+1).toString(2))

    var a = 10;
    var b = 11;
    a = a^b;
    b = a^b;
    a = a^b;
    //三次亦或可以交换a b的值
    //原理为a异或b两次则得到a，同理b异或a两次得到b a^b^b = a^0=a
    console.log(a,b);

    a = 1<<3;
    console.log(a,a>>1,a>>2);
    console.log(a,a>>>1,a>>>2);

    a = -1<<3;
    console.log(a,a>>1,a>>2);
    console.log(a,a>>>1,a>>>2);

}

function conversionFeature() {
    //NaN 不等于任何一个值 包括其自己
    var number = Number('324abc');
    // var parseInt = parseInt('324abc');/*无法调用这个方法*/
    console.log(number,isNaN(number),parseInt);

    var cantConversion = {
        valueOf:function(){
            // return 123;/*pair 1*/
            // return {}; /*pair 2*/
            return {}; /*pair 3*/


        },
        toString:function () {
            // return {} /*pair 1*//*conversion result is 123*/
            // return {}; /*pair 2*//*throw TypeError: Cannot convert object to primitive value*/
            return 123 /*pair 3*/ /*123=> result is 123  '123'result is '1230'*/
        }
    };

    //对象转换成number 先调用valueOf 再调用toString 如果两个返回的都是obj则会报错
    //对象转换成string 先调用toString 再调用valueOf 如果两个返回的都是obj则报错，valueOf返回的是原始类型则对其再调用String()方法

    var result = cantConversion+0;
    console.log(result);

//    对象转换成Boolean值
    console.log(Boolean(undefined),Boolean(null),Boolean(''),Boolean(0),Boolean(-0),Boolean(NaN));/*all is false*/
    console.log(Boolean(new Boolean(false)));/*is true false对象的bool值为true*/

    //或false 取后面的字符串's' 's'返回的是true
    if (''||'s'){
        console.log("or get after")
    }
    //与 true get后面的值，后面的值为 'ss'预期返回true
    if ('s'&&'ss'){
        console.log('and get after!')
    }

    // eval("int 1a = 1;")/*throw SyntaxError: Invalid or unexpected token (命名不符合规范的错误)*/


    //定义了一个新的类 function变成了新的类的构造方法
    //try catch 一个自定义的Error
    function UserError(message) {
        this.message = message || '默认信息';
        this.name = 'UserError';
    }
    UserError.prototype= new Error();
    UserError.prototype.constructor = UserError;
    try {
        throw new UserError('throw error!');
    }catch (e){
        console.log(e.name,'|',e.message,'e instanceof UserError:',e instanceof UserError,'e type of:',typeof e);
        console.log(e.stack)
    }
    //try catch catch 捕获可能不是error而是任意一种类型
    //throw 之后下面的代码不再会继续执行 如果catch的不是error e便不再拥有error对象的任何信息
    try {
        // throw "I am not a error but throw it";

        // throw {message:'has message but not a error!',name:'has name but not error!'};

        throw new RangeError('I am a range Error!');

        console.log('after throw');
    }
    catch (e){
        console.log(e.name,'|',e.message,'e instanceof Error:',e instanceof Error,'e type of:',typeof e);
        console.log(e.stack);
        if (e instanceof RangeError){
            console.log("I am a RangeError!")
        }
    }

    // 同java一样最终都会执行finally中的return语句（如果存在的话）不存在finally 如果抛出异常则执行 catch中的return语句
    //  如果finally中不存在return语句，且未抛出异常。在先执行finally再执行try中的return语句
    //  return语句会被先执行，然后finally执行完成之后再返回return语句的结果
    //  java中如果抛出的异常不处于异常表中则（不再catch的异常中，则直接执行finally代码块中的代码
    //  java中是通过改变生成的字节码文件完成 return语句的重定向操作（实际try 中的return语句并不会被编译生成字节码文件）
    function tryCatchFinally() {
        try {
            console.log("execute try!");
            throw new RangeError("out ouf bounds!");
            return 'from try!'
        }
        catch (e){
            console.log('execute catch!');
            return 'from catch'

        }
        finally {
            console.log('execute finally!')
            // return 'from finally!'
        }
    }

    console.log('call tryCatchFinally:',tryCatchFinally())

}

function codeStyleFeature() {
    function blockReturn() {
        //换行的block会被在末尾加上;
        // return
        // {
        //     name:"name"
        // }

        //不换行的代码块表示返回一个对象
        return{
            name:"name"
        }

    }
    var result = blockReturn();
    console.log(result.name);

    var a = 'b'; //不加分号，则不会识别成数组
    ['green','blue'].forEach((v,i,array)=>{
        console.log(v,i,array);
    })

    var a = 'b'['green','blue'];
    console.log('a is:',typeof a);


    //switch 可以通过普通的方式实现，也可以通过object的方式进行实现
    function switchNormalStyle(condition) {
        switch (condition){
            case 'hack':
                return 'hack';
                break;
            case 'slash':
                return 'slash';
                break;
            case 'run':
                return 'run';
                break;
            default:
                throw Error('condition is wrong!')
        }
    }

    function switchObjectStyle(condition) {
        var actions = {
            'hack':function () {
                return 'hack';
            },
            'slash':function () {
                return 'slash';
            },
            'run':function () {
                return 'run';
            }
        };
        if (typeof actions[condition] !== 'function'){
            throw new Error('condition is wrong');
        }
        return actions[condition]();
    }
    var normalResult = switchNormalStyle('hack');
    var objectResult = switchObjectStyle('hack');
    console.log('n:',normalResult,'o:',objectResult);

    //以下两种方式调用均出错
    // switchObjectStyle('hello');
    // switchNormalStyle('hello');
}


//对象特性
function objectFeature() {
    //使用严格模式之后
    //函数调用 this不再可以指向全局对象，因此不用new 时调用构造函数会报错
    var Vehicle = function () {
        'use strict';
        this.name = 'BMW';
    }
    // var  vc = Vehicle();
    //使用new函数之后 this指向了对象自己
    var vc = new Vehicle();
    console.log(vc);

    //构造函数内部判断是否 是方法调用 还是 new 调用构造函数
    //如果
    var CallConstructorInside = function () {
        if (!(this instanceof CallConstructorInside)){
            console.log('call new Inside! ')
            return new CallConstructorInside();
        }
        this.value = 'value'+((Math.random()*100)|0);
        this.key = 'key';
    }

    //普通的函数调用方式
    var callConstructor = CallConstructorInside();
    console.log(callConstructor);
    callConstructor = new CallConstructorInside();
    console.log(callConstructor);

    var ConstructReturn = function () {
        this.value = 'value';
        // return "function return";
        return {value:'other obj'}
    };
    //如果调用的是new 初始化构造函数
    //如果函数返回的是一个对象 则直接返回一个对象
    // 如果返回的不是一个对象而是基础数据则返回构造函数自身的this引用
    var consructReturn = new ConstructReturn();
    console.log(consructReturn);
    //如果直接调用构造方法则直接返回的函数的返回语句返回的值
    console.log(ConstructReturn());

    //普通函数也可以 使用new 其返回的是一个空的对象
    function nullFunction() {

    }
    //todo::_proto_ 与 prototype 依旧理解错误
    // //prototype代表当前对象的原型(父类)
    // //_proto_代表当前对象的类型
    // nullFunction.prototype = new Array();
    // nullFunction.__proto__ = Array;
    var emptyConstructor = new nullFunction();
    // emptyConstructor[0] = 1;
    // emptyConstructor[2] = '222';
    // emptyConstructor.length = 200;
    // console.log(emptyConstructor.length);

    console.log(emptyConstructor,emptyConstructor instanceof Object,emptyConstructor instanceof nullFunction,
        'nullFunction prototype:',emptyConstructor.prototype,'nullFunction _proto_:',emptyConstructor.__proto__);


    Object.print = function () {
        console.log('Object print!')
    };

    Object.prototype.print = function () {
        console.log('object print!')
    };

    //类似java类上的方法的调用（js 叫对象自身的方法 静态方法）
    Object.print();
    //类似java对象上方法的调用
    var obj = new Object();
    obj.print();

    //无法获取到类型的对象的创建新的对象 使用Object create
    // 如果有构造方法则可以使用new操作符进行新的对象的创建
    var noTemplateObj = {
        'name':'NAME',
        'age':'AGE'
    };
    console.log('noTemplateObj:',noTemplateObj);

    var copyOfnoTemplateObj = Object.create(noTemplateObj);
    console.log('copyOfNoTemplateObj:',copyOfnoTemplateObj);
    copyOfnoTemplateObj.name = 'modified';
    console.log('modified copyOfNoTemplateObj:',copyOfnoTemplateObj);

    console.log('show again noTemplateObj:',noTemplateObj);

    //this 的指针取决于当前方法所在的对象
    //方法能脱离对象存在,方法中的this也取决于方法运行时所处于的对象
    //即方法能与对象进行任意的组合
    function sayName() {
        console.log('my name is',this.name)
    }

    var person1 = {
        name:'bob',
        sayName:sayName,
    };

    var person2 = {
        name:'Alice',
        sayName:sayName
    };

    person1.sayName();
    person2.sayName();

    //通常在外部方法中调用方法
    //this 代表global对象 global代表运行环境这个对象
    global.name = 'OutSideName';
    //在node中this等于global这个全局对象
    console.log(this === global);
    sayName();

    //以下三种方式的方法调用依旧相当于 全局对象的操作
    //sayName 只是存储的方法地址 下面三种操作相当去除方法的地址进行方法调用,方法的调用环境为全局环境
    (person2.sayName = person2.sayName)();
    (false || person2.sayName)();
    (1,person2.sayName)();
    //取出方法的地址再进行调用 this也指向了全局环境
    //实际确定this是通过调用对象的地址 再调用方法而确定的.
    var funSayNameAddr = person2.sayName;
    funSayNameAddr();

    // 变量提升导致的this引用指向改变
    //f2
    var badthis = {
        f1:function () {
            console.log('this from f1:',this.toString());
            var f2 = function () {
                console.log('this from f2:',this.toString());
            }();
        }
    }
    badthis.f1();

    //上面的代码等同于下面的代码
    //temp的执行环境为全局
    var temp = function () {
        console.log(this.toString());
        console.log(arguments);
    };
    var o = {
        f1: function () {
            console.log(this.toString());
            var f2 = temp();
        }
    };
    o.f1();

    //array 插入map 与reduce相关的操作
    //thisArg的操作是改变foreach操作中函数内部this的引用更改
    let array = ['1','2','3','4','5','6','7','8'];
    let arrayNum = [1,2,3,4,5,6,7,8];

    let mapedArray = array.map((v)=>{
        return v+'map'
    });
    console.log(mapedArray);
    console.log(array.reduce((p,c)=>{return p+c}));

    //todo://高阶函数的写法 暂时编译报错
    // var highFunction = {
    //     a:'prefixA_a',
    //     b:'prefixB_b',
    //     forEach:function (call:(prefix:string)=>void){
    //         call(this.a.split('_')[0]);
    //         call(this.b.split('_')[0])
    //     }
    // };
    //
    // highFunction.forEach((pre)=>{
    //     console.log('pre fix:',pre);
    // })


    //方法的call可以传入参数 ,同时也可以改变this的作用范围
    //bind 返回一个this被改变的新的函数
    //apply 改变this立即调用,传入数组参数
    //call 改变this立即调用 传入可变长参数
    temp.call(badthis,'a','b','c');
    temp.call(null);

    var obj = {};
    console.log(obj.hasOwnProperty('valueOf'));
    //js的继承复写方法只需要将方法重新赋值即可
    obj.hasOwnProperty= function () {
        return true;
    };
    //return true
    console.log(obj.hasOwnProperty('valueOf'));
    //apply 可以接收一个数组 通常的max方法只能接收一个可变长的参数
    var number = Math.max.apply(null,array);
    console.log(number);

}

class Class{
  constructor(){
    console.log("constructor")
  }

  add(a,b){
    console.log("call add");
    return a+b;
  }
}

// hello(new Class());
// letfunc()
// destructuringFunc()
// stringTemplate();
// numberFeature();
// functionFeature();
// arrayFeature();
// booleanFeature();
// numberFeature();
// stringFeature();
// objectFeature();
// arrayFeature();
// functionFeatureBase();
// operatorFeature();
// conversionFeature();
// codeStyleFeature();
objectFeature();