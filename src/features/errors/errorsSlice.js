import { createSlice } from '@reduxjs/toolkit';

const errorsSlice = createSlice({
    name: 'errors',
    initialState: [],
    reducers: {
        addError: (state, action) => {
            state.push(action.payload);
        },
        removeError: (state, action) => {
            return state.filter(error => error.id !== action.payload);
        },
    },
});

export const { addError, removeError } = errorsSlice.actions;
export default errorsSlice.reducer;
