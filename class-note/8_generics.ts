// 타입을 지정하지 않으면 type : any로 설정되어 있음
// 유지보수 차원에서 좋지않다. 매번 타입에 따른 함수를 만든다는 것은!
function logText(text: string) {
    console.log(text);
    // 만약 split을 한다면
    // text.split('').reverse().join('');
    return text;
}

function logNumber(num: number) {
    console.log(num);
    return num;
}

logNumber(10);
logText('a');
const num = logNumber(10);
// logText(true);

// generic
// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이'); // 함수 호출 시점에 인자 타입을 지정해서 넘겨줄 수 있음

