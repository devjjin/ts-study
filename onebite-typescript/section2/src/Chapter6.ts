// any와 unkown
// 특정 변수의 타입을 확실히 모를때 사용 


// 1. any
// 어떤 타입도 할당 가능하도록 함
// 타입 검사를 받지 않는 ts의 타입

let anyVar: any = 10;
let num: number = 10;
// any 유형이 설정되었으므로 어떤 유형도 값으로 할당 가능
num = anyVar;

// 변수선언과 초기화 과정에서 값을 할당하지 않으면 암시적으로 any 타입 지정됨
let productId;
productId = 1234;
productId = '1234';


// 2. unknown
// any와 같이 모든 타입 넣을 수 있음
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown 타입을 다른 곳에 할당하면 에러 발생(any는 가능한데)
let number:number = unknownVar; // ❌ 

// unknwon 타입을 number타입처럼 취급하고 싶다면?
// 조건문을 사용해 number 타입임을 보장해줘야함!(타입좁히기)
if (typeof unknownVar === "number") {
  num = unknownVar;
}

// * 특정 변수가 당장 어떤 값을 받게 될 지 모른다면 any타입보다는 unknown 타입을 이용하는 것이 좋음
