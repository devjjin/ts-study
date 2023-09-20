{
   /**
    * JavaScript
    * Primitive: number, string, boolean, bigint(더큰 숫자범위), symbol, null, undefined
    * Object: primitive 외 , function, array...
    */

   // number
   // :으로 타입 명시
   const num: number = 0.1; // number 타입만 할당 가능

   // string
   const str:string = 'hello';

   // boolean
   const bool:boolean = false;

    // undefined(값 있는지 없는지 결정 안된 상태)
    let name: undefined; // 💩(단독으로 이렇게 쓰면 안됨)
    let age: number | undefined; // number나 undefined 할당 가능
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null(명확하게 값이 비어있음을 명시)
    let person: null; // 💩
    let person2: string | null;

    // unknown 💩 (알 수 없는, 아무 타입이나 담을 수 있음)
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩 (어떤 타입이든 담을 수 있음)
    let anything: any = 0;
    anything = 'hello';

    // void (빈, 함수에서 아무 값도 리턴하지 않을때)
    function print(): void {
        console.log('hello');
        return;
    }

    // 변수에 할당하면, undefined만 할당가능하므로 쓰지 않음
    let unusable: void = undefined; // 💩

    // never (함수에서 값 절대 리턴하지 않을때 명시함)
    // 에러 던질때 사용, 핸들링 하지 못하거나 예상치 못할때 호출
    // while(true) 무한루프
    function throwError(message: string): never {
        // message -> 서버(log)
        throw new Error(message);
        while(true) {}
    }

    let neverEnding: never; // 💩

    // object
    // 원시타입을 제외한 모든object타입 전달 가능
    let obj: object; //  💩(가능하면 타입명시해라)
    function acceptSomeObject(obj: object) {}

    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});
}