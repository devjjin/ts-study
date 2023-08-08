// 타입 단언(type assertion)
var a; // any
a = 20;
a = 'a';
// var b = a; // any
var b  = a as string; // string , 개발자가 타입을 선언

// DOM API 조작
// <div id ="app">hi</div>

// 타입 단언 전
// var div = document.querySelector('div'); //var div: HTMLDivElement | null 추론
// if (div) { // null이 아닐 경우
//     div.innerText;
// }

//as HTMLDivElement로 타입 단언
var div = document.querySelector('div') as HTMLDivElement; //var div: HTMLDivElement | null 추론
    div.innerText;
