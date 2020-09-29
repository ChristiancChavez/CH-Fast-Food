const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_HAMBURGUER = 'BUY_HAMBURGUER';
const BUY_CHICKEN = 'BUY_CHICKEN';
const BUY_PIZZA = 'BUY_PIZZA';

const buyHamburguer = () => {
    return {
        type: BUY_HAMBURGUER,
        info: 'first redux action'
    }
}

const buyChicken = () => {
    return {
        type: BUY_CHICKEN,
        info: 'first redux action'
    }
}

const buyPizza = () => {
    return {
        type: BUY_PIZZA,
        info: 'first redux action'
    }
}


const initialStateHamburguer = {
    hamburguers: 10,
};

const initialStateChicken = {
    chickens: 10,
};

const initialStatePizza = {
    pizzas: 10
};

const pizzaReducer = (state = initialStateHamburguer, action) => {
    switch(action.type) {
        case BUY_PIZZA: return {
            ...state,
            numOfPizzas: state.numOfPizzas - 1
        }
        default: return state
    }
}

const chickenReducer = (state = initialStateChicken, action) => {
    switch(action.type) {
        case BUY_CHICKEN: return {
            ...state,
            numOfChickens: state.numOfChickens - 1
        }
        default: return state
    }
}

const hamburguerReducer = (state = initialStatePizza, action) => {
    switch(action.type) {
        case BUY_HAMBURGUER: return {
            ...state,
            numOfHamburguers: state.numOfHamburguers - 1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    hamburguer: hamburguerReducer,
    chicken: chickenReducer,
    pizza: pizzaReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initilstate', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyHamburguer());
store.dispatch(buyChicken());
store.dispatch(buyPizza());
unsubscribe();