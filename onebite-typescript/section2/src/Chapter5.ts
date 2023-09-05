// 열거형(Enum) 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 멤버라 불리는 명명된 값의 집합을 이루는 자료형

// 열거된 각 멤버는 별도의 값이 설정되지 않은 경우 기본 0부터 시작
// 할당도 가능함, 자동으로 +1씩 증가해 할당
enum Role {
  ADMIN = 10, // 10 할당  
  USER,  // 11 할당(자동)
  GUEST, // 12 할당(자동)
}

// 문자열 enum
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김수진",
  role: Role.ADMIN, // 10 <- 관리자
  language: Language.korean, // "ko"
//   language: Language.korean,// KO-kr처럼 적는 실수 예방 가능
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
  language: Language.english,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3); // { name: '김수진', role: 10, language: 'ko' } { name: '홍길동', role: 11, language: 'en' } { name: '아무개', role: 12 }
console.log(Role[11]); // USER

// enum은 컴파일 결과 객체가 된다.
// 다른 타입스크립트 코드처럼 컴파일 하면 사라지는 것이 아님