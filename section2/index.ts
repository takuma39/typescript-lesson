let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
let hello: string;
hello = 'hello';

// ///////////////////////
const person:{
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}
// console.log(person.gender);

// ///////////////////////
const person2: object = {
    name: 'Jack',
    age: 21
}
// console.log(person2.age);

// ///////////////////////
const person3 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
}
// console.log(person3.gender);

// ///////////////////////
const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];
fruit.toUpperCase();

// ///////////////////////
const fruits2 = ['Apple', 'Banana', 'Grape', 1]

// ///////////////////////
const book: [string, number, boolean] = ['business', 1500, false];

book.push(21);
// console.log(book[3]);

// ///////////////////////
// enum CoffeeSize {
//     SHORT= 'SHORT',
//     TALL= 'TALL',
//     GRANDE= 'GRANDE',
//     VENTI= 'VENTI'
// }

enum CoffeeSize {
    SHORT,
    TALL = 'TALL',
    GRANDE = 100,
    VENTI
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;

// ///////////////////////
let anything: any = true;
anything = 'hello';
anything = {};

let banana = 'banana';
banana = anything;

// ///////////////////////
let union: number | string = 10;
// union.toUpperCase();
union = 'union';
union.toUpperCase();

let union2:(number | string)[] = [21, 'union']

// ///////////////////////
const apple: 'apple' = 'apple'
// const test: 'test' = 'apple'

let clothSize: 'small' | 'medium' | 'large' = 'small';

const cloth = {
    color: 'white',
    size: clothSize
}
// cloth.size = 'large';

// ///////////////////////
const cloth2: {
    color: string;
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: "large"
}

cloth2.size = 'small';

// ///////////////////////
type ClothSize = 'small' | 'medium' | 'large'

const cloth3: {
    color: string;
    size: ClothSize
} = {
    color: 'white',
    size: "large"
}

cloth2.size = 'small';

// ///////////////////////
function add(num1: number, num2: number): number{
    return num1 + num2
}

// ///////////////////////
function sayHello(){
    console.log('Hello');
}
console.log(sayHello());
let tmp: undefined;

// ///////////////////////
function sayHello2(): undefined{
    console.log('Hello');
    return;
}
console.log(sayHello2());

// ///////////////////////
function sayHello3(){
    console.log('Hello');
    return;
}
console.log(sayHello3());

// ///////////////////////
let tmp2: undefined;
let tmp3: null = undefined;

// ///////////////////////
const anotherAdd = add;

// ///////////////////////
const anotherAdd2:(n1: number, n2: number) => number = add;

// ///////////////////////
const anotherAdd3:(n1: number, n2: number) => number = function (num1: number, num2: number): number{
    return num1 + num2
}

// ///////////////////////
const doubleNumber = number => number *2;

const doubleNumber2 = (number: number): number => number *2;

const doubleNumber3:(num: number) => number = num => num *2;

// ///////////////////////
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num *2);
    console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
    return doubleNum
});

// ///////////////////////
function doubleAndHandle2(num: number, cb: (num: number) => void): void {
    const doubleNum = cb(num *2);
    console.log(doubleNum);
}

doubleAndHandle2(21, doubleNum => {
    return doubleNum
});
// ///////////////////////
let unknownInput: unknown;
let anyInput: any;
let textInput: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// textInput = unknownInput;

anyInput = 'hello';
anyInput = 21;
anyInput = true;
textInput = anyInput;

if(typeof unknownInput === 'string') {
    textInput = unknownInput;
}

// ///////////////////////
function error(message: string){
    throw new Error(message);
}

console.log(error('test'));

function error2(message: string): never{
    throw new Error(message);
}

// ///////////////////////
