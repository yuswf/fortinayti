import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    daily: [],
    featured: [],
    specialFeatured: [],
};

export const dataSlice = createSlice({
    name: '_',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.daily = action.payload.daily;
            state.featured = action.payload.featured;
            state.specialFeatured = action.payload.specialFeatured;
        },
    },
});

export const {setData} = dataSlice.actions;
export default dataSlice.reducer;
