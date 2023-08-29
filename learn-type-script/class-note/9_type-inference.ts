// 타입 추론 기본 1
var a = 10;

// default value : b = 10
function getB(b = 10) { // return type - string 추론
    var c = 'hi'; // string 추론
    return b + c; // string 추론 // 10hi
}

// 타입 추론 기본 - 인터페이스
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// // 제네릭의 key에 들어간 타입을 추론 가능함
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello',
// }

// 타입 추론 3 - 복잡한 구조(인터페이스 연결)
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

// 결론적으로 타입이 string으로 추론 가능
var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description :'ab',
    value : 'a',
    tag : 'a',
}

// Best Common Type : union type으로 가장 근접한 타입을 추론
var arr = [1, 2, true]; // var arr: (number | boolean)[] 추론

