import {configureStore} from "@reduxjs/toolkit";
import createPostSlice from "./create-post/create-post-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { createPost: createPostSlice.reducer, ui: uiSlice.reducer }
})

export default store;