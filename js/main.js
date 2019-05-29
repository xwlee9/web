// 字符串

// alert(Math.PI);
// alert("hello word");
// console.log("hello".length);
// console.log("hello".charAt(0));
// console.log("hello word".replace("hello", "bye"));
// console.log("hello word".toUpperCase());
// console.log("HELLO word".toLowerCase());


// 变量

var name = "li";  // 全局作用域
console.log(name);

let a = 1;  // 局部作用域
console.log(a);

a = 1 + 1;
console.log(a);

let b = "you";
console.log(b);

// 常量

const pi = 3.14;
console.log(pi);

// ==  ===

console.log(123 == "123");  // 有类型转换
console.log(123 === "123");  
console.log(1 === true);

// if
if (name == "jack")
{
    console.log("jack");
}
else
{
    console.log("rose");
}

var age = 20;
for (let i = 0; i < 5; i++)
{
    age++;
    console.log(age);
}

var allowed = age > 20 ? "Yes" : "No";
console.log(allowed);

switch(name)
{
    case "jack":
        console.log("jack");
        break;
    case "rose":
        console.log("rose");
        break;
    default:
        console.log("li");
}

// 对象
var obj = new Object();
var obj2 = {};

obj = {
    name: "rose",
    age: "20",
    email: "example.gmail.com",
    contact: {
        phone: "123456",
        ins: "aaa"
    }
}

console.log(obj.contact.phone);
console.log(obj["contact"]["phone"]);

obj.age = "25";
console.log(obj.age);
obj.contact.facebook = "bbb";
console.log(obj.contact.facebook);


// 矩阵
var x = new Array();
var y = [];

x[0] = "dog";
x[5] = "cat";
console.log(x.length);

y[0] = "dog";
y[1] = "cat";
y[2] = "cow";
y[3] = "sheep";

for (let i in y)  // 只会遍历非空的
{
    console.log(y[i])
}
y.push("tiger");
y.pop();

y.shift();  // 删除第一个
y.unshift("lion");  
console.log(y)

var m = 1;
function add()
{
    let sum = 0;
    for (let i = 0, j = arguments.length; i < j; i++)
    {
        sum += arguments[i];
    }
    return sum;
    // m += x;
}
let temp = add(1,1,2,3,2,54,43,52,2,364,345,56);
console.log(temp);

// 闭包

function fun(a)
{
    return function(b)
    {
        return a+b;
    };
}

var n = fun(10);
var num = n(20);
console.log(num);