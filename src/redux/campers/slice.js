import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "./operations";
import { changeFilter } from "../filters/slice";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    page: 1,
    items: [],
    camper: null,
    loading: false,
    error: null,
  },
  reducers: {
    changePage(state, { payload }) {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, { payload: { items } }) => {
        state.loading = false;
        state.error = null;
        state.page = 1;
        state.items = items;
      })
      .addCase(getCampers.rejected, handleRejected)
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.camper = payload;
      })
      .addCase(getCamperById.rejected, handleRejected)
      .addCase(changeFilter, (state) => {
        state.page = 1;
      });
  },
});

export const { changePage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
