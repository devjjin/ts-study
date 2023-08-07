
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