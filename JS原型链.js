// 所有引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除‘null’以外）
// 所有引用类型（数组、对象、函数），都具一个_proto_ （隐式原型）属性，属性值是一个普通对象
// 所有函数，都有一个prototype（显式原型）属性，属性值也是一个普通对象
// 所有引用类型（数组、对象、函数），_proto_ （隐式原型）属性值指向它的构造函数的prototype（显式原型）属性值
// 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的_proto_ （即它的构造函数的prototype）中寻找
    //构造函数
    function Foo(name, age){
        this.name = name;
    }
    Foo.prototype.alertName = function(){
        alert(this.name)
    }
    //创建实例
    var f = new Foo('zhangsan');
    f.printName = function(){
        console.log(this.name);
    }
    //测试

    f.toString(); //要去f._proto_._proto_中查找
    /*
     f自身没有toString这个属性, 那么f会去它的隐式原型_proto_（即它的构造函数的prototype）中寻找，而f的构    造函数也没有toString这个属性，那该往哪里找？
     原型规则中第二、三条提到：所有引用类型（数组、对象、函数），都具一个_proto_（隐式原型）属性，属性值是一个普通对象，意思f._proto_（f.prototype）是个对象
     f._proto_是个对象，那么该往f._proto_隐式原型中寻找，即f._proto_._proto_  （f._proto_寻找其对象的构造函数也就是Object）
    * */