// void와 never

// 1. void 타입
// 아무런 값도 없음을 의미
// 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용
function func2(): void {
    console.log("hello");
}

// void 타입의 변수에는 undefined 이외 다른 타입 할당 불가
// 왜? void가 undefined 포함하므로
let a: void;
a = undefined; //
// a = null; // "strictNullChecks" : false일 경우, null도 할당 가능


// 2. never타입
// 불가능을 의미하는 타입
// 함수가 어떠한 값도 반환할 수 없는 상황일때 해당 함수의 반환값 타입을 정의할 때 사용
// 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미 - 무한루프와 같은
function func3(): never {
    while (true) {}
}
// 의도적으로 오류를 발생시키는 함수도 never타입으로 정의 가능
function func4(): never {
    throw new Error();
}

// never 타입은 never이외 어떤 값도 변수에 담을 수 없음(any도 불가)
let anyVar: any;

let b: never;
b = 1; // ❌
b = null; // ❌
b = undefined; // ❌
b = anyVar; // ❌