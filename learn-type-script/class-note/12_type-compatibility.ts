// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
//     // skill: string;
// }

class Person { 
    name: string;
    // skill: string; // 주석 풀면 오류 사라짐
}
// structural typing
var developer: Developer;
// var person: Person;
// developer = new Person; // 오른쪽의 타입이 속성이 더 많을때 타입이 호환 된다. //에러
// person = devleoper;

// 함수
var add = function(a: number) {
    // ...
}

var sum = function(a: number, b: number) {
    // ...
}

// 파라미터 함수 인자 크기 차이 : sum의 구조가 add보다 크다
// add = sum; // 오류   Target signature provides too few arguments. Expected 2 or more, but got 1.ts
sum = add;

// 제네릭
interface Empty<T> {
    // ...
}
// 타입 인자가 다르므로 호환성 없음
var empty1: Empty<string>;
var empty2: Empty<number>;

// empty1 = empty2; // error // Variable 'empty2' is used before being assigned
// empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// 서로 호환되지 않는다.
// notempty1 = notempty2;
// notempty2 = notempty1;
