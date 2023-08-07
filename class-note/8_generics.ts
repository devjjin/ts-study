// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);
// logText('하이');
// logText(true);

// generic
function logText<T>(text: T):T {
    console.log(text);
    return text;
}
logText<string>('하이'); // 함수 호출 시점에 인자 타입을 지정해서 넘겨줄 수 있음