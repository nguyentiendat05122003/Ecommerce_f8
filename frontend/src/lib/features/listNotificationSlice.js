import notificationApiRequest from "@/apiRequests/notification";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  listNotification: [],
};
export const fetchNotifications = createAsyncThunk(
  "notification/fetchNotifications",
  async () => {
    try {
      const response = await notificationApiRequest.getNotification();
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
export const fetchAddNotifications = createAsyncThunk(
  "notification/fetchAddNotifications",
  async (data) => {
    try {
      const response = await notificationApiRequest.createNotification(data);
      return response;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);
export const listNotificationSlice = createSlice({
  name: "listNotification",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.listNotification = [action.payload, ...state.listNotification];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.listNotification = action.payload;
    });
    builder.addCase(fetchAddNotifications.fulfilled, (state, action) => {
      state.listNotification = [action.payload, ...state.listNotification];
    });
  },
});

export const { addNotification } = listNotificationSlice.actions;
export const listNotificationReducer = listNotificationSlice.reducer;
