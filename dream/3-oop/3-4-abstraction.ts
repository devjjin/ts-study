{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeebeans: number = 0; // instance level

    // 인스턴스를 만들 때 호출되는 함수
    private constructor(coffeeBeans: number) {
      this.coffeebeans = coffeeBeans; // 커피 콩 충전
    }

    // 클래스 내부의 어떤 속성도 팔요로 하지 않기 떄문에  static으로 함수 선언
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeebeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeebeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeebeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up,,,");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker = CoffeeMaker.makeMachine(3);
  maker.fillCoffeeBeans(32);
}