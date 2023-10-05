// 절차지향적으로 커피머신 구현하기
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    // 하나의 샷에 필요한 커피그램은 7g이라 가정
    const BEANS_GRAMM_PER_SHOT: number = 7;
    
    // 우리가 가지고 있는 커피 콩의 양, 현재는 0이라고 가정
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