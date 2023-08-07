// 타입을 지정하지 않으면 type : any로 설정되어 있음
// 유지보수 차원에서 좋지않다. 매번 타입에 따른 함수를 만든다는 것은!
// function logText(text: string) {
//     console.log(text);
//     // 만약 split을 한다면
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// logNumber(10);
// logText('a');
// const num = logNumber(10);
// logText(true);

// generic
// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이'); // 함수 호출 시점에 인자 타입을 지정해서 넘겨줄 수 있음

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// // a.split(''); // Property 'split' does not exist on type 'string | number'.
// logText(10);

// generic의 장점- 타입안정성 유지
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T): T {
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);   // length가 출력되지 않는다. 어떤 타입이 들어올지 모름
//     text.forEach(function (text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
// logTextLength(10);
// logTextLength({ length: 10});

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
// 제네릭 타입 제한3 - keyof
// ShoppingItem의 속성 중 하나의 타입이 제네릭으로 지정된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);  //Argument of type '10' is not assignable to parameter of type 'keyof ShoppingItem'
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');  // 타입에서 정의된 키값만 들어갈 수 있다.