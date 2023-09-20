{
    /**
     * Type Inference
     * 타입을 명시하지 않아도 자동으로 타입을 추론할 수 있음
     * 💩 간단한 코드는 추론가능하나, 복잡한것은 어려움
     * 원시타입같이 타입이 명확하므로 생략은 가능하나, 함수는 정확하게 명시하는게 좋다!
     */

    let text = 'hello';
     // 선언과 동시에 문자열을 할당해 - 타입스크립트가 자동으로 string으로 타입추론 - 다른타입 못들어감
    // text = 1; // ❌
    
    
    // 타입 명시하지 않으면 암묵적으로 any명시함
    // 명시하지 않아도 값 string으로 추론
    function print(message = 'hello') {
        console.log(message);
    }
    // 어떤 값이든 할당할 수 있게됨 - any 나빠!
    print('hello');
    // print(1); // ❌

    function add(x: number, y: number) {
        return x + y; // 타입이 number라는 것 추론
    }

    
    const result = add(1, 2); // 자동으로 Result가 number로 명시됨
}