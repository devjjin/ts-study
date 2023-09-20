{
    /**
     * 💩 Enum
     * 언제쓰냐? 타입이 보장되고 안전하게 사용가능
     * 언제쓰면안되냐?  
     * 여러가지 관련된 상수들을 모아서 사용하게 해줌 (js에는 존재하지 않음)
     * -> Union 타입 대체 가능
     */

    // JavaScript
    // 서로 연관되나 묶을 수 있는 타입 존재하지 않아서
    // Object.freeze() 메소드를 사용해 구현할 수 있음
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WENDSDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WWENDSDAY": 2,})
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    type DaysOfWeek = 'Monday' | 'TuesDay' | 'WendsDay';
    enum Days {
        // Monday = 1,
        // Monday = 'mon', // 문자열도 할당가능하나, 자동 인덱싱 되지 않으므로 나머지도 수동할당해야함
        // TuesDay = 'tues',
        Monday,
        TuesDay,
        WendsDay,
        ThursDay,
        FriDay,
        Saturday,
        SunDay,
    };

    // 값 따로 정하지 않으면 자동 인덱싱(0부터 +1씩)
    console.log(Days.Monday); // 0
    let day: Days = Days.Saturday;
    day = Days.TuesDay; // 다른것을 할당할때, 어떤것이든 선택해 할당할 수 있다.
    // day = 10; // 💩 , 5.0이후 개선됨, 이전에는 enum으로 지정된 타입에 어떤 숫자도 할당 가능하다. 런타임시도 오류 안남
    console.log(Days.FriDay); // 4

    // union - enum대신 사용하기
    let dayOfWeek: DaysOfWeek = 'Monday'; // 자동완성되어서 union에 지정된 값만 할당 가능
    dayOfWeek = 'WendsDay'; // 재할당도 지정된 값만 할당가능 -> 타입 보장
}