{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(result: ResourceLoadState) {
    switch (result.state) {
      case 'loading':
        console.log(`👀 ${result.state}`);
        break;
      case 'success':
        console.log(`😃 ${result.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${result.reason}`);
        break;
      default:
          throw new Error(`unknown ${result}`);
      }
    }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
