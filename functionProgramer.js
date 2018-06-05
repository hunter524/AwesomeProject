var _r = require("ramda");
var _f = require("folktale");

var todo = "hunter stockton thompson";
function functionProgramer() {

    //point free (与参数无关的写法)
    var sayPointFree = _r.compose(_r.join("-"),_r.map(_r.compose(_r.toUpper,_r.head)),_r.split(' '));
    console.log(sayPointFree(todo));

    //与参数有关的写法
    var sayWithParam= function (name) {
       return name.split(' ').map(_r.compose(_r.toUpper,_r.head)).join('-')
    };
    console.log(sayWithParam(todo));

}

function appendHead(head) {
    var time = new Date().getTime();

    return function (str) {
        return `time:${time} ${head} ${str}`
    }
}

functionProgramer();

//调用该方法时返回一个新的方法时 该处的事件便已经固定下来了
var append = appendHead("I am ");

//两个调用相同方法的地方时间是相同的
console.log(append('Hunter'));
console.log(append('Hunter542'));
var literalReg =/[0-9]*g/;
var regExp = new RegExp("[0-9]*g");
var s = 'ssss111g'.replace(regExp,'H');
console.log(s);


function Container(x) {
    this._value = x;
}

Container.of=function (x) {
    return new Container(x);
};

var container = Container.of({name:'hunter'});
console.log(container);
container = Container.of(1);
console.log(container);

Container.prototype.map = function (f) {
  return Container.of(f(this._value));
};

container = container.map(function (v) {
    if (typeof v === 'number') {
        return v*2;
    }
    return v;
});
console.log(container);

console.log(_r.add(1)(2));


//JS函数式编程指南 io_window示例有误，map完成之后返回的还是FunctionWrapper包裹的 compose组合的方法。
//不停的map即为不停的外层向内层compose
function FunctionWrapper(x) {
    this.__value = x;
}

FunctionWrapper.prototype.map=function (f) {
    return new FunctionWrapper(_r.compose(f,this.__value));
};

var functionWrapper = new FunctionWrapper(function () {
    return {name:'hunter'};
});
var mapped = functionWrapper.map(function (obj) {
    console.log(obj);
    return obj.name;
});


console.log(mapped instanceof FunctionWrapper, mapped.__value());

var mapUpper = mapped.map(function (str) {
    return _r.toUpper(str);
});

console.log(mapUpper instanceof FunctionWrapper,mapUpper.__value());

//toPairs操作{'a':1,'b':2} =>[['a',1],['b',2]]
var parampairs =_r.compose(_r.toPairs,_r.last,_r.split('&'));
console.log(parampairs('a&b&c'));


//
var mapfun = function (i) {
  return "l"+i;
};
//两个方法不相等 但是两个方法的结果是相等的
console.log("同一律：",_r.map(mapfun) === mapfun);
//先调用一个map去转换一个 function 与 直接调用map function的结果是相同的
//只不过调用map返回的是一个转换后的[],直接调用map只是返回一个转换完成的元素
console.log(_r.map(mapfun)("2"),mapfun("2"));


//concat 是拼接在concat(args) 参数的后面
var whoIsHunter = _r.map(_r.compose(_r.concat("Hunter "),_r.concat("am ")));
var whoIsHunter2 = _r.compose(_r.map(_r.concat("Hunter ")),_r.map(_r.concat("am ")))
//同一律两次结果相同
console.log(whoIsHunter("I"),whoIsHunter2("I"));

var maybeOfmaybe = _f.maybe.of("maybe");
console.log(maybeOfmaybe);
var maybeOfundefined = _f.maybe.of(undefined);
console.log(maybeOfundefined);
var maybeOfmaybemaybe = _f.maybe.of(_f.maybe.of("recursive"));
console.log(maybeOfmaybemaybe);
//error
// console.log(_r.chain(maybeOfmaybe,(v)=>'hello'+v).call());
// var join = _r.join(maybeOfmaybe);
// console.log(join(maybeOfmaybe));
var joined = [1,2,3].join('-');
console.log(joined);