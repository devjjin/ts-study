// 객체
// 객체 타입 정의하는 방법

// 1. object로 정의하기
let user: object = {
    id: 1,
    name: "김수진",
};

// user.id; // ❌ error: Property 'id' does not exist on type 'object'
// !but, 객체 프로퍼티에 접근할 경우 'object'형식에 id가 없다는 오류 발생함
// ✅ 왜? object라는 객체다라는 정보 이외에는 객체의 프로퍼티, 메서드 대한 정보를 알 수 없어서

// ！ 그렇다면 object가 아닌 객체 리터럴 타입을 이용해야 한다.

// 2. 객체 리터럴 타입
// 객체 리터럴과 비슷한 문법으로 객체 타입을 정의한 타입
// 프로퍼티, 메서드 까지 모두 정의하는 타입(구조를 기준으로 타입을 정의)

let user1: {
    id: number;
    name: string;
};
user1 = {
    id: 1,
    name: "수진",
};

// 타입 내에 정의된 프로퍼티에 접근 가능
user1.id;

// 객체리터럴타입 2
let dog: {
    name: string;
    color: string;
} = {
    name: "뚱뚱이",
    color: "white",
}
dog.color;

// ts는 구조적 타입 시스템
// 해당 타입의 구조와 형태에 기반해 결정하는 타입 시스템(구조적 타입시스템)
// Property based type이라고도 함 -> 프로퍼티를 기준으로 타입을 결정하는 시스템
// c,java는 이름을 기준으로 타입 정의(->명목적 타입시스템, <-> 구조적 타입 시스템)

// 2. 특수한 프로퍼티 정의하기
// 2-1. 선택적 프로퍼티(Optional Property)
// 특정 프로퍼티를 상황에 따라 선택적으로 생략 가능하게 함

// 프로퍼티 뒤에 ? 를 붙여 생략가능
let user3: {
    id?: number; // 선택적 프로퍼티가 된 id
    name: string;
} = {
    id: 1,
    name: "김수진",
};

// (? 를 붙이지 않는다면?)
// 정의 한 프로퍼티를 모두 사용해야 하므로 오류가 난다.

user3 = {
    name: "황유진", // ❌, Property 'id' is missing in type '{ name: string; }' but required in type '{ id: number; name: string; }'
}

// 2-2. 읽기전용 프로퍼티(Readonly Property)
// 프로퍼티 이름 앞에 readonly 키워드 붙이기
// 수정 불가, 읽기만 가능한 프로퍼티로 만들기!
let config: {
    apiKey: string;
} = {
    apiKey: "MY API KEY",
};

// readonly인 프로퍼티 값을 변경하려하면 오류 발생
config.apiKey  = "hacked"; // ❌,  Cannot assign to 'name' because it is a read-only property.

