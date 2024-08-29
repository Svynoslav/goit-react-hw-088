import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
  state.error = false;
  state.loading = true;
};
const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        const i = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(i, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      }),
});

export default slice.reducer;
