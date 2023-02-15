const {createSlice} = require("@reduxjs/toolkit");

const createCartSlice = createSlice(
  {
    name: 'createCart',
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

export const createCartActions = createCartSlice.actions;

export default createCartSlice;