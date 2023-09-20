{
    /**
     * 💩 Type Assertion (타입 단언)
     * 타입을 확인할때, 타입을 강요할때 사용
     * as 키워드 변수
     * <type>변수
     */

    // javascript
    // 자바스크립트의 리턴되는 타입을 알수 없지만, 내부적으로 문자열 리턴한다고 가정
    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc(); // result는 any타입이라 문자열타입에서 사용가능한 api사용 불가!
    // result.length; // 자동완성 안됨

    // 나는 이게 string이란 것을 알고 있어
    console.log((result as string).length); // 5
    console.log((<string>result).length); // 5

    // 근데 문자열이라고 가정했는데 만약 숫자리턴하면????
    // assertion해버리니까!! 컴파일시점(코드작성)땐에러나, 경고 메시지 안되나
    // 런타임시 undefined출력되어버림
    // 내가 정말정말정말 장담할때만 사용해라


    // 예외 케이스 - 런타임시 에러 발생할 수 있으므로 100% 정말 장담할때만 쓰자
    // 1)
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //❌ 타입에러 발생한다!!!!!!!

    // 2) ! : 무조건 이 값만 받을것이라고 장담하면 - 런타임시 실시간에 에러발생할 수 있다!
    function findNumber(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumber(); // 숫자나 undefined일 수 있는데
    numbers!.push(2); // 배열임을 확신할 수 있다면 ! 를 변수뒤에 넣어주자!


    // 3)
    const button = document.querySelector('class')!; // 요소나 null을 반환
    if(button) { // 버튼이 존재하면? 
        button.nodeValue;
    }
}