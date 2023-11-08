const store= require('./app/store');
const cakeAction = require('./features/cake/cakeSlice').cakeActions
const iceCreamAction = require('./features/icecream/iceCremeSlice').iceCreamAction
const fetchUsers = require('./features/user/userSlice').fetchUsers



console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('Updated State', store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(3))


// store.dispatch(iceCreamAction.ordered(5))
// store.dispatch(iceCreamAction.restocked(3))


// unsubscribe()