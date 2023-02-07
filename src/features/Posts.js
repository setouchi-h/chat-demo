import { createSlice } from "@reduxjs/toolkit"
import { PostsData } from "data/DummyData"

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: PostsData },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

export const { addPost } = postSlice.actions
export default postSlice.reducer
