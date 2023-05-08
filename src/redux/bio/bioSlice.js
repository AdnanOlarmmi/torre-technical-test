import { createSlice } from '@reduxjs/toolkit';
import getUserBio from '../../api/getUserBio';

const initialState = {
  bio: { data: '' },
  status: 'idle',
  error: null,
};

const bioSlice = createSlice({
  name: 'bio',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserBio.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserBio.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bio = action.payload;
        console.log(action.payload);
      })
      .addCase(getUserBio.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bioSlice.reducer;
export const selectBio = (state) => state.bio.bio;
export const selectBioStatus = (state) => state.bio.status;
export const selectBioError = (state) => state.bio.error;
export const { getallBio } = bioSlice.actions;
