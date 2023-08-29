
// 타입 - any 설정시 : 타입스크립트의 장점이 사라짐
// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100); 

var jin: string | number | boolean;
// union type : 파라미터나 변수에 한가지 이상의 변수를 사용
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer { 
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
function askSomeone(someone: Developer | Person) {
    // someone.name;   // union type은 공통된 속성만 접근 가능
    // someone.skill;
    // someone.age;
}

// union type 설정시 - Developer, Person 사용 가능
askSomeone({ name: '디벨로퍼', skill: '웹 개발'});  // Developer
askSomeone({ name: '수진', age: 100});  // Person

// intersection type : 여러 타입을 모두 만족하는 하나의 타입
function askSomeone2(someone: Developer & Person) {
    // someone.name;
    // someone.skill;
    // someone.age;
}

// askSomeone2({ name : '디벨로퍼', skill: '웹 개발'}); // 'age'가 들어간 속성도 넣어줘야해서 에러남

