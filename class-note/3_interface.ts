interface User {
    age : number;
    name : string;
}

// 변수에 인터페이스 활용
var sujin: User = {
    age : 25,
    name : '수진',
}

// 함수에 인터페이스 활용
// 인터페이스 : 상호간의 약속이므로 어떤 타입인지 지정해줘라! (user: User)
function getUser(user: User) {
    console.log(user);
}

const capt = {
    age : 30,
    name : '캡틴',
}

getUser(capt); 

//api 호출해와서 스펙과 데이터타입에 따라 인터페이스로 정의해서 활용하는 구간이 많다. 타입스크립트는

// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunction {
   (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // Type 'number' is not assignable to type 'string'
arr[0];
