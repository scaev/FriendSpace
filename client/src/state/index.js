import { createSlice } from "@reduxjs/toolkit";

// stored in the global scope, this date will be accessible in entire app
// you cant change this state directly, with tooklist we can edit
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

//these are simple functions that modify our state
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    setMode: (state) => {
      // updates the state state.mode is the previous state and we replace it with the new state.mode
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user; //we are sending the user parameter from this function
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id == action.payload.post_id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setFriends, setPost, setPosts, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
