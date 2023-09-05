// 원시타입 : 하나의 값만 저장하는 타입

// number : 숫자를 의미하는 모든 값
// 양수, 음수, 소수, 무한, NaN
let num1: number = 123;
// 변수이름에 : -> 타입주석(타입어노테이션) 콜론과 함께 변수의 타입을 정의하는 것
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// number타입의 변수에는 number타입만 넣을 수 있음
// num1 = 'hello'; // ❌
// num1.toUpperCase(); // ❌ // 문자열에만 적용할 수 있는 메서드 적용 불가
num1.toFixed();// nUmber타입에 사용되는 메서드는 사용 가능

// string
// 쌍따옴표, 백틱, 작은따옴표, 템플릿리터럴 포함
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// boolean
let bool1 : boolean = true;
let bool2 : boolean = false;

// null
let null1: null = null;

// undefined 타입
let unde1: undefined = undefined;

let numA = null;
// let numA: number = null;  // ❌ 잠깐 null을 넣어놓는 것은 안돼!
// 잠깐 null을 넣고싶다면 임시로
// tsconfig에 strictNullChecks:false로 설정하고 restart
// strictNullChecks 엄격한 null검사 
// null타입이 아닌 변수에 null을 허용할 것인지 설정

// strict는 strictNullChecks의 상위옵션으로 이게 true이면
// strictNullChecks도 true로 자동

// 리터럴 타입
// 값 그 자체가 타입이 되는 것, 이 값 외에는 다른 값을 넣을 수 없음
// 리터럴 = 값이라는 뜻
// 복합적인 타입을 만들때 유용하게 쓸 수 있음
let numB: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;