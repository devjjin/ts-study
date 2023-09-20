// 대수타입(Alegebraic type)
// 여러개의 타입을 합성해서 만드는 타입

// 1) union타입
let a: string | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [3, true, "hello"];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
}

let union2: Union1 = { // ✅
  name: "",
  language: "",
};

let union3: Union1 = { // ✅
  name: "",
  color: "",
  language: "",
};

let union4: Union1 = { // ❌
  name: "",
};

// intersection
let variable: number & string;