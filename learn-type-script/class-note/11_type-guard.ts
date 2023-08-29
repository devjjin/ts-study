interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return  { name : 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce(); // var tony: Developer | Person
// console.log(tony.skill); // union type은 공통된 속성만 접근가능하므로 접근 불가함
console.log(tony.name); // 공통속성을 접근 가능

// type assertion 을 매번 반복함 - 가독성 저하 -> 타입가드가 나오게 됨
if ((tony as Developer).skill) {
    var skill =  (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}

// 타입가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}