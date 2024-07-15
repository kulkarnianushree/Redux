const redux = require('redux');

const CounterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - action.value
            };
        default:
            return state;  
    }
};

const store = redux.createStore(CounterReducer);

const CounterSubscribe = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(CounterSubscribe);

for (let i = 0; i <= 5; i++) {
    store.dispatch({ type: 'INCREMENT', value: 1 });
}

// Dispatching another 'DECREMENT' action
store.dispatch({ type: 'DECREMENT', value: 1 });
