const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;


const initialState = {
    numberOfIceCreame:20,
}

const iceCreamSlice = createSlice ({
    name:'iceCream',
    initialState,
    reducers:{
        ordered: (state,action) => {
            state.numberOfIceCreame -= action.payload
        },
        restocked: (state,action) => {
            state.numberOfIceCreame += action.payload
        }
    },
    // extraReducers:{            // this is one method 
    //     ['cake/ordered']: state => {
    //         state.numberOfIceCreame--
    //     }
    // }   
    
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numberOfIceCreame--
        })
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamAction = iceCreamSlice.actions;