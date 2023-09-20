{
    // JavaScript1 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript1 ✨
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

//////////////////////////////////////////////////////

    // JavaScript2 💩
    function jsFetchNum(id) {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript2 ✨ - 타입을 통한 예상 가능
    function fetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript => TypeScript
    // 1) Optional parameter  인자에 ?를 붙여주기
    // 인자를 전달해도 되고 전달하지 않아도 되고
    // 전달하지 않으면 undefined
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('kim', 'lee');
    printName('yoon');  // yoon, undefined
    printName('park'); // park, undefined

    // 2) Defulat parameter
    // 전달하지 않으면 기본값이 지정됨
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // 3) Rest parameter
    // 개수 상관없이 동일한 타입을 받아올때
    // 배열형태로 받아옴 모든 전달되는 인자들을 numbers 배열로 받아옴
    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((a , b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5));
}