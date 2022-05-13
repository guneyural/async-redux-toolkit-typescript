import { configureStore } from "@reduxjs/toolkit";
import UserListReducer from "../features/userListSlice";
import UserSlice from "../features/userSlice";

export const store = configureStore({
  reducer: { UsersList: UserListReducer, Users: UserSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
