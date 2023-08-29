// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

var sujin: Person = {
    name: '수진',
    age: 25,
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
// 속성을 개별로 정의하면 코드가 길어짐 -> 타입별칭 사용
function getTodo(todo: Todo) {

}