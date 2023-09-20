/**
 * Discriminated Union 
 * 어떤 케이스든 공통적인 프로퍼티를 가지고 더 직관적으로 구분할 수 있게 해줌
 */
{
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    }
    type FailState = {
        result: 'fail'; // 동일한키이나 union안에 result라는 동일한키나, state따라 다른 ㄱ밧
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            result: 'success',
            response: {
                body: 'loggined in',
            }
        }
    }
    
    function printLoginState(state: LoginState) {
        // state.result로 접근해 union처럼 result의 값을 다르게 받아올 수 있게 된다
        if (state.result === 'success') {
            console.log(`🎉${state.response.body}`);
        } else { 
            console.log(`😂${state.reason}`);
        }
     }
}