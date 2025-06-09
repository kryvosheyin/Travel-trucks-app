import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/campers");
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (camperId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/campers/${camperId}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
