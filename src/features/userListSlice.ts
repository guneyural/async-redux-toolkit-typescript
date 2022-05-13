import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserType {
  name: string;
  age: number;
}

interface InitialStateType {
  users: UserType[];
}

const initialState: InitialStateType = {
  users: [],
};

export const userListSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users.filter((item) => item.name !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userListSlice.actions;
export default userListSlice.reducer;
