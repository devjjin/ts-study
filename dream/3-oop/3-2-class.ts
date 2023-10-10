{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    const BEANS_GRAMM_PER_SHOT: number = 7;
    
    let coffeeBeans: number = 0;

    // 샷에 따라 커피를 만들어주는 함수
    function makeCoffee(shots: number): CoffeeCup {
        // 우리가 가지고 있는 커피콩의 양의 샷의 숫자와 BEANS_GRAMM_PER_SHOT의 곱보다 작으면 error
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffe beans!');
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT; 
        return {
            shots,
            hasMilk: false,
        };
    }

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);    // { shots: 2, hasMilk: false }
}