// object 타입
let user: object = {
  id: 1,
  name: "김수진",
}

// 프로퍼티에 접근 시 오류!
user.id; // ❌ object형식에 id 속성이 없습니다.?
// 왜 나는 정의했는데, 이 값이 객체다라는 정보 외에는 아무런 정보가 없는 타입이므로,
// 프로퍼티, 메서드에 무엇이 있는지 알 수 없으므로

// 그렇다면? 객체리터럴 타입을 활용해라.

// 객체리터럴 타입
// {}를 사용해 프로퍼티의 타입을 정의해서 아래 쓰이는 것을 리터럴하는것 과 같음
let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "김수진"
}
user1.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "뚱뚱이",
  color: "white",
}

dog.color;