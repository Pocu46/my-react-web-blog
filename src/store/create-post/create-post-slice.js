const {createSlice} = require("@reduxjs/toolkit");

const createPostSlice = createSlice(
  {
    name: 'createPost',
    initialState: {
      summary: null,
      text: null,
      type: 'Note'
    },
    reducers: {
      addNewPost(state, action) {
        state.summary = action.payload.summary
        state.text = action.payload.text
        state.type = action.payload.type
      }
    }
  }
)

export const createPostActions = createPostSlice.actions;

export default createPostSlice;