const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    loadUsers: (users, action) => [...action.payload],
  },
});

export default usersSlice.reducer;
