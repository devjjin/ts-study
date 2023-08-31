// 배열과 튜플

// 1) 배열
// 배열 타입 정의
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "sujin"];
// 제네릭으로 배열 타입 정의
let boolArr: Array<boolean> = [true, false, true];

// 유니온(Union) 타입 - 여러 타입 중 하나의 타입 허용
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

// 튜플도 결국 배열임
tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

// 튜플을 써야하는 이유
const users = [
    ['고양이', 1],
    ['사자', 2],
    ['호랑이', 3],
    ['강아지', 4],
    [5, '팬더'],  // js는 오류나지 않는다!
]

// 만약 여기에 새로 추가된 5번 인덱스의 타입이 서로 순서가 바뀐다면?
const users1: [string, number][] = [
    ['고양이', 1],
    ['사자', 2],
    ['호랑이', 3],
    ['강아지', 4],
    [5, '팬더'],  // Type 'string' is not assignable to type 'number'. 오류 발생
]
// 각 요소의 타입이 일치하지 않으면 오류남=> 좀 더 엄격한 검사 가능해짐