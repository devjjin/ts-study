// 1. 타입별칭(Type Alias)
// type 타입이름 = 타입 형태로 타입 정의
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// type User = {}; // ❌ 동일한 스코프에 동일한 이름의 type 별칭 선언은 불가능함

function test() {
  type User = string; // 함수 내부에서는 string 타입, 외부에서는 객체타입
}

// 타입 관련 문법은 컴파일과 함께 모두 사라짐 (타입 별칭 포함)

// 2. 인덱스 시그니처(Index Signature)
// 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법
type CountryCodes = {
	Korea: string;
	UnitedState: string;
	UnitedKingdom: string;
  // (... 100개 국가)
};

let countryCodes: CountryCodes = {
	Korea: "ko",
	UnitedState: "us",
	UnitedKingdom: "uk",
  // (... 100개 국가)
};

// 만약 countryCodes에 100개의 프로퍼티(국가코드가) 추가되어야한다면?
// 프로퍼티를 모두 정의해줘야하므로 번거로움!!!
// 이럴때 인덱스시그니처 사용하면 간편함!

// [key : string] : string    시그니처 문법 사용
// : 객체 타입에는 key가 stinrg타입, value가 string 타입인 모든 프로퍼티들이 포함된다라는 의미

type CountryNumberCodes = {
  [key: string] : number;
  Korea: number; // 이때 반드시 포함해야 하는 프로퍼티가 있다면 다음과 같이 직접 명시해도 됨
  // Korea: string; // ❌ 오류! 시그니처의 value타입(number)와 직접 추가한 프로퍼티 value 타입이 호환되거나 일치해야하므로

}