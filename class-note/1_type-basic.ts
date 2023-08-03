// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3];
// let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]; // 배열에는 문자만 들어간다. 숫자넣으면 에러난다.
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1, 2, 3];

// TS 튜플 : 배열전체에 대한 타입을 지정하는 것이 아닌 배열의 특정 인덱스의 타입을 정의하는 것
// let address: [string, number] = ['gangnam', 'pangyo'];
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100,
// };

let person: { name: string, age: number } = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;
