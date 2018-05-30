var _ = require("ramda");

var todo = "hunter stockton thompson";
function functionProgramer() {

    //point free (与参数无关的写法)
    var sayPointFree = _.compose(_.join("-"),_.map(_.compose(_.toUpper,_.head)),_.split(' '));
    console.log(sayPointFree(todo));

    //与参数有关的写法
    var sayWithParam= function (name) {
       return name.split(' ').map(_.compose(_.toUpper,_.head)).join('-')
    };
    console.log(sayWithParam(todo));

}

functionProgramer();