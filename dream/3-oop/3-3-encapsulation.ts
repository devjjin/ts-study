{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // 외부에서 보이면(설정하면)안되는 값 설정하기 - 은닉화 - 코드 안정성 높이기

    // public(default) : 어느 클래스에서든 접근 가능
    // private 클래스 내부에서만 접근 가능
    // protected : 상속한 자식 클래스에서 접근 가능(외부 x)
    class CoffeeMaker {
        // private :  - 내부 상태를 숨기기
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number) : CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // fillCoffeeBeans로 내부상태 변경할 수 있도록
        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans shoud be greater than 0');
            }
            this.coffeeBeans = beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffe beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; 
            return {
                shots,
                hasMilk: false,
            };
        }
    }
    
    const maker = CoffeeMaker.makeMachine(32);
    // 위험함! 유효하지 않음- 외부에서 값 임의로 설정하게 되면 object상태를 유효하지 않게 만들 수 있음
    // maker.coffeeBeans = -34; 

    maker.fillCoffeeBeans(3);

    console.log(maker);

}