// 배열과 튜플

// 1) 배열
// 1-1 배열 타입 정의
// 배열 요소의 타입을 적어주고, 배열임을 알리기 위해 []를 적기
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "sujin"];

// 1-2 제네릭으로 배열 타입 정의
// Array<배열요소타입>
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 유니온(Union) 타입 - 여러 타입 중 하나의 타입 허용
// 유연한 타입 적용 가능(number이거나 string타입)
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 2) 튜플
// 타입스크립트의 특수한 타입, 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];
// let tup3: [number, string] = [1, 2, 3]; // ❌
// 순서를 바꾸거나, 길이가 다르면 오류 발생

// 튜플도 결국 배열이므로 push,pop 메서드 사용해 요소 추가/삭제 가능
// 배열메서드 사용할때는 자바스크립트 배열이라고 판단해서 길이로 인한 에러 없음
tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

// 튜플을 써야하는 이유(유용한 예제)
const animal = [
    ['고양이', 1],
    ['사자', 2],
    ['호랑이', 3],
    ['강아지', 4],
    [5, '팬더'],  // 인덱스 순서를 다르게 해서 저장한다면, js는 오류나지 않는다!
]

// 만약 여기에 새로 추가된 5번 인덱스의 타입이 서로 순서가 바뀐다면?
const animal1: [string, number][] = [
    ['고양이', 1],
    ['사자', 2],
    ['호랑이', 3],
    ['강아지', 4],
    [5, '팬더'],  // ❌ Type 'string' is not assignable to type 'number'. 오류 발생
]
// 각 요소의 타입이 일치하지 않으면 오류남 => 좀 더 엄격한 검사 가능해짐
// 인덱스의 타입요소를 지켜서 넣어야하는 경우