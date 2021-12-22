var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = 'hello';
// ///////////////////////
var person = {
    name: 'Jack',
    age: 21
};
// console.log(person.gender);
// ///////////////////////
var person2 = {
    name: 'Jack',
    age: 21
};
// console.log(person2.age);
// ///////////////////////
var person3 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// console.log(person3.gender);
// ///////////////////////
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0];
fruit.toUpperCase();
// ///////////////////////
var fruits2 = ['Apple', 'Banana', 'Grape', 1];
// ///////////////////////
var book = ['business', 1500, false];
book.push(21);
// console.log(book[3]);
// ///////////////////////
// enum CoffeeSize {
//     SHORT= 'SHORT',
//     TALL= 'TALL',
//     GRANDE= 'GRANDE',
//     VENTI= 'VENTI'
// }
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 100] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 101] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
// ///////////////////////
var anything = true;
anything = 'hello';
anything = {};
var banana = 'banana';
banana = anything;
// ///////////////////////
var union = 10;
// union.toUpperCase();
union = 'union';
union.toUpperCase();
var union2 = [21, 'union'];
// ///////////////////////
var apple = 'apple';
// const test: 'test' = 'apple'
var clothSize = 'small';
var cloth = {
    color: 'white',
    size: clothSize
};
// cloth.size = 'large';
// ///////////////////////
var cloth2 = {
    color: 'white',
    size: "large"
};
cloth2.size = 'small';
var cloth3 = {
    color: 'white',
    size: "large"
};
cloth2.size = 'small';
// ///////////////////////
function add(num1, num2) {
    return num1 + num2;
}
// ///////////////////////
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
var tmp;
// ///////////////////////
function sayHello2() {
    console.log('Hello');
    return;
}
console.log(sayHello2());
// ///////////////////////
function sayHello3() {
    console.log('Hello');
    return;
}
console.log(sayHello3());
// ///////////////////////
var tmp2;
var tmp3 = undefined;
// ///////////////////////
var anotherAdd = add;
// ///////////////////////
var anotherAdd2 = add;
// ///////////////////////
var anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
// ///////////////////////
var doubleNumber = function (number) { return number * 2; };
var doubleNumber2 = function (number) { return number * 2; };
var doubleNumber3 = function (num) { return num * 2; };
// ///////////////////////
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// ///////////////////////
function doubleAndHandle2(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle2(21, function (doubleNum) {
    return doubleNum;
});
// ///////////////////////
var unknownInput;
var anyInput;
var textInput;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// textInput = unknownInput;
anyInput = 'hello';
anyInput = 21;
anyInput = true;
textInput = anyInput;
if (typeof unknownInput === 'string') {
    textInput = unknownInput;
}
