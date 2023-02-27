const {createSlice} = require("@reduxjs/toolkit");

const postListsSlice = createSlice({
  name: 'postLists',
  initialState: {
    summary: null,
    text: null,
    type: 'Note',
    isFavourite: false
  },
  reducers: {
    loadPost(state, action) {
      state.summary = action.payload.summary
      state.text = action.payload.text
      state.type = action.payload.type
    },
    toggle(state) {
      state.isFavourite = !state.isFavourite
    }
  }
})