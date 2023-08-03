// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
// 	return a + b;
// }

// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
	return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
	return a + b;
}
sum(10, 20); // 30
// sum(10, 20, 30, 40); // 에러: Expected 2 arguments, but got 4.ts 불필요한 인자 2개를 넣음 - ts의 장점
