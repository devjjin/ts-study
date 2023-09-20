{
    // Array 배열, 정의 두가지 방법 차이점
    const fruits: string[] = ['🍅', '🍌'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {
    // function printArray(fruits: readonly Array<string>) { // 허용❌
        // object의 불변성을 유지하기 위해  
        // 전달된 인자를 함수 내부에서 변경하지 못하도록 readonly 붙이기
        // fruits.push('🍊'); // ❌
    }

    // 💩 Tuple(튜플) : 서로 다른 타입을 가질 수 있는 배열
    // 고정된 타입과 개수 지정
    // index로 접근 가능 -> 가독성 떨어지므로 권장하지 않음 직접 찾아봐야함
    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123


    // 튜플 대신 클래스 object 쓰면되는데 왜 tuple 쓰니??????
    // -> interface, type alias, class로 대체해서 써라
    // student.name;
    // student.age; 

    // object structing 쓸수는 있으나 ㄱ튜플 권장 x
    const [name, age] = student;

    // 리액트의 useState도 튜플 형태
    // const [count, setCount] = useState(0);
}