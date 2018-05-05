//启用flow检测标记方法传递的参数类型
//使用babel命令进行翻译操作
//使用babel node 进行运行操作
//@flow

function add(num1:number,num2:number) {
    var number = num1+num2;
    console.log(`add result is ${number}`)
}

// add('22','33');
add(1,1);