class Person {
    private name: string;   // 클래스 내부에서만 접근
    public age: number; // 어느 클래스에서도 접근 가능
    readonly log: string;   // 읽기만 가능

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}