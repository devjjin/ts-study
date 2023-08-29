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

// 딕서녀리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    //cssFile: 'css'   // 속성 : 정규표현식이 와야하는데 문자열이 와서 에러남
    cssFile: /\.css$/,  // .css 확장자로 끝나는 모든 파일들
    jsFile: /\.js$/,
}

// obj['cssFile'] = 'a'; // 인터페이스 규칙에 어긋나서 regex로 접근해야함

// 좋은점 - value의 타입 지정하지 않아도 string 타입으로 추론하여 안정성
Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장
// OOP의 상속, js의 프로토타입 
interface Person {
    name: string;
    age: number;
}

// Developer에 중복되는 속성을 상속받아 사용 가능함 - name, age 속성 재정의 불필요
interface Developer extends Person{
    // name: string;
    // age: number;
    language: string;
}

var captain: Developer = {
    name: '캡틴',
    age: 34,
    language: 'ts',
}