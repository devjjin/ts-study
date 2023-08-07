class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }
}

// new Person(); // 생성되었습니다
var sujin = new Person('수진', 100);
console.log(sujin); // 생성되었습니다 //Person {name: '수진', age: 100}