var fs = require("fs");
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

    console.log(Number.EPSILON)
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
stringTemplate();