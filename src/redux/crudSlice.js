import { createSlice } from "@reduxjs/toolkit";
import getAllUsers from "../services/getAllUsers";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    isLoaded: false
  },

  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setUserList } = userSlice.actions;
export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  getAllUsers()
    .then(res => {
      dispatch(setUserList(res));
    })
    .catch(err => {
      console.log(err);
    })
}