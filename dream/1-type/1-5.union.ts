{
    /**
     * Union Types: OR(활용도 굉장히 높음)
     */

    // 모든 가능한 타입 중 딱 하나를 담고 싶을때
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    // const tile: TileSize = 6; //❌ 다른 값 할당 안됨

    // 사용예제(실무에 많이씀)
    // function: login -> success, fail
    // type SuccessState = {
    //     response: {
    //         body: string;
    //     }
    // }
    // type FailState = {
    //     reason: string;
    // }
    // type LoginState = SuccessState | FailState;
    // function login(): LoginState {
    //     return {
    //         response: {
    //             body: 'loggend in',
    //         }
    //     }
    // }

    // // quiz
    // // 로그인하고 나서 받은 state출력
    // // 성공하면 success, 실패하면 fail 출력하는 기능 만들어보자
    // function printLoginState(state: LoginState) {
    //     // 💩
    //     if('response' in state) {
    //         console.log(`🎉${state.response.body}`);
    //     } else { 
    //         console.log(`😂${state.reason}`);
    //     }
    // }
}