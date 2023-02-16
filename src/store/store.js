import {configureStore} from "@reduxjs/toolkit";
import createPostSlice from "./create-post-slice";

const store = configureStore({
  reducer: { createPost: createPostSlice.reducer }
})

export default store;