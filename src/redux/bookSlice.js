import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "../Utils/BookData";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: booksData
  },
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload); // add at top
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
