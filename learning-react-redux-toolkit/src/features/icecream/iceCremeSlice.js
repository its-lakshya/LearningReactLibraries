import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numberOfIceCream:20,
}

const iceCreamSlice = createSlice ({
    name:'iceCream',
    initialState,
    reducers:{
        ordered: (state,action) => {
            state.numberOfIceCream -= action.payload
        },
        restocked: (state,action) => {
            state.numberOfIceCream += action.payload
        }
    },
    // extraReducers:{            // this is one method 
    //     ['cake/ordered']: state => {
    //         state.numberOfIceCreame--
    //     }
    // }   
    
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numberOfIceCream--
        })
    }
})


export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions;