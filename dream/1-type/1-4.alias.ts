{
    /**
     * Type Alias
     */

    // 직접 원하는 타입을 지정하는 것
    type Text = string;
    const name: Text = 'sujin';
    type Num = number;
    type Student= {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'sujin',
        age: 25,
    }

    /**
     * String Literal Types
     */

    type Name = 'name'; // 이 타입은 name이라는 문자열 타입을 쓴다
    let sujinName: Name;
    // sujinName = 'sujin'; // ❌
    sujinName = 'name'; // o 
    type JSON = 'json';
    const json: JSON = 'json'

    type Boal = true;
    const isCat: Boal = true;
}