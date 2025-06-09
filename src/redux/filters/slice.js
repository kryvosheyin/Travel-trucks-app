import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  location: '',
  equipment: [],
  vehicleType: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      for (const key in payload) {
        state[key] = payload[key];
      }
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
