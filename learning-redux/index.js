const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreaters = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware= redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOKED = "CAKE_RESTOKED";
const ICECREAM_ORDERD = "ICECREAM_ORDERD";
const ICECREAM_RESTOKED = "ICECREAM_RESTOKED";

function orderCake() {
  // This Function is Action Creater
  return {
    type: CAKE_ORDERED, // This Object is Action
    payload: 1,
  };
}

function restokeCake(qty = 1) {
  return {
    type: CAKE_RESTOKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERD,
    payload: qty,
  };
}

function restokeIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOKED,
    payload: qty,
  };
}

// An Action is an object with a type property
// An Action creater is a function that returns an Action

// const initialState = {
//   // This is the Initial State of Our Application
//   numberOfCakes: 10,
//   numberOfIceCream: 20,
// };

const initialCakeState ={
    numberOfCakes:10
}

const initialIceCreamState = {
    numberOfIceCream:20
}

const cakeReducer = (state = initialCakeState, action) => {
  // This is the Reducer function that Accepts Previous State and Action as arguments and returns the New State
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    // This is the Reducer function that Accepts Previous State and Action as arguments and returns the New State
    switch (action.type) {
      case ICECREAM_ORDERD:
        return {
          ...state,
          numberOfIceCream: state.numberOfIceCream - 1,
        };
      case ICECREAM_RESTOKED:
        return {
          ...state,
          numberOfIceCream: state.numberOfIceCream + action.payload,
        };
      case CAKE_ORDERED:
        return {
          ...state,
          numberOfIceCream:state.numberOfIceCream-1
        }
      default:
        return state;
    }
  };


rootReducer = combineReducers({
    cake:cakeReducer, 
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger)); // Here we Have Created the Store
console.log("Initial State", store.getState()); // This is the getState Method to get the Current State of our Application

// const unsubscribe = store.subscribe(() =>
//   console.log("Update State", store.getState())
// );

const unsubscribe = store.subscribe(()=> {})

// Above is the Subscribe Method here we allow our app to subscribe to the changes in store and return from the Subscribe is what we Call Unsubscribe

// store.dispatch(orderCake()); // Here we are dispatching an Action whic is orderCake()
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restokeCake(3))

const actions = bindActionCreaters({ orderCake, restokeCake, orderIceCream, restokeIceCream }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokeCake(3);
actions.orderIceCream()
actions.orderIceCream()
actions.restokeIceCream(2)

unsubscribe(); // Finaly we are Unsubscribing to the store if we want to update after calling Unsubscribe we will not get anything
