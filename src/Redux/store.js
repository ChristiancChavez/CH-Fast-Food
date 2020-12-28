import { createStore } from 'redux';

const fastFoodState = {
    hamburguers: [],
    pizzas: [],
    chicken: [],
}


const fastFoodReducer = (state = fastFoodState, action) => {
    switch(action.type) {
        default: return state;
    }
}

const store = createStore(fastFoodReducer);

console.log('estado de CHFF', store.getState());

export default createStore(fastFoodReducer);