const redux = require('redux');

const CounterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'INCREMENT'){
       return {
           counter: state.counter + 1 // Changed 'Counter' to 'counter'
       };
    }
    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1 // Changed 'Counter' to 'counter'
        };
    }
    if(action.type === 'INCREMENTBY2'){
        return {
            counter: state.counter + action.value // Changed 'Counter' to 'counter'
        };
    }
    if(action.type === 'DECREMENTBY2'){
        return {
            counter: state.counter - action.value // Changed 'Counter' to 'counter'
        };
    }
    return state; // Default return state for actions not handled
};

const store = redux.createStore(CounterReducer);

const CounterSubscribe = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(CounterSubscribe);

for (let i = 0; i <= 5; i++) {
    store.dispatch({ type: 'INCREMENT' });
}

store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENTBY2', value: 2 });
store.dispatch({ type: 'DECREMENTBY2', value: 1 });
